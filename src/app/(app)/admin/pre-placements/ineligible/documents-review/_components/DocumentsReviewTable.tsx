"use client";

import { Suspense, useCallback, useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { TableActionMenu } from "@/components/table/components/data-table-row-actions";
import { Table } from "@/components/table";

// import { TableEditAction } from "@/components/table/table-actions/TableEditAction";

import TableName from "@/components/shared/TableName";
import { Typography } from "@/components/ui/typography";

// import { Button } from "@/components/ui/button";
import Search from "@/components/header/search";
import { useDisclosure } from "@/hooks/useDisclosure";
import { Filter } from "../../students/_components/filter";
import { IneligibleData } from "../../_schema/UserSchema";
import { users } from "../../_data/UserData";
import { FollowUp } from "../../students/_components/FollowUp";
import Link from "next/link";

export const DocumentsReviewStudentTable = () => {
  const [value, setValue] = useState<string>("");
  const viewState = useDisclosure();

  const handleViewClick = useCallback(
    ({ value }: { value: string }) => {
      setValue(value);
      viewState.onOpen();
    },
    [viewState],
  );
  const columns = useMemo<ColumnDef<IneligibleData>[]>(
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
        header: "Submitted Documents",
        accessorKey: "submitted_documents",
        cell: ({ row }) => {
          return (
            <div className="flex flex-row gap-4">
              {row.original.submitted_documents.map((data) => (
                <Typography key={data} variant={"p7"}>
                  {data}
                </Typography>
              ))}
            </div>
          );
        },
        enableSorting: true,
      },
      {
        header: "Submitted Date",
        accessorKey: "submitted_date",
        enableSorting: true,
      },
      {
        header: "Placement date",
        accessorKey: "placement_date",
        cell: ({ row }) => {
          return (
            <div>
              <Typography variant={"p5"}>1 Days Left</Typography>
              <Typography variant={"p5"}>
                {row.original.placement_date}
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
              {
                content: (
                  <button
                    type="button"
                    className="w-full flex flex-row justify-start gap-3 items-center p-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewClick({ value: "documents" });
                    }}
                  >
                    Review
                  </button>
                ),
              },
              {
                content: (
                  <Link
                    href="#"
                    className="w-full flex flex-row justify-start gap-3 items-center p-2"
                  >
                    Download All
                  </Link>
                ),
              },
            ]}
          />
        ),
      },
    ],
    [handleViewClick],
  );
  const studentsData = useMemo(() => {
    return users ?? [];
  }, []);

  return (
    <Suspense>
      <Table
        allowSearch={false}
        data={studentsData}
        columns={columns}
        isStatic={true}
        allowSelection={false}
        pagination={{
          totalPage: 9,
          totalRow: 100,
          currentPage: 1,
        }}
        toolbarContent={() => (
          <>
            <div className="w-full flex justify-between items-center px-2">
              <Filter />
              <Search />
            </div>
            {/* <div className="w-full flex">
              {selectedData.length !== 0 && (
                <SendEmail
                  selectedData={selectedData}
                  onRemove={removeItemFromSelectedData}
                />
              )}
            </div> */}
          </>
        )}
      />
      <FollowUp
        isOpen={viewState.isOpen}
        onToggle={viewState.onToggle}
        onClose={viewState.onClose}
        value={value}
      />
    </Suspense>
  );
};
