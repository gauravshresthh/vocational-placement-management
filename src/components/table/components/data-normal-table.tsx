import { flexRender } from "@tanstack/react-table";

import type { tableTypeProps } from "../types";
import { DataTableColumnDateNumberFilter } from "./data-table-column-date-number-filter";
import { DataTableSortHeader } from "./data-table-column-header";
import { DataTableColumnSearch } from "./data-table-column-search";
import { DataTableListFilter } from "./data-table-list-filter";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

export const NormalTable = <TData,>({
  table,
  isLoading,
  useTableFunctions,
  rowOnClick,
  columns,
  allowSelection,
  freezeFirstColumn,
}: tableTypeProps<TData>) => (
  <>
    <Table
      className={cn("border-none", {
        "h-96": isLoading,
        "h-60": !isLoading && table?.getRowModel()?.rows?.length <= 0,
      })}
    >
      <TableHeader className="sticky top-0 bg-transparent !rounded-md z-10 ">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className="hover:bg-transparent h-[49px] "
          >
            {headerGroup.headers.map((header) => {
              const filterType =
                header.column.columnDef.meta?.filterOption?.type ?? "search";

              return (
                <TableHead
                  className={cn(
                    [
                      "text-left px-3 py-2 text-black text-sm font-semibold bg-[#FCFDFD] dark:text-[#FCFDFD]  dark:bg-custom-black first:rounded-tl-xl last:rounded-tr-xl",
                    ],
                    {
                      "text-right": header.column.columnDef?.meta?.isNumeric,
                      "[&:nth-child(1)]:sticky [&:nth-child(1)]:left-0 [&:nth-child(2)]:sticky [&:nth-child(2)]:left-[80px] bg-background":
                        allowSelection && freezeFirstColumn,
                      "[&:nth-child(1)]:sticky [&:nth-child(1)]:left-0 bg-background ":
                        !allowSelection && freezeFirstColumn,
                    }
                  )}
                  style={{
                    width: header.column.columnDef?.meta?.width ?? "auto",
                    textAlign: header.column.columnDef.meta?.isNumeric
                      ? "right"
                      : "left",
                    minWidth: header.column.columnDef?.meta?.width ?? "auto",
                  }}
                  key={header.id}
                  colSpan={header.colSpan}
                >
                  <div
                    className={cn(["flex gap-1 items-center w-full "], {
                      "justify-end": header.column.columnDef.meta?.isNumeric,
                    })}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {(() => {
                      if (
                        header.column.getCanFilter() &&
                        filterType === "list"
                      ) {
                        return (
                          <DataTableListFilter
                            useTableFunctions={useTableFunctions}
                            column={header.column}
                            options={
                              header.column.columnDef?.meta?.filterOption?.list
                            }
                          />
                        );
                      }
                      if (
                        header.column.getCanFilter() &&
                        filterType === "search"
                      ) {
                        return (
                          <DataTableColumnSearch
                            useTableFunctions={useTableFunctions}
                            column={header.column}
                          />
                        );
                      }
                      if (
                        header.column.getCanFilter() &&
                        (filterType === "date" || filterType === "number")
                      ) {
                        return (
                          <DataTableColumnDateNumberFilter
                            useTableFunctions={useTableFunctions}
                            type={filterType}
                            column={header.column}
                          />
                        );
                      }
                      if (header.column.getCanSort()) {
                        return (
                          <DataTableSortHeader
                            useTableFunctions={useTableFunctions}
                            column={header.column}
                          />
                        );
                      }

                      return null;
                    })()}
                  </div>
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {isLoading && (
          <TableRow className="absolute w-full  h-full bg-muted/50">
            <TableCell
              colSpan={columns?.length}
              className="text-center  h-full w-full flex pt-[200px] justify-center "
            >
              <Icon className="animate-spin" icon="Loader" />.
            </TableCell>
          </TableRow>
        )}

        {!isLoading && table?.getRowModel()?.rows?.length <= 0 && (
          <TableRow className="absolute w-full hover:bg-background">
            <TableCell
              colSpan={columns?.length}
              className="h-24 text-center w-full flex items-center justify-center"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
        {table.getRowModel().rows?.length > 0 &&
          table.getRowModel().rows.map((row) => (
            <TableRow
              className="h-[75px] "
              style={{
                cursor: rowOnClick ? "pointer" : "auto",
              }}
              onClick={() => rowOnClick?.(row)}
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  style={{
                    minWidth: cell.column.columnDef.meta?.width,
                    width: cell.column.columnDef.meta?.width,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "20rem",
                    whiteSpace: "pre",
                    textAlign: cell.column.columnDef.meta?.isNumeric
                      ? "right"
                      : "left",
                  }}
                  className={cn(
                    [
                      "px-3 py-2 text-sm font-normal last:flex last:justify-end",
                    ],
                    {
                      " flex justify-end self-end text-right":
                        cell.column.columnDef.meta?.isNumeric,
                      "[&:nth-child(1)]:sticky [&:nth-child(1)]:left-0 [&:nth-child(2)]:sticky [&:nth-child(2)]:left-[80px] bg-background ":
                        allowSelection && freezeFirstColumn,
                      "[&:nth-child(1)]:sticky [&:nth-child(1)]:left-0 bg-background ":
                        !allowSelection && freezeFirstColumn,
                    }
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </>
);
