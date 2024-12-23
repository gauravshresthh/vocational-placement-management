"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col  w-full">
      {routeData.map((data) => {
        const isActive = pathname == data.route;
        return (
          <Link
            key={data.label}
            href={data.route}
            className={`p-4 ${isActive ? "bg-lightgray" : ""}`}
          >
            {data.label}
          </Link>
        );
      })}
    </div>
  );
};
const routeData = [
  { label: "Dashboard", route: "/student/dashboard" },
  { label: "Inbox", route: "/student" },
  { label: "Placements", route: "/student/placements" },
  { label: "Profile", route: "/student" },
  { label: "Sign Out", route: "/student" },
];
export default Sidebar;
