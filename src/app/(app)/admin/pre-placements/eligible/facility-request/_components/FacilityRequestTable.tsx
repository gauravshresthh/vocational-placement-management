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
import { useDisclosure } from "@/hooks/useDisclosure";
import { SendEmail } from "../../../ineligible/students/_components/SendEmail";
import { FollowUp } from "../../../ineligible/students/_components/FollowUp";
import { EligibleUser } from "../../_data/UserData";
import { IneligibleData } from "../../eligible-students/_schema/UserSchema";

export const FacilityRequestTable = () => {
  const [selectedData, setSelectedData] = useState<IneligibleData[]>([]);
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
        header: "Facility",
        accessorKey: "email_data",
        cell: ({}) => {
          return (
            <div>
              <div className="flex ">
                <Icon
                  strokeWidth="6"
                  icon="Dot"
                  className="text-green-600 -ml-2"
                />
                <Typography variant={"p4"} className="font-bold">
                  Apple Tech
                </Typography>
              </div>
              <Typography variant={"p5"}>5 seats available</Typography>
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
        header: "Request date",
        accessorKey: "submitted_date",
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
                    View
                  </button>
                ),
              },
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
                    Approve Request
                  </button>
                ),
              },
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
                    Reject Request
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
        allowSelection={false}
        isStatic={true}
        onSelection={handleSelection}
        pagination={{
          totalPage: 9,
          totalRow: 100,
          currentPage: 1,
        }}
        toolbarContent={() => (
          <>
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
      <FollowUp
        isOpen={viewState.isOpen}
        onToggle={viewState.onToggle}
        onClose={viewState.onClose}
        value={value}
      />
    </Suspense>
  );
};
