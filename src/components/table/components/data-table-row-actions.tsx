/* eslint-disable no-nested-ternary */
import { MoreHorizontal } from "lucide-react";

import type { TableActionMenuProps } from "../types";

import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Fragment } from "react";

// import { Icon, type IconProps } from "@/components/icon";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon, type IconProps } from "@/components/shared/icon";
import { Can } from "@/components/ui/permission-wrapper";

export const TableActionMenu = ({
  triggerClassName,
  trigger,
  menuLabel,
  menuList,
}: TableActionMenuProps) => (
  <ShadcnDropdownMenu>
    <DropdownMenuTrigger
      className={cn("focus-visible:outline-none focus-visible:ring-0 ", [
        triggerClassName,
      ])}
      asChild
    >
      {trigger || (
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      )}
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-24" side="left">
      {menuLabel && <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>}
      {menuLabel && <DropdownMenuSeparator />}

      <DropdownMenuGroup>
        {menuList?.map((e, index) => {
          if (e.subMenuList && e.subMenuList.length > 0) {
            return (
              <DropdownMenuSub key={e.label}>
                <DropdownMenuSubTrigger>
                  <Typography variant="p4">{e.label}</Typography>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    {e.subMenuList.map((sm) => (
                      <Can
                        key={sm.label}
                        I={sm?.permission_action as string}
                        a={sm?.permission_slug as string}
                        passThrough={
                          !sm?.permission_action && !sm?.permission_slug
                        }
                      >
                        <DropdownMenuItem onClick={sm.onClick && sm.onClick}>
                          <Typography variant="p2">{sm.label}</Typography>
                        </DropdownMenuItem>
                      </Can>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            );
          }

          if (e?.content) {
            return (
              <>
                <Can
                  key={e.label}
                  I={e?.permission_action as string}
                  a={e?.permission_slug as string}
                  passThrough={!e?.permission_action && !e?.permission_slug}
                >
                  <Fragment key={String(e.content)}>{e.content}</Fragment>
                </Can>
                {index !== menuList.length - 1 && <DropdownMenuSeparator />}
              </>
            );
          }
          return (
            <Can
              key={e?.label}
              I={e?.permission_action as string}
              a={e?.permission_slug as string}
              passThrough={!e?.permission_action && !e?.permission_slug}
            >
              <DropdownMenuItem
                key={String(e)}
                onClick={e.onClick && e.onClick}
              >
                <Typography
                  variant="p4"
                  className="flex flex-row items-center gap-4 w-full cursor-pointer px-1 py-[14px]"
                >
                  {e?.icon && typeof e?.icon === "object" ? (
                    <Icon
                      icon={e?.icon?.type as IconProps["icon"]}
                      className={cn(["", e?.icon?.className])}
                    />
                  ) : "icon" in e ? (
                    <Icon icon={e?.icon as IconProps["icon"]} />
                  ) : null}
                  {e?.label}
                </Typography>
              </DropdownMenuItem>
            </Can>
          );
        })}
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </ShadcnDropdownMenu>
);
