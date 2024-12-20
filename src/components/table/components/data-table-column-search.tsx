import { ListFilter } from "lucide-react";
import QueryString from "qs";
import { useEffect, useState } from "react";

import { DataTableListFilterProps, URLFilter } from "../types";

import { useSearchParams } from "@/hooks/useSearchParams";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const DataTableColumnSearch = <TData,>({
  column,
  useTableFunctions,
}: Omit<DataTableListFilterProps<TData>, "options">) => {
  const { searchParams, setSearchParams } = useSearchParams();
  const [search, setSearch] = useState<string | undefined>();
  const tableFilterValue = column?.getFilterValue();
  const columnName = column?.id as string;
  const parsedQuery = QueryString.parse(searchParams.get("filter") as string, {
    allowDots: true,
    parseArrays: true,
    comma: true,
  }) as URLFilter;

  const setFilterParams = (data: string) => {
    setSearch(data);
    if (data.length) {
      const queryString = QueryString.stringify(
        {
          ...parsedQuery,
          [columnName]: {
            value: data.length ? data : [],
            compare:
              column?.columnDef.meta?.filterOption?.comparator ?? "CONTAINS",
          },
        },
        { allowDots: true, arrayFormat: "brackets", encode: false }
      );
      searchParams.delete("paginate");
      setSearchParams({ filter: queryString });
    } else {
      delete parsedQuery[columnName];
      const queryString = QueryString.stringify(
        {
          ...parsedQuery,
        },
        { allowDots: true, arrayFormat: "brackets", encode: false }
      );
      searchParams.delete("paginate");
      setSearchParams({ filter: queryString });
    }
  };
  // seting default value to table filter
  useEffect(() => {
    if (!useTableFunctions) {
      setSearch(parsedQuery?.[columnName]?.value as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnName, useTableFunctions]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="unstyled" size="sm">
          <ListFilter className="mr-2 h-4 w-4" />{" "}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2" align="start">
        <div className="flex flex-col gap-2 w-full">
          <div className="text-sm font-500 leading-1.5">Search</div>
          <Input
            value={((tableFilterValue || search) as string) || ""}
            onChange={(e) => {
              if (useTableFunctions) {
                column?.setFilterValue(e.target.value);
              } else {
                setFilterParams(e.target.value);
              }
            }}
            placeholder="title"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
