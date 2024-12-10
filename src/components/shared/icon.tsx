import { type LucideProps, icons as iconsCollection } from "lucide-react";

export interface IconProps extends LucideProps {
  icon: keyof typeof iconsCollection;
}

export const Icon = ({ icon, ...props }: IconProps) => {
  if (!icon) throw new Error("Please provide valid icon name..");

  const LucideIcon = iconsCollection[icon];

  return <LucideIcon {...props} />;
};
