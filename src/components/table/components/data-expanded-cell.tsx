import { Icon } from "@/components/shared/icon";
import type { Row, Table } from "@tanstack/react-table";

/** ****************************************** Table Expand Cell Component ******************************************* */

interface ExpandedCellProps<T extends Record<string, unknown>> {
  row: Row<T>;
  value: React.ReactNode;
}

export const DataTableExpandedCell = <T extends Record<string, unknown>>({
  row,
  value,
}: ExpandedCellProps<T>) => (
  <TableExpanded
    isExpanded={!row.getIsExpanded()}
    canExpand={row.getCanExpand()}
    toggleExpand={row.getToggleExpandedHandler()}
    depth={row.depth}
    value={value}
  />
);

/** ****************************************** Table Expand Header Component ******************************************* */

interface ExpandedHeaderProps<T extends Record<string, unknown>> {
  table: Table<T>;
  value: React.ReactNode;
}

export const ExpandedHeader = <T extends Record<string, unknown>>({
  table,
  value,
}: ExpandedHeaderProps<T>) => (
  <TableExpanded
    isExpanded={!table.getIsAllRowsExpanded()}
    canExpand
    toggleExpand={table.getToggleAllRowsExpandedHandler() as () => void}
    value={value}
  />
);

/** ****************************************** Table Expand Component ******************************************* */

interface ITableExpandedProps {
  canExpand: boolean;
  toggleExpand: () => void;
  isExpanded: boolean;
  depth?: number;
  value: React.ReactNode;
}

const TableExpanded = ({
  canExpand,
  toggleExpand,
  isExpanded,
  depth,
  value,
}: ITableExpandedProps) => (
  <div
    className="flex items-center gap-2"
    style={{ paddingLeft: `${(depth || 0) * 2}rem` }}
  >
    {canExpand ? (
      // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "4px",
          backgroundColor: isExpanded ? "transparent" : "gray.200",
          height: "20px",
          width: "20px",
          flexShrink: 0,
        }}
        onClick={toggleExpand}
      >
        <Icon
          icon="ChevronRight"
          style={{
            color: "black",
            transition: "all 0.1s ease",
            transform: !isExpanded ? "rotate(90deg)" : "rotate(0deg)",
          }}
          cursor="pointer"
          size="sm"
        />
      </div>
    ) : null}

    <p style={{ fontSize: "14px", color: "gray" }}>{value as string}</p>
  </div>
);
