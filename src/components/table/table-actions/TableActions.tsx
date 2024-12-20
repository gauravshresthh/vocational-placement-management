import { Icon } from "@/components/shared/icon";

type Actions = "edit" | "delete" | "archive";

interface TableActionsProps {
  editContent?: React.ReactNode;
  deleteContent?: React.ReactNode;
  actions?: Actions[];
  children?: React.ReactNode;
}

export const TableActions = ({
  actions = ["edit", "delete"],
  editContent,
  deleteContent,
  children,
}: TableActionsProps) => (
  <div className="flex flex-row gap-2 items-center ">
    {actions.includes("edit") && editContent}
    {actions.includes("delete") && deleteContent}
    {actions.includes("archive") && (
      <Icon size="md" icon="Archive" className="cursor-pointer" />
    )}
    {children}
  </div>
);
