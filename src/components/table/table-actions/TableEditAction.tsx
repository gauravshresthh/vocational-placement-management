import { Modal } from "@/components/modal";
import { Icon } from "@/components/shared/icon";
import { useDisclosure } from "@/hooks/useDisclosure";

interface TableEditActionProps {
  actionContent: React.ReactNode;
}

export const TableEditAction = ({ actionContent }: TableEditActionProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Icon
        size="md"
        icon="Pencil"
        className="cursor-pointer"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onOpenChange={onClose}>
        {actionContent}
      </Modal>
    </>
  );
};
