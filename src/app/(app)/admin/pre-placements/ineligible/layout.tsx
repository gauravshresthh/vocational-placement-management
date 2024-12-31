import InnerSubNav from "../_components/InnerSubNav";
import { innerSubNavData } from "./_data/NavOption";

export default async function InelligibleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <InnerSubNav InnerSubNavData={innerSubNavData} />
      {children}
    </div>
  );
}
