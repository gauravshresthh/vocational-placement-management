"use client";

import debounce from "lodash/debounce";

import type { DataTableToolbarProps } from "../types";
import { DataTableViewOptions } from "./data-table-view-options";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "@/hooks/useSearchParams";
import { cn } from "@/lib/utils";
// import { Icon } from '@/components/shared/icon'
import { Can } from "@/components/ui/permission-wrapper";

export const DataTableToolbar = <TData,>({
  table,
  searchPlaceholder,
  allowSearch,
  isStatic,
  showView = false,
  buttonGroup,
  toolbarContent,
}: DataTableToolbarProps<TData>) => {
  const { setSearchParams, searchParams } = useSearchParams();

  const debounceFn = debounce((event) => {
    table.setGlobalFilter(event.target.value);
    setSearchParams({ search: event?.target?.value });
  }, 800);

  return (
    <>
      <div className={cn(["flex items-center gap-4 flex-wrap"])}>
        {allowSearch && (
          <Input
            // endContent={<Icon size={'20px'} className='text-gray-500' icon='Search' />}
            container="w-[250px] rounded-md  "
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            placeholder={searchPlaceholder ?? "Search..."}
            defaultValue={searchParams.get("search") as string}
            onChange={debounceFn}
          />
        )}

        {toolbarContent?.(table)}
        {(!isStatic || buttonGroup) && (
          <div className="flex items-center gap-2 ml-auto">
            {showView && <DataTableViewOptions table={table} />}
            {buttonGroup && (
              <Can
                I={buttonGroup.permission_action as string}
                a={buttonGroup.permission_slug as string}
                passThrough={
                  !buttonGroup.permission_action || !buttonGroup.permission_slug
                }
              >
                <Button
                  onClick={buttonGroup.onClick}
                  variant={buttonGroup.variant}
                  className={buttonGroup?.className}
                >
                  {buttonGroup.label}
                </Button>
              </Can>
            )}
          </div>
        )}
      </div>
    </>
  );
};
