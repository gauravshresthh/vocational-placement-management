"use client";

import { Suspense, useCallback, useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { TableActionMenu } from "@/components/table/components/data-table-row-actions";
import { Table } from "@/components/table";
import { users } from "../_data/UserData";
import { IneligibleData } from "../_schema/UserSchema";
// import { TableEditAction } from "@/components/table/table-actions/TableEditAction";

import TableName from "@/components/shared/TableName";
import { Typography } from "@/components/ui/typography";

// import { Button } from "@/components/ui/button";
import { Filter } from "./filter";
import Search from "@/components/header/search";
import { SendEmail } from "./SendEmail";
import { Icon } from "@/components/shared/icon";
import { FollowUp } from "./FollowUp";

export const InelligibleStudentTable = () => {
  const [selectedData, setSelectedData] = useState<IneligibleData[]>([]);
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
                  className="text-red-600 -ml-2"
                />
                <Typography
                  variant={"p4"}
                  className="font-bold"
                >{`${row.original.approved}/5 Approved`}</Typography>
              </div>
              <div className="flex  gap-2">
                <div className=" h-3 w-8 rounded-3xl bg-green-600 border border-green-600 "></div>
                <div className=" h-3 w-8 rounded-3xl bg-green-100 border  "></div>
                <div className=" h-3 w-8 rounded-3xl bg-green-100 border  "></div>
                <div className=" h-3 w-8 rounded-3xl border "></div>
                <div className=" h-3 w-8 rounded-3xl  border "></div>
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
        header: "Follow Up",
        accessorKey: "date",
        cell: ({ row }) => {
          return (
            <div>
              <Typography variant={"p4"} className="font-bold">
                Via {row.original.via} . {row.original.email_data}
              </Typography>
              <Typography variant={"p5"}>{row.original.message}</Typography>
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
                content: <FollowUp value={"documents"} name="view" />,
              },
              {
                content: <FollowUp value={"follow_up"} name="Send E-mail" />,
              },
              {
                content: <FollowUp value={"follow_up"} name="Call Log" />,
              },
              {
                content: <FollowUp value={"follow_up"} name="Notes" />,
              },
            ]}
          />
        ),
      },
    ],
    []
  );
  const studentsData = useMemo(() => {
    return users ?? [];
  }, []);
  const handleSelection = useCallback((selectedRows: IneligibleData[]) => {
    setSelectedData(selectedRows);
  }, []);
  const removeItemFromSelectedData = (id: string) => {
    setSelectedData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Suspense>
      <Table
        allowSearch={false}
        data={studentsData}
        columns={columns}
        allowSelection={true}
        onSelection={handleSelection}
        pagination={{
          totalPage: 9,
          totalRow: 100,
          currentPage: 1,
        }}
        toolbarContent={() => (
          <>
            <div className="w-full flex justify-between items-center ">
              <Filter />
              <Search />
            </div>
            <div className="w-full flex">
              {selectedData.length !== 0 && (
                <SendEmail
                  selectedData={selectedData}
                  onRemove={removeItemFromSelectedData}
                />
              )}
            </div>
          </>
        )}
      />
    </Suspense>
  );
};
