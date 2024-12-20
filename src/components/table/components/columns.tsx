"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

export const checkBoxColumn: ColumnDef<unknown> = {
  id: "select",
  header: ({ table }) => (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Select all"
      className="translate-y-[2px] border-gray-500"
    />
  ),
  cell: ({ row }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
      className="translate-y-[2px] border-gray-500"
    />
  ),
  enableSorting: false,
  enableHiding: false,
};

// {
//   id: 'actions',
//   cell: ({ row }) => <DataTableRowActions row={row} />,
// },
