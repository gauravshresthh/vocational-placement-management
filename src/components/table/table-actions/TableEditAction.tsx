import { Modal } from "@/components/modal";
import { Button } from "@/components/ui/button";
// import { Icon } from "@/components/shared/icon";
import { useDisclosure } from "@/hooks/useDisclosure";

interface TableEditActionProps {
  actionContent: React.ReactNode;
  name: string;
  title: string;
}

export const TableEditAction = ({
  actionContent,
  name,
  title,
}: TableEditActionProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button
        type="button"
        variant={"unstyled"}
        className="w-full flex flex-row justify-start gap-3 items-center px-2 py-2"
        onClick={onOpen}
      >
        {/* <Icon icon="Pencil" className="text-orange-600" /> */}
        {name}
      </Button>
      <Modal
        title={title}
        isOpen={isOpen}
        onOpenChange={(isOpen) => (isOpen ? onOpen() : onClose())}
      >
        {actionContent}
      </Modal>
    </>
  );
};
