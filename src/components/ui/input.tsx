import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startContent?: React.ReactNode;
  container?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, startContent, container, type, ...props }, ref) => {
    return (
      <section
        className={cn(
          "w-full flex flex-row gap-2  items-center relative focus-within:bg-[#E3E3E3] bg-white dark:bg-input-gray border border-border  ",
          container
        )}
      >
        {startContent && (
          <span className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-2">
            {startContent}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full  border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            {
              "pl-8": startContent,
            },
            className
          )}
          ref={ref}
          {...props}
        />
      </section>
    );
  }
);
Input.displayName = "Input";

export { Input };
