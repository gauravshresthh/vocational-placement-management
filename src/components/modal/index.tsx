/* eslint-disable no-nested-ternary */
import { DialogTitle } from "@radix-ui/react-dialog";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button, type ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";

export interface ModalProps {
  title?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (value: boolean) => void;
  footerPosition?: "start" | "center" | "end";
  classNames?: {
    content?: string;
    header?: string;
    footer?: string;
    primaryButton?: string;
    secondaryButton?: string;
  };

  primaryAction?: {
    label: string;
    onClick?: () => void;
    className?: string;
  } & ButtonProps;
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    className?: string;
  } & ButtonProps;
}

export const Modal = ({
  title,
  primaryAction,
  secondaryAction,
  footerPosition = "end",
  children,
  isOpen,
  onOpenChange,
  classNames,

  ...props
}: ModalProps) => (
  <Dialog {...props} open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent className={classNames?.content}>
      {classNames?.header && (
        <DialogHeader className={classNames?.header}>
          {title && <DialogTitle>{title}</DialogTitle>}
        </DialogHeader>
      )}

      {children}
      {(primaryAction || secondaryAction) && (
        <DialogFooter
          className={cn([
            "flex gap-4 w-full items-center",
            {
              "justify-end": footerPosition === "end",
              "justify-start": footerPosition === "start",
              "justify-center": footerPosition === "center",
            },
            classNames?.footer,
          ])}
        >
          <>
            {secondaryAction && (
              <Button
                variant="outline"
                {...secondaryAction}
                onClick={secondaryAction.onClick}
                className={
                  secondaryAction.className
                    ? secondaryAction.className
                    : classNames?.secondaryButton
                      ? classNames.secondaryButton
                      : ""
                }
              >
                {secondaryAction.label}
              </Button>
            )}
            {primaryAction && (
              <Button
                {...primaryAction}
                onClick={primaryAction.onClick}
                className={
                  primaryAction.className
                    ? primaryAction.className
                    : classNames?.primaryButton
                      ? classNames.primaryButton
                      : ""
                }
              >
                {primaryAction.label}
              </Button>
            )}
          </>
        </DialogFooter>
      )}
    </DialogContent>
  </Dialog>
);
