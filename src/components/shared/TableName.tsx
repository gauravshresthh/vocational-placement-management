import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Typography } from "../ui/typography";

const TableName = ({
  image,
  name,
  course,
  route,
}: {
  image?: string;
  name: string;
  course: string;
  route: string;
}) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Avatar className="h-9 w-9">
        <AvatarImage src={image} />
        <AvatarFallback>QF</AvatarFallback>
      </Avatar>
      <div>
        <Link href={route} className="text-blue-500 underline">
          {name}
        </Link>
        <Typography variant={"p5"}>Course: {course}</Typography>
      </div>
    </div>
  );
};

export default TableName;
