import { Button } from "@/components/ui/button";
import { Icon } from "@/components/shared/icon";

interface TableAddActionProps {
  title: string;
  onClick: () => void;
}

export const TableAddAction = ({ title, onClick }: TableAddActionProps) => (
  <Button type="button" onClick={onClick}>
    <Icon size="md" icon="Plus" />
    <p className="tablet:hidden">Create {title}</p>
  </Button>
);
