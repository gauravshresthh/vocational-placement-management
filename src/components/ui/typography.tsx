import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

type TVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TypographyProps<T> extends VariantProps<typeof typographyVariants> {
  component?: T;
}

type Props<T extends React.ElementType> = TypographyProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>;

export const typographyVariants = cva("text-black", {
  variants: {
    variant: {
      h1: "text-[2.5rem] leading-[3rem] font-semibold dark:text-white",
      h2: "text-[2rem] leading-[2.5rem] font-semibold dark:text-white",
      h3: "text-2xl font-semibold dark:text-white",
      h4: "text-xl font-semibold dark:text-white",
      h5: "text-[1.125rem] leading-6 font-semibold dark:text-white",
      h6: "text-base leading-6 font-semibold dark:text-white",
      s1: "font-semibold text-sm dark:text-white",
      s2: "font-semibold text-xs dark:text-white",
      p1: "text-2xl font-normal dark:text-white",
      p2: "text-xl font-normal dark:text-white",
      p3: "text-lg font-normal dark:text-white",
      p4: "text-base font-normal dark:text-white",
      p5: "text-sm font-normal dark:text-white",
      p6: "text-xs font-normal dark:text-white",
      p7: "text-sm font-normal bg-grayprimary py-1 px-3 rounded-3xl dark:text-white",
      d1: "font-semibold text-6xl dark:text-white",
      d2: "font-semibold text-5xl dark:text-white",
    },
  },
  defaultVariants: {
    variant: "p1",
  },
});

const componentVariantMapping: Record<TVariants, string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p1",
  span: "s1",
};

/**
 * Typography component.
 *
 * This component is used to render text with different styles based on the component type and variant.
 *
 * @component
 * @example
 * <Typography component="p">This is a paragraph.</Typography>
 *
 * @example
 * <Typography component="h1">This is a heading.</Typography>
 *
 * @example
 * <Typography component="h1" variant="d1">This is a heading.</Typography>
 *
 * @param {object} props - The properties that define the component.
 * @param {string} [props.component='p'] - The type of the component.
 * -This can be one of 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'. The default is 'p'.
 * @param {string} [props.variant] - The variant of the component.
 * -This can be one of 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 's1', 's2', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'd1', 'd2'.
 * -If not provided, the variant will be determined based on the component type.
 * @param {string} [props.className] - The CSS class name of the component.
 * @param {React.ReactNode} [props.children] - The children of the component.
 *
 * @returns {React.ElementType} The Typography component.
 */
export const Typography = forwardRef(
  (
    { component, className, variant, children, ...props }: Props<TVariants>,
    ref: React.ComponentPropsWithRef<React.ElementType>["ref"]
  ) => {
    const Component = component || "p";

    const componentVariant = (variant ||
      componentVariantMapping[component as TVariants]) as VariantProps<
      typeof typographyVariants
    >["variant"];

    return (
      <Component
        {...props}
        ref={ref}
        className={cn(
          typographyVariants({ variant: componentVariant, className })
        )}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";
