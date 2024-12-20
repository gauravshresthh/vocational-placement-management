import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useDisclosure } from "@/hooks/useDisclosure";
import { toast } from "sonner";
import { Modal } from "../../modal";
import { Icon } from "@/components/shared/icon";

interface TableDeleteActionProps {
  onDelete: (id: string) => void;
  description?: string;
  label?: boolean;
  disabled?: boolean;
  onTrigger?: () => void;
  id?: string;
}

export const TableDeleteAction = ({
  onDelete,
  description,
  label = false,
  disabled,
  onTrigger,
  id,
}: TableDeleteActionProps) => {
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();

  const handleDelete = () => {
    try {
      onDelete(String(id));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      onClose();
    }
  };

  const content = label ? (
    <Typography
      onClick={() => {
        // event.stopPropagation()
        onTrigger?.();
        onOpen();
      }}
      variant="p4"
      className="flex flex-row items-center gap-4 w-full cursor-pointer ml-1 text-destructive px-1 py-[14px]"
    >
      <Icon icon={"Trash2"} className="text-destructive" />
      Delete
    </Typography>
  ) : (
    <Icon
      size="md"
      icon="Trash2"
      className={`text-maroon-red ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={() => {
        if (!disabled) {
          // event.stopPropagation()
          onTrigger?.();
          onOpen();
        }
      }}
    />
  );

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div onClick={(e) => e.stopPropagation()}>
      {content}
      <Modal isOpen={isOpen} onOpenChange={onToggle}>
        <Typography variant={"h2"} className="text-center pb-6 font-bold">
          {description ?? "Do you want to delete?"}
        </Typography>
        <div className="flex w-full justify-center gap-24">
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
};
