"use client";

import { Suspense, useCallback, useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { TableActionMenu } from "@/components/table/components/data-table-row-actions";
import { Table } from "@/components/table";
// import { TableEditAction } from "@/components/table/table-actions/TableEditAction";

import TableName from "@/components/shared/TableName";
import { Typography } from "@/components/ui/typography";

// import { Button } from "@/components/ui/button";
import { Icon } from "@/components/shared/icon";
// import { FollowUp } from "./FollowUp";
import { useDisclosure } from "@/hooks/useDisclosure";
import { EligibleUser } from "../../_data/UserData";

import { IneligibleData } from "../../eligible-students/_schema/UserSchema";
import { FollowUp } from "../../../ineligible/students/_components/FollowUp";

export const AssignFacilityTable = () => {
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
        header: "Units",
        accessorKey: "units",
        cell: ({ row }) => {
          return (
            <div>
              <div className="flex mb-2">
                <Icon
                  strokeWidth="6"
                  icon="Dot"
                  className="text-green-600 -ml-2"
                />
                <Typography variant={"p4"} className="font-bold">
                  Units
                </Typography>
              </div>
              <Typography variant={"p5"}>{row.original.units}</Typography>
            </div>
          );
        },
        enableSorting: true,
      },
      {
        header: "Documents",
        accessorKey: "approved",
        cell: ({ row }) => {
          return (
            <div>
              <div className="flex mb-2">
                <Icon
                  strokeWidth="6"
                  icon="Dot"
                  className="text-green-600 -ml-2"
                />
                <Typography
                  variant={"p4"}
                  className="font-bold"
                >{`${row.original.approved}/5 Approved`}</Typography>
              </div>
              <div className="flex  gap-2">
                <div className=" h-3 w-8 rounded-3xl bg-green-600 border border-green-600 "></div>
                <div className=" h-3 w-8 rounded-3xl bg-green-600 border border-green-600"></div>
                <div className=" h-3 w-8 rounded-3xl bg-green-600 border border-green-600"></div>
                <div className=" h-3 w-8 rounded-3xl bg-green-600 border border-green-600"></div>
                <div className=" h-3 w-8 rounded-3xl  bg-green-600 border border-green-600"></div>
              </div>
            </div>
          );
        },
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
                    Assign Facility
                  </button>
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
    return EligibleUser ?? [];
  }, []);

  return (
    <Suspense>
      <Table
        allowSearch={false}
        data={studentsData}
        columns={columns}
        allowSelection={false}
        isStatic={true}
        pagination={{
          totalPage: 9,
          totalRow: 100,
          currentPage: 1,
        }}
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