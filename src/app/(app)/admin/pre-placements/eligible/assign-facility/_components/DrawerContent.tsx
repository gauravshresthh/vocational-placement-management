import { Icon } from "@/components/shared/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import LocationCard from "@/components/ui/locationcard";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";

const DrawerContent = () => {
  return (
    <>
      <DrawerHeader className=" p-6">
        <DrawerTitle className="mb-4 relative">
          <div className="border pl-2">
            <LocationCard location={locations} />
          </div>
        </DrawerTitle>
        <DrawerDescription>
          <Separator />
        </DrawerDescription>
      </DrawerHeader>
      <div className="flex justify-between px-6 mb-4">
        <Typography variant={"h5"}>Assign Students</Typography>
      </div>
      <div className="flex flex-col gap-4 px-6">
        {studentData.map((data) => (
          <div key={data.id} className="flex flex-row gap-4 items-start">
            <Avatar className="h-9 w-9">
              <AvatarImage src={""} />
              <AvatarFallback>QF</AvatarFallback>
            </Avatar>
            <div className="w-full">
              <div className="flex flex-1 justify-between">
                <div>
                  <Link href="#" className="text-blue-500 underline">
                    Dippi Rayamaji
                  </Link>
                  <Typography variant={"p6"}>Course: {data.course}</Typography>
                  <Typography variant={"p6"}>
                    Location: {data.location}
                  </Typography>
                </div>
                <div>
                  <Typography variant={"p6"} className="font-bold">
                    {data.placement_data}
                  </Typography>
                  <Typography variant={"p6"}>P-Date</Typography>
                </div>
              </div>
              <div className="mt-4 w-full">
                <Typography variant={"p6"}>{data.time}</Typography>
                <div className="flex gap-2 mt-2">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-gray-600  rounded-none "
                  >
                    <Icon icon="CircleCheck" />
                    Assign
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const locations = {
  name: "Apple",
  address: "Sydney Opera House",
  placement: 30,
};

const studentData = [
  {
    id: "1231",
    name: "Dippi Rhayamahji",
    course: "Diploma in IT",
    location: "The Street, 802 way",
    placement_data: "20/12/2024",
    time: "1 day ago",
  },
  {
    id: "12sd31",

    name: "Dippi Rhayamahji",
    course: "Diploma in IT",
    location: "The Street, 802 way",
    placement_data: "20/12/2024",
    time: "1 day ago",
  },
  {
    id: "12sd1",

    name: "Dippi Rhayamahji",
    course: "Diploma in IT",
    location: "The Street, 802 way",
    placement_data: "20/12/2024",
    time: "1 day ago",
  },
  {
    id: "12sdwf1",

    name: "Dippi Rhayamahji",
    course: "Diploma in IT",
    location: "The Street, 802 way",
    placement_data: "20/12/2024",
    time: "1 day ago",
  },
  {
    id: "12sdwf",

    name: "Dippi Rhayamahji",
    course: "Diploma in IT",
    location: "The Street, 802 way",
    placement_data: "20/12/2024",
    time: "1 day ago",
  },
];
export default DrawerContent;
