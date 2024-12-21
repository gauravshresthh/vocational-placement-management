"use client";

import { Suspense, useMemo } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { TableActionMenu } from "@/components/table/components/data-table-row-actions";
import { Table } from "@/components/table";
import { users } from "../_data/UserData";
import { UserAdmin } from "../_schema/UserSchema";
import { TableEditAction } from "@/components/table/table-actions/TableEditAction";

import TableName from "@/components/shared/TableName";
import { Typography } from "@/components/ui/typography";

export const LogBookTable = () => {
  const columns = useMemo<ColumnDef<UserAdmin>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "Name",

        cell: ({ row }) => {
          return (
            <TableName
              name={row.original.userName}
              course={row.original.course}
              image={row.original.image}
              route="/"
            />
          );
        },
        enableSorting: true,
      },
      {
        header: "Completion Date",
        accessorKey: "date",
        enableSorting: true,
      },
      {
        header: "Log Books",
        accessorKey: "log_book",
        cell: ({ row }) => {
          return (
            <div>
              <Typography variant={"p5"}>{row.original.log_book}</Typography>
              <Typography variant={"p5"}>
                {row.original.log_book_datte}
              </Typography>
            </div>
          );
        },
        enableSorting: true,
      },

      {
        id: "actions",
        header: "",
        meta: { width: "5px" },
        cell: () => (
          <TableActionMenu
            menuList={[
              { content: <TableEditAction actionContent="asdfsdf" /> },
            ]}
          />
        ),
      },
    ],
    []
  );
  const kycData = useMemo(() => {
    return users ?? [];
  }, []);

  return (
    <Suspense>
      <Table
        allowSearch={false}
        isStatic={true}
        data={kycData}
        columns={columns}
      />
    </Suspense>
  );
};
