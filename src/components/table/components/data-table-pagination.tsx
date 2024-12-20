import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import QueryString from "qs";

import type { DataTablePaginationProps } from "../types";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "@/hooks/useSearchParams";
import { Fragment, useCallback, useMemo } from "react";
import { getPaginationList } from "../utils";

export const DataTablePagination = <TData,>({
  table,
  useTableFunctions,
  pagination,
}: DataTablePaginationProps<TData>) => {
  const { searchParams, setSearchParams } = useSearchParams();
  const paginationParams = useMemo(
    () => QueryString.parse(searchParams?.get("paginate") as string),
    [searchParams]
  );
  const limit = useTableFunctions
    ? table?.getState()?.pagination?.pageSize
    : Number(paginationParams.limit ?? 10);

  const total = pagination?.totalRow;
  const page = useTableFunctions
    ? Number(table?.getState()?.pagination?.pageIndex) + 1
    : Number(paginationParams.page ?? 1);

  const minPage = paginationParams.page ?? 1;
  const maxPage = !Number.isNaN(Number(total) / limit)
    ? Math.ceil(Number(total) / limit)
    : 1;

  const getShowingRow = useCallback(() => {
    const currentIndex =
      page === 1
        ? { startRow: page, lastRow: limit }
        : {
            startRow: page * limit,
            lastRow: page * limit + limit,
          };

    return currentIndex;
  }, [page, limit]);
  const avg = Math.ceil(getPaginationList(maxPage, page).length / 2);
  const paginationLength = getPaginationList(maxPage, page).length;
  const showsStartEllipsis =
    page > Math.ceil(avg) && maxPage > paginationLength;
  const showsEndEllipsis =
    page < maxPage - avg + 1 && maxPage > paginationLength;
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex gap-5 items-center">
        <p className="text-xs font-normal text-muted-foreground">
          Showing {getShowingRow().startRow} - {getShowingRow().lastRow}&nbsp;
          of {total}
        </p>
        <div className="flex items-center gap-2">
          <Select
            value={
              useTableFunctions
                ? `${table.getState().pagination.pageSize}`
                : String(limit)
            }
            onValueChange={(newValue) => {
              if (newValue) {
                if (useTableFunctions) {
                  table.setPageSize(Number(newValue));
                } else {
                  setSearchParams({
                    paginate: QueryString.stringify({
                      page: 1,
                      limit: newValue,
                    }),
                  });
                }
              }
            }}
          >
            <SelectTrigger className="px-1 py-0 h-8 flex flex-row items-center gap-2">
              <SelectValue
                placeholder={
                  useTableFunctions
                    ? table.getState().pagination.pageSize
                    : limit
                }
              />
            </SelectTrigger>
            <SelectContent className="min-w-20">
              {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((limit) => (
                <SelectItem key={limit} value={`${limit}`}>
                  {limit}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => {
                  if (useTableFunctions) {
                    table.setPageIndex(0);
                  } else {
                    setSearchParams({
                      paginate: QueryString.stringify({
                        page: 1,
                        limit,
                      }),
                    });
                  }
                }}
                disabled={
                  useTableFunctions
                    ? !table.getCanPreviousPage()
                    : page === minPage
                }
              >
                <span className="sr-only">Go to first page</span>
                <ChevronsLeft className="h-4 w-4" />
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => {
                  if (useTableFunctions) {
                    table.previousPage();
                  } else {
                    setSearchParams({
                      paginate: QueryString.stringify({
                        page: +page - 1,
                        limit,
                      }),
                    });
                  }
                }}
                disabled={
                  useTableFunctions ? !table.getCanPreviousPage() : page === 1
                }
              >
                <span className="sr-only">Go to previous page</span>
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </PaginationItem>

            {showsStartEllipsis && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </>
            )}

            {getPaginationList(maxPage, page).map((pg) => (
              <Fragment key={pg}>
                <PaginationItem>
                  <Button
                    onClick={() => {
                      if (useTableFunctions) {
                        table.setPageIndex(pg);
                      } else {
                        setSearchParams({
                          paginate: QueryString.stringify({
                            page: pg,
                            limit,
                          }),
                        });
                      }
                    }}
                    variant={pg === page ? "default" : "outline"}
                    className="h-8 w-8 p-0"
                  >
                    {pg}
                  </Button>
                </PaginationItem>
              </Fragment>
            ))}

            {showsEndEllipsis && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <Button
                variant="outline"
                className="h-8 w-8 p-0"
                onClick={() => {
                  if (useTableFunctions) {
                    table.setPageIndex(table.getPageCount() - 1);
                  } else {
                    setSearchParams({
                      paginate: QueryString.stringify({
                        page: +page + 1,
                        limit,
                      }),
                    });
                  }
                }}
                disabled={
                  useTableFunctions
                    ? !table.getCanNextPage()
                    : page === Math.ceil(Number(total) / limit)
                }
              >
                <span className="sr-only">Go to next page</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onClick={() => {
                  if (useTableFunctions) {
                    table.setPageIndex(table.getPageCount() - 1);
                  } else {
                    setSearchParams({
                      paginate: QueryString.stringify({
                        page: maxPage,
                        limit,
                      }),
                    });
                  }
                }}
                disabled={
                  useTableFunctions ? !table.getCanNextPage() : page === maxPage
                }
              >
                <span className="sr-only">Go to last page</span>
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
