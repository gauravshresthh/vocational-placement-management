"use client";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavProps {
  route: string;
  count?: string;
  routeName: string;
}
const InnerSubNav = ({ InnerSubNavData }: { InnerSubNavData: NavProps[] }) => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        {InnerSubNavData.map((data) => {
          const isActive = pathname.includes(data.route);
          return (
            <Link
              key={data.routeName}
              href={data.route}
              className="flex flex-row gap-6 justify-between items-center p-4 relative"
            >
              <Typography variant={"p3"}>{data.routeName}</Typography>
              {data.count && (
                <Typography variant={"p7"}>{data.count}</Typography>
              )}
              {isActive && (
                <div className="absolute bottom-0 border-2 border-activegray w-1/3 left-1/2 -translate-x-1/2"></div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default InnerSubNav;
