/* eslint-disable no-nested-ternary */
import { ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";
import QueryString from "qs";

import { DataTableSortHeaderProps } from "../types";

import { useSearchParams } from "@/hooks/useSearchParams";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const DataTableSortHeader = <TData,>({
  column,
  title,
  className,
  useTableFunctions,
}: DataTableSortHeaderProps<TData>) => {
  const { searchParams, setSearchParams } = useSearchParams();
  const sortParams = QueryString.parse(searchParams.get("sort") as string, {
    allowDots: true,
    parseArrays: true,
    comma: true,
  });

  const columnName = column?.columnDef?.meta?.orderId || column?.id;
  const isActive = !!sortParams[columnName];

  // manualSorting;
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  const sortFn = (value: "asc" | "desc") => {
    if (!column.getCanSort()) {
      return null;
    }

    if (
      (sortParams[columnName] === "desc" && value === "desc") ||
      (sortParams[columnName] === "asc" && value === "asc")
    ) {
      delete sortParams[columnName];
      const queryString = QueryString.stringify(
        {
          ...sortParams,
        },
        { allowDots: true, arrayFormat: "brackets", encode: false }
      );
      setSearchParams({ sort: queryString });
    } else if (value === "asc") {
      const queryString = QueryString.stringify(
        {
          ...sortParams,
          [columnName]: value,
        },
        { allowDots: true, arrayFormat: "brackets", encode: false }
      );
      searchParams.delete("paginate");
      setSearchParams({ sort: queryString });
    } else if (value === "desc") {
      const queryString = QueryString.stringify(
        {
          ...sortParams,
          [columnName]: value,
        },
        { allowDots: true, arrayFormat: "brackets", encode: false }
      );
      searchParams.delete("paginate");
      setSearchParams({ sort: queryString });
    }
    return null;
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="unstyled"
            size="sm"
            className="h-8 px-0 text-gray-500  data-[state=open]:bg-accent"
          >
            {column.getIsSorted() === "desc" ||
            (isActive && sortParams[columnName] === "desc") ? (
              <ChevronDown className=" h-4 w-4" />
            ) : column.getIsSorted() === "asc" ||
              (isActive && sortParams[columnName] === "asc") ? (
              <ChevronUp className=" h-4 w-4 " />
            ) : (
              <ChevronsUpDown className="h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem
            className={cn([""], {
              "bg-accent":
                column.getIsSorted() === "asc" ||
                (isActive && sortParams[columnName] === "asc"),
            })}
            onClick={() => {
              if (useTableFunctions) {
                if (column.getIsSorted() === "asc") {
                  column.clearSorting();
                } else {
                  column.toggleSorting(false);
                }
              } else {
                sortFn("asc");
              }
            }}
          >
            <ChevronUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem
            className={cn([""], {
              "bg-accent":
                column.getIsSorted() === "desc" ||
                (isActive && sortParams[columnName] === "desc"),
            })}
            onClick={() => {
              if (useTableFunctions) {
                if (column.getIsSorted() === "desc") {
                  column.clearSorting();
                } else {
                  column.toggleSorting(false);
                }
              } else {
                sortFn("desc");
              }
            }}
          >
            <ChevronDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem
            onClick={() => {
              if (useTableFunctions) {
                column.toggleVisibility(false);
              }
            }}
          >
            <EyeOff className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
