import { ListFilter } from "lucide-react";
import QueryString from "qs";
import { useEffect, useState } from "react";

import {
  DataTableListFilterProps,
  URLFilter,
  URLFilterComparator,
} from "../types";

import { useSearchParams } from "@/hooks/useSearchParams";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export const DataTableColumnDateNumberFilter = <TData,>({
  column,
  type,
  useTableFunctions,
}: Omit<DataTableListFilterProps<TData>, "options">) => {
  const [comperator, setComperator] = useState<URLFilterComparator>("=");
  const [data, setData] = useState<{
    from: string | null;
    to: string | null;
  }>({ from: null, to: null });
  const { searchParams, setSearchParams } = useSearchParams();
  const value = column?.getFilterValue() as [number, number, string];

  const columnName = column?.id as string;
  const parsedQuery = QueryString.parse(searchParams.get("filter") as string, {
    allowDots: true,
    parseArrays: true,
    comma: true,
  }) as URLFilter;

  const setFilterParams = ({
    comperatorValue,
    from,
    to,
  }: {
    comperatorValue: URLFilterComparator;
    from: string | null;
    to: string | null;
  }) => {
    if (from) {
      const queryString = QueryString.stringify(
        {
          ...parsedQuery,
          [columnName]: {
            value: { from, to },
            compare: comperatorValue,
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
    setData({ from, to });
    setComperator(comperatorValue);
  };

  // seting default value to table filter
  useEffect(() => {
    if (!useTableFunctions) {
      const defaultValue = parsedQuery?.[columnName]?.value as {
        from: string;
        to: string;
      };
      const defaultComperator: URLFilterComparator =
        parsedQuery?.[columnName]?.compare;
      setData({ from: defaultValue?.from, to: defaultValue?.to });
      setComperator(defaultComperator ?? "=");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnName, useTableFunctions]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="unstyled" size="sm">
          <ListFilter className="mr-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2" align="start">
        <div className="flex flex-col gap-2 w-full">
          <div className="text-sm font-500 leading-1.5">Filter</div>
          <Tabs
            value={comperator || value?.[2]}
            defaultValue="="
            onValueChange={(e) => {
              if (useTableFunctions) {
                column?.setFilterValue((old: [number, number]) => [
                  old?.[0],
                  old?.[1],
                  e,
                ]);
                setComperator(e as URLFilterComparator);
              } else {
                setFilterParams({
                  from: data.from,
                  to: data.to,
                  comperatorValue: e as URLFilterComparator,
                });
              }
            }}
            className="w-full"
          >
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="=">
                =
              </TabsTrigger>
              <TabsTrigger className="w-full" value=">">
                &gt;
              </TabsTrigger>
              <TabsTrigger className="w-full" value="<">
                &lt;
              </TabsTrigger>
              <TabsTrigger className="w-full" value="<>">
                &lt; &gt;
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex flex-col gap-1 w-full">
            <div className="text-sm font-500 leading-1.5 capitalize">
              {comperator === "<>" ? "Min" : type}
            </div>

            <Input
              type={type}
              value={data.from || value?.[0]}
              onChange={(e) => {
                if (useTableFunctions) {
                  const val =
                    type === "number" ? e.target.valueAsNumber : e.target.value;
                  column?.setFilterValue((old: [number, number]) => [
                    val,
                    old?.[1],
                    comperator,
                  ]);
                } else {
                  setFilterParams({
                    from: e.target.value,
                    to: data.to,
                    comperatorValue: comperator,
                  });
                }
              }}
            />
          </div>
          {comperator === "<>" && (
            <div className="flex flex-col gap-1 w-full">
              <div className="text-sm font-500 leading-1.5 capitalize">
                {comperator === "<>" ? "Max" : type}
              </div>
              <Input
                type={type}
                value={data.to || value?.[1]}
                onChange={(e) => {
                  if (useTableFunctions) {
                    const val =
                      type === "number"
                        ? e.target.valueAsNumber
                        : e.target.value;
                    column?.setFilterValue((old: [number, number]) => [
                      old?.[0],
                      val,
                      comperator,
                    ]);
                  } else {
                    setFilterParams({
                      ...data,
                      to: e.target.value,
                      comperatorValue: comperator,
                    });
                  }
                }}
              />
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
