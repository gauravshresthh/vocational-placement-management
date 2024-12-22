"use client";
import { DatePicker } from "@/components/shared/DatePicker";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const InnerNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        {InnerNavData.map((data) => {
          const isActive = pathname.includes(data.route);
          return (
            <div
              key={data.routeName}
              className={` ${isActive ? "bg-activegray" : "bg-transparent"}`}
            >
              <Link
                href={data.route}
                className="flex flex-row gap-6 justify-between items-center p-4"
              >
                <Typography variant={"p3"}>{data.routeName}</Typography>

                <Typography variant={"p7"}>{data.count}</Typography>
              </Link>
            </div>
          );
        })}
      </div>
      <DatePicker />
    </div>
  );
};

const InnerNavData = [
  {
    routeName: "Ineligible",
    route: "/admin/pre-placements/ineligible",
    count: "500",
  },
  {
    routeName: "Eligible",
    route: "/admin/pre-placements/eligible",
    count: "200",
  },
];
export default InnerNav;
