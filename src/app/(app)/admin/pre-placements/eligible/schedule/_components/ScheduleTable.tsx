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
import { SendEmail } from "../../../ineligible/students/_components/SendEmail";
import { EligibleFilter } from "../../_components/filter";
import { EligibleUser } from "../../_data/UserData";
import { IneligibleData } from "../../eligible-students/_schema/UserSchema";
import { TableDrawer } from "@/components/ui/TableDrawer";

export const ScheduleTable = () => {
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
              <Typography variant={"p4"} className="font-bold">
                Apple Tech
              </Typography>

              <Typography variant={"p5"}>The Street, 656 York</Typography>
            </div>
          );
        },
        enableSorting: true,
      },
      {
        header: "Schedule",
        accessorKey: "submitted_date",
        cell: () => {
          return (
            <div className="flex gap-2">
              <Typography
                variant={"p5"}
                className="border-r text-gray-500  border-gray-500 pr-2"
              >
                Sun
              </Typography>
              <Typography
                variant={"p5"}
                className="border-r  text-gray-500 border-gray-500 pr-2"
              >
                Mon
              </Typography>
              <Typography
                variant={"p5"}
                className="border-r  text-gray-500 border-gray-500 pr-2"
              >
                Tue
              </Typography>
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
            <div className="w-full flex justify-between items-center px-2">
              <EligibleFilter />
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
      <TableDrawer
        isOpen={viewState.isOpen}
        onToggle={viewState.onToggle}
        onClose={viewState.onClose}
        value={value}
      />
    </Suspense>
  );
};
