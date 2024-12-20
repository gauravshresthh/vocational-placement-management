import * as React from "react";

import { type DialogProps } from "@radix-ui/react-dialog";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Command Component
const Command = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-full w-full flex-col", className)}
    {...props}
  />
));
Command.displayName = "Command";

// CommandDialog Component
const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="rounded-md bg-popover text-popover-foreground">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

// CommandInput Component
const CommandInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input"> & { placeholder?: string }
>(({ className, placeholder, ...props }, ref) => (
  <div className="flex items-center border-b px-3">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <input
      ref={ref}
      placeholder={placeholder}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = "CommandInput";

// CommandList Component (Ensure proper JSX usage)
const CommandList = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));
CommandList.displayName = "CommandList";

// CommandEmpty Component (Handle props and forward ref)
const CommandEmpty = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <div ref={ref} className="py-6 text-center text-sm" {...props} />
));
CommandEmpty.displayName = "CommandEmpty";

// CommandGroup Component
const CommandGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = "CommandGroup";

// CommandSeparator Component
const CommandSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
));
CommandSeparator.displayName = "CommandSeparator";

// CommandItem Component
const CommandItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
));
CommandItem.displayName = "CommandItem";

// CommandShortcut Component (Handle as a span)
const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
