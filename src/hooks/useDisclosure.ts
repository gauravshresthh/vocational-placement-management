import { useState } from "react";

export interface DiscloserProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}
export const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};
