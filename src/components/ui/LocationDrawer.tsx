"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  // DrawerClose,
  DrawerContent,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Icon } from "@/components/shared/icon";

export function LocationDrawer({
  isOpen,
  onClose,
  onToggle,
  locationChildren,
}: {
  isOpen?: boolean;
  onClose: () => void;
  onToggle: () => void;
  locationChildren: React.ReactNode;
}) {
  return (
    <Drawer open={isOpen} onOpenChange={onToggle}>
      <DrawerContent className="w-1/4 mt-[70px] z-[400]   rounded-none overflow-x-hidden min-h-0 flex-1">
        <div className="absolute -top-8 -right-8">
          <Button variant="unstyled" onClick={onClose}>
            <Icon
              icon="X"
              size={25}
              className="bg-gray-400 rounded-full text-white"
            />
          </Button>
        </div>
        {locationChildren}
        <DrawerFooter className="flex "></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
