"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Typography } from "@/components/ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icon } from "@/components/shared/icon";
import { MoDalTab } from "./ModalNav";

export function FollowUp({
  value,
  isOpen,
  onClose,
  onToggle,
}: {
  value: string;
  isOpen?: boolean;
  onClose: () => void;
  onToggle: () => void;
}) {
  return (
    <Drawer open={isOpen} onOpenChange={onToggle}>
      {/* <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger> */}
      <DrawerContent className="w-1/3 mt-[70px]  rounded-none overflow-x-hidden min-h-0 flex-1">
        <DrawerHeader className=" p-6">
          <DrawerTitle className="mb-4 relative">
            <div className="flex flex-row gap-4 items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="" />
                <AvatarFallback className="text-activegray text-xl">
                  QF
                </AvatarFallback>
              </Avatar>
              <div>
                <Typography variant={"h4"}>Dippi Raimajhi</Typography>
              </div>
            </div>
            <div className="absolute top-0 right-0">
              <Button variant="unstyled" onClick={onClose}>
                <Icon
                  icon="X"
                  size={25}
                  className="bg-gray-400 rounded-full text-white"
                />
              </Button>
            </div>
          </DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-wrap px-6">
          {studentData.map((data) => (
            <div key={data.label} className="w-1/2 flex flex-wrap py-1">
              <div className="w-1/2">
                <Typography className="font-medium" variant={"p6"}>
                  {data.label}
                </Typography>
              </div>
              <div className="w-1/2">
                <Typography variant={"p6"} className="text-gray-500">
                  {data.value}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-lightgray">
          <MoDalTab value={value} />
          <div className="flex">
            <div className="ml-auto flex gap-4">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
              <Button className="bg-blue-600">Send</Button>
            </div>
          </div>
        </div>
        <DrawerFooter className="flex "></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

const studentData = [
  { label: "Student ID:", value: "3412343" },
  { label: "Email:", value: "Dippi@gmail.com" },
  { label: "Course:", value: "Diploma in IT" },
  { label: "Phone no.:", value: "981234578" },
  { label: "Placement date:", value: "04/22/2024" },
];
