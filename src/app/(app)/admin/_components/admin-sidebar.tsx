"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSideBar = () => {
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
  { label: "Dashboard", route: "/admin/dashboard" },
  { label: "Inbox", route: "/" },
  { label: "Pre-Placements", route: "/" },
  { label: "Ongoing Placements", route: "/" },
  { label: "Post Placements", route: "/" },
  { label: "Facilities", route: "/" },
  { label: "Students", route: "/" },
  { label: "Reports", route: "/" },
];
export default AdminSideBar;
