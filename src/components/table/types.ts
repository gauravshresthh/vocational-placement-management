import type { RankingInfo } from "@tanstack/match-sorter-utils";
import type {
  Column,
  ColumnDef,
  FilterFn,
  Row,
  RowData,
  Table,
} from "@tanstack/react-table";
import "@tanstack/react-table";
import type { IconProps } from "@/components/shared/icon";
import type { buttonVariantsProps } from "../ui/button";

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    filterOption?: {
      type?: "list" | "search" | "date" | "number";
      comparator?: "=" | "<" | ">" | "< >" | "CONTAINS";
      list?: tableFilterOptions[] | undefined;
    };
    orderId?: string;
    isNumeric?: boolean;
    width?: number | string;
    Footer?: {
      colspan?: number;
      display?: "none";
    };
  }

  interface FilterFns {
    dateTime: FilterFn<unknown>;
    amount: FilterFn<unknown>;
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

export interface tableFilterOptions {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface DataTableListFilterProps<TData> {
  column?: Column<TData>;
  options: tableFilterOptions[] | undefined;
  type?: "number" | "date";
  useTableFunctions?: boolean;
}

export type URLFilterComparator = "=" | "<" | ">" | "<>";
export type URLFilterValue = string | string[] | { from: string; to: string };

export type URLFilter = Record<
  string,
  {
    value: URLFilterValue;
    compare: URLFilterComparator;
  }
>;

export interface DataTableSortHeaderProps<TData>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData>;
  useTableFunctions?: boolean;
}

export interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  useTableFunctions: boolean;
  pagination: Pagination;
}
interface menuList {
  permission_action?: string;
  permission_slug?: string;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  icon?:
    | {
        type?: IconProps["icon"];
        className?: string;
      }
    | IconProps["icon"];
  content?: React.ReactElement;

  subMenuList?: menuList[];
}

export interface TableActionMenuProps {
  menuLabel?: string;
  menuList: menuList[];
  triggerClassName?: string;
  trigger?: React.ReactNode;
}

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  buttonGroup: ButtonGroupProps;
  onRefresh: () => void;
  onRowDelete: () => void;
  searchPlaceholder?: string;
  isRowSelected?: boolean;
  isStatic?: boolean;
  allowSearch?: boolean;
  onExport?: {
    excel: () => void;
  };
  showDownload?: boolean;
  showRefresh?: boolean;
  showView?: boolean;
  toolbarContent?: (table: Table<TData>) => React.ReactNode;
}

export interface ButtonGroupProps {
  onClick?: () => void;
  label?: string;
  variant?: buttonVariantsProps;
  className?: string;
  permission_action?: string;
  permission_slug?: string;
}

export interface Pagination {
  totalRow?: number;
  totalPage?: number;
  currentPage?: number;
  nextPageLink?: string;
  previousPageLink?: string;
  limit?: number;
}
export interface DataTableProps<TData> {
  expandFirstLevel?: boolean;
  columns?: ColumnDef<TData>[];
  data?: TData[];
  useTableFunctions?: boolean;
  isLoading?: boolean;
  rowOnClick?: (row: Row<TData>) => void;
  onRowDelete?: (rows: TData[]) => void;
  isStatic?: boolean;
  allowSearch?: boolean;
  allowSelection?: boolean;
  buttonGroup?: ButtonGroupProps;
  onRefresh?: () => void;
  searchPlaceholder?: string;
  onSelection?: (rows: TData[]) => void;
  className?: string;
  isVirtualized?: boolean;
  showDownload?: boolean;
  showRefresh?: boolean;
  showView?: boolean;
  toolbarContent?: (table: Table<TData>) => React.ReactNode;
  freezeFirstColumn?: boolean;
  pagination?: Pagination;
}
export interface tableTypeProps<TData> {
  table: Table<TData>;
  isLoading: boolean;
  className: string;
  useTableFunctions: boolean;
  rowOnClick?: (row: Row<TData>) => void;
  columns?: Column<TData>[];
  allowSelection?: boolean;
  freezeFirstColumn?: boolean;
}
