import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export const SideBar = async ({ sideBar }: { sideBar: React.ReactElement }) => {
  return (
    <aside
      className={cn(
        "h-full w-full items-center lg:w-60  flex flex-row lg:flex-col space-y-4"
      )}
    >
      <Logo />
      {sideBar}
    </aside>
  );
};
