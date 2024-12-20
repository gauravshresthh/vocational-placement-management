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
      <button
        type="button"
        className="w-full flex flex-row justify-start gap-3 items-center px-2 py-4"
        onClick={onOpen}
      >
        <Icon icon="Pencil" className="text-orange-600" />
        Edit
      </button>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        {actionContent}
      </Modal>
    </>
  );
};
