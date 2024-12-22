"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col  w-full">
      {routeData.map((data) => {
        const isActive = pathname.includes(data.route);
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
  { label: "Inbox", route: "/test" },
  { label: "Pre-Placements", route: "/admin/pre-placements" },
  { label: "Ongoing Placements", route: "/test" },
  { label: "Post Placements", route: "/test" },
  { label: "Facilities", route: "/test" },
  { label: "Students", route: "/test" },
  { label: "Reports", route: "/test" },
];
export default AdminSideBar;
