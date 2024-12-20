import { Check, ListFilter } from "lucide-react";
import QueryString from "qs";
import { useEffect, useState } from "react";

import {
  DataTableListFilterProps,
  tableFilterOptions,
  URLFilter,
} from "../types";

import { useSearchParams } from "@/hooks/useSearchParams";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const DataTableListFilter = <TData,>({
  column,
  options = [],
  useTableFunctions,
}: DataTableListFilterProps<TData>) => {
  const { searchParams, setSearchParams } = useSearchParams();
  const facets = column?.getFacetedUniqueValues();
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const selectedValues = new Set(column?.getFilterValue() as string[]);
  const columnName = column?.id as string;
  const parsedQuery = QueryString.parse(searchParams.get("filter") as string, {
    allowDots: true,
    parseArrays: true,
    comma: true,
  }) as URLFilter;

  const setFilterParams = (value: string[]) => {
    setSelectedData(value);
    if (value.length) {
      const queryString = QueryString.stringify(
        {
          ...parsedQuery,
          [columnName]: {
            value: value.length ? value : [],
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
      setSelectedData((parsedQuery?.[columnName]?.value ?? []) as string[]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnName, useTableFunctions]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="unstyled" size="sm">
          <ListFilter className="mr-2 h-4 w-4" />{" "}
          {(selectedValues?.size > 0 || selectedData?.length > 0) && (
            <sup className="flex items-center justify-center h-4 w-4 rounded-full bg-primary text-primary-foreground ">
              {selectedValues?.size || selectedData?.length}
            </sup>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder="title" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.length &&
                options?.map((option: tableFilterOptions) => {
                  const isSelected = useTableFunctions
                    ? selectedValues?.has(option?.value)
                    : selectedData?.includes(option.value);
                  return (
                    <CommandItem
                      key={option?.value}
                      onSelect={() => {
                        if (useTableFunctions) {
                          if (isSelected) {
                            selectedValues.delete(option?.value);
                          } else {
                            selectedValues.add(option?.value);
                          }
                          const filterValues = Array.from(selectedValues);
                          column?.setFilterValue(
                            filterValues.length ? filterValues : undefined
                          );
                        } else if (selectedData?.includes(option?.value)) {
                          setFilterParams(
                            selectedData?.filter((e) => e !== option.value)
                          );
                        } else {
                          setFilterParams([...selectedData, option.value]);
                        }
                      }}
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible"
                        )}
                      >
                        <Check className={cn("h-4 w-4")} />
                      </div>
                      {option.icon && (
                        <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                      )}
                      <span>{option.label}</span>
                      {facets?.get(option.value) && (
                        <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                          {facets.get(option.value)}
                        </span>
                      )}
                    </CommandItem>
                  );
                })}
            </CommandGroup>
            {(selectedValues?.size > 0 || selectedData?.length > 0) && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => {
                      if (useTableFunctions) {
                        column?.setFilterValue(undefined);
                      } else {
                        setSelectedData([]);
                      }
                    }}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
