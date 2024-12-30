"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  // DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Typography } from "@/components/ui/typography";
import { Icon } from "@/components/shared/icon";
import LocationCard from "@/components/ui/locationcard";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function FacilityRequestDrawer({
  isOpen,
  onClose,
  onToggle,
}: {
  isOpen?: boolean;
  onClose: () => void;
  onToggle: () => void;
}) {
  return (
    <Drawer open={isOpen} onOpenChange={onToggle}>
      <DrawerContent className="w-1/4 mt-[70px] z-[400]   rounded-none overflow-x-hidden min-h-0 flex-1">
        <DrawerHeader className=" p-6">
          <DrawerTitle className="mb-4 relative">
            <div className="absolute -top-8 -right-8">
              <Button variant="unstyled" onClick={onClose}>
                <Icon
                  icon="X"
                  size={25}
                  className="bg-gray-400 rounded-full text-white"
                />
              </Button>
            </div>
            <div className="border pl-2">
              <LocationCard location={locations} />
            </div>
          </DrawerTitle>
          <DrawerDescription>
            <Separator />
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex justify-between px-6 mb-4">
          <Typography variant={"p4"}>Students</Typography>{" "}
          <Typography variant={"p4"}>30</Typography>
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
                    <Typography variant={"p6"}>
                      Course: {data.course}
                    </Typography>
                    <Typography variant={"p6"}>
                      Location: {data.location}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant={"p6"}>
                      {data.placement_data}
                    </Typography>
                    <Typography variant={"p6"}>Placement</Typography>
                  </div>
                </div>
                <div className="mt-4 w-full">
                  <Typography variant={"p6"}>{data.time}</Typography>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="default"
                      size="lg"
                      className="bg-gray-600  rounded-none w-11/12"
                    >
                      <Icon icon="CircleCheck" />
                      Approve
                    </Button>
                    <Button
                      variant="default"
                      size="lg"
                      className="bg-lightgray text-black  rounded-none w-11/12"
                    >
                      <Icon icon="CircleX" />
                      Reject
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <DrawerFooter className="flex "></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
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
