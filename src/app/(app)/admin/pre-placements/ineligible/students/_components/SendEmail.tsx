"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IneligibleData } from "../_schema/UserSchema";
import { Typography } from "@/components/ui/typography";
import { Icon } from "@/components/shared/icon";

export function SendEmail({
  selectedData,
  onRemove,
}: {
  selectedData: IneligibleData[];
  onRemove: (id: string) => void;
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="default" size="lg" className="bg-blue-600 ml-auto">
          Send Email
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-1/2 mt-[70px] p-6 rounded-none">
        <div>
          <DrawerHeader>
            <DrawerTitle className="mb-4">Compose Email</DrawerTitle>
            <div className="flex gap-2 items-center flex-wrap">
              <Typography variant={"p4"}>To:</Typography>
              {selectedData.map((data) => (
                <div
                  key={data.id}
                  className="flex gap-4 items-center bg-activegray rounded-full p-2"
                >
                  <Typography variant={"p5"}>{data.userName}</Typography>
                  <Icon
                    icon="X"
                    className="cursor-pointer"
                    onClick={() => onRemove(data.id)}
                  />
                </div>
              ))}
            </div>
            <div className="border-y mt-4 py-4">
              <Typography variant="p4">Subject: Mail to students</Typography>
            </div>
            <div className="mt-4">
              <Typography variant="p4">
                Nunc nonummy metus. Praesent ac sem eget est egestas volutpat.
                Morbi vestibulum volutpat enim. In hac habitasse platea
                dictumst. In hac habitasse platea dictumst. Donec venenatis
                vulputate lorem. Vestibulum dapibus nunc ac augue. Fusce neque.
                Suspendisse feugiat. Proin magna.
              </Typography>
              <Typography variant="p4">
                Nunc nonummy metus. Praesent ac sem eget est egestas volutpat.
                Morbi vestibulum volutpat enim. In hac habitasse platea
                dictumst. In hac habitasse platea dictumst. Donec venenatis
                vulputate lorem. Vestibulum dapibus nunc ac augue. Fusce neque.
                Suspendisse feugiat. Proin magna.
              </Typography>
              <Typography variant="p4">
                Nunc nonummy metus. Praesent ac sem eget est egestas volutpat.
                Morbi vestibulum volutpat enim. In hac habitasse platea
                dictumst. In hac habitasse platea dictumst. Donec venenatis
                vulputate lorem. Vestibulum dapibus nunc ac augue. Fusce neque.
                Suspendisse feugiat. Proin magna.
              </Typography>
            </div>
          </DrawerHeader>
          <DrawerFooter className="flex ">
            <div className="ml-auto flex gap-4">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
              <Button className="bg-blue-600">Submit</Button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
