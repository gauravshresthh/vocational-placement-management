/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataTable } from "./components/data-table";
import type { DataTableProps } from "./types";

interface TableProps<TData> extends DataTableProps<TData> {
  heading?: {
    title?: string;
    subTitle?: string;
  };
  extraActions?: React.ReactNode;
  buttonContainer?: React.ReactNode;
}
export const Table = <TData,>({
  heading,
  extraActions,
  ...props
}: TableProps<TData>) => {
  return <DataTable {...props} />;
};
