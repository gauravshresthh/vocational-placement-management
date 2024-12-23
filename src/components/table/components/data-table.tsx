import {
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type ExpandedState,
  type SortingState,
  type VisibilityState,
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import type { ButtonGroupProps, DataTableProps, Pagination } from "../types";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { checkBoxColumn } from "./columns";
import { NormalTable } from "./data-normal-table";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";
import { VirtualizeTable } from "./data-virtualize-table";
import { fuzzyFilter } from "./table-functions";

export const DataTable = <TData,>({
  useTableFunctions,
  onRefresh,
  columns = [],
  isLoading,
  data = [],
  rowOnClick,
  buttonGroup,
  allowSelection = false,
  isStatic,
  searchPlaceholder,
  onSelection,
  onRowDelete,
  allowSearch,
  expandFirstLevel = false,
  className,
  isVirtualized,
  showDownload,
  showRefresh,
  showView,
  toolbarContent,
  freezeFirstColumn,
  pagination,
}: DataTableProps<TData>) => {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [expanded, setExpanded] = useState<ExpandedState>(
    expandFirstLevel
      ? Object.keys(data).reduce(
          (result, index) => {
            result[index] = true;
            return result;
          },
          {} as Record<string, boolean>,
        )
      : {},
  );

  const finalColumn = (
    allowSelection || !isStatic ? [checkBoxColumn, ...columns] : columns
  ) as ColumnDef<TData>[];

  const virtualized = isVirtualized || data.length > 400;

  const table = useReactTable<TData>(
    useTableFunctions
      ? {
          data,
          columns: finalColumn,
          defaultColumn: {
            enableSorting: false,
            enableColumnFilter: false,
          },
          state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
            expanded,
            ...(virtualized
              ? { pagination: { pageIndex: 0, pageSize: data.length } }
              : {}),
          },
          filterFns: {
            dateTime: () => true,
            amount: () => true,
            fuzzy: fuzzyFilter,
          },

          globalFilterFn: fuzzyFilter,
          enableRowSelection: true,
          onRowSelectionChange: setRowSelection,
          onSortingChange: setSorting,
          onColumnFiltersChange: setColumnFilters,
          onColumnVisibilityChange: setColumnVisibility,
          getCoreRowModel: getCoreRowModel(),
          getFilteredRowModel: getFilteredRowModel(),
          getPaginationRowModel: getPaginationRowModel(),
          getSortedRowModel: getSortedRowModel(),
          getFacetedRowModel: getFacetedRowModel(),
          getFacetedUniqueValues: getFacetedUniqueValues(),
          onExpandedChange: setExpanded,
          getExpandedRowModel: getExpandedRowModel(),
          getFacetedMinMaxValues: getFacetedMinMaxValues(),
        }
      : {
          data,
          columns: finalColumn,
          defaultColumn: {
            enableSorting: false,
            enableColumnFilter: false,
          },
          state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
            expanded,
          },
          filterFns: {
            dateTime: () => true,
            amount: () => true,
            fuzzy: fuzzyFilter,
          },
          enableRowSelection: true,
          onRowSelectionChange: setRowSelection,
          onSortingChange: setSorting,
          onColumnFiltersChange: setColumnFilters,
          onColumnVisibilityChange: setColumnVisibility,
          getCoreRowModel: getCoreRowModel(),
          getFilteredRowModel: getFilteredRowModel(),
          getPaginationRowModel: getPaginationRowModel(),
          getSortedRowModel: getSortedRowModel(),
          getFacetedRowModel: getFacetedRowModel(),
          getFacetedUniqueValues: getFacetedUniqueValues(),
          onExpandedChange: setExpanded,
          manualFiltering: true,
          enableSorting: true,
          manualSorting: true,
          manualPagination: true,
          globalFilterFn: fuzzyFilter,
          getExpandedRowModel: getExpandedRowModel(),
        },
  );

  // useEffect(() => {
  //   // Ensure onSelection is called with the selected rows
  //   if (onSelection) {
  //     const selectedRows = Object.keys(rowSelection).map(
  //       (key) => data[Number(key)]
  //     );
  //     onSelection(selectedRows.filter(Boolean) as TData[]);
  //   }
  // }, [onSelection, rowSelection, data]);

  useEffect(() => {
    if (onSelection) {
      const selectedRows = Object.keys(rowSelection).map(
        (key) => data[Number(key)],
      );
      onSelection(selectedRows);
    }
  }, [onSelection, rowSelection, data]);

  // useEffect(() => {

  //   onSelection?.(table.getSelectedRowModel().rows.map((e) => e?.original));
  // }, [onSelection, table]);

  const isRowSelected = Object.values(rowSelection).length > 0;
  const showToolbar =
    !isStatic ||
    allowSearch ||
    buttonGroup ||
    isRowSelected ||
    showDownload ||
    showRefresh ||
    showView ||
    toolbarContent;
  return (
    <div className="flex flex-col gap-6">
      {showToolbar && (
        <DataTableToolbar
          onRowDelete={() =>
            onRowDelete?.(
              table.getSelectedRowModel().rows.map((e) => e?.original),
            )
          }
          showDownload={showDownload}
          toolbarContent={toolbarContent}
          showRefresh={showRefresh}
          showView={showView}
          isStatic={isStatic}
          allowSearch={allowSearch}
          isRowSelected={isRowSelected}
          searchPlaceholder={searchPlaceholder}
          onRefresh={onRefresh as () => void}
          buttonGroup={buttonGroup as ButtonGroupProps}
          table={table}
          onExport={{ excel: () => {} }}
        />
      )}
      <Card>
        <CardContent className="p-0 block">
          {virtualized ? (
            <VirtualizeTable
              className={className as string}
              isLoading={isLoading as boolean}
              table={table}
              useTableFunctions={useTableFunctions as boolean}
              rowOnClick={rowOnClick}
            />
          ) : (
            <NormalTable
              allowSelection={allowSelection}
              freezeFirstColumn={freezeFirstColumn}
              className={className as string}
              isLoading={isLoading as boolean}
              table={table}
              useTableFunctions={useTableFunctions as boolean}
              columns={columns as Column<TData, unknown>[]}
              rowOnClick={rowOnClick}
            />
          )}
        </CardContent>
      </Card>
      {pagination && (
        <DataTablePagination
          pagination={pagination as Pagination}
          useTableFunctions={useTableFunctions as boolean}
          table={table}
        />
      )}
    </div>
  );
};
