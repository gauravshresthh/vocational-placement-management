"use client";

import { useSearchParams } from "@/hooks/useSearchParams";
import { Input } from "../ui/input";
import { Icon } from "../shared/icon";

const Search = () => {
  const { setSearchParams, searchParams } = useSearchParams();
  const SearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ search: event?.target?.value });
  };
  return (
    <Input
      startContent={
        <Icon size={"20px"} className="text-gray-500" icon="Search" />
      }
      container="w-[350px] rounded-full  "
      style={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
      placeholder="Search"
      defaultValue={searchParams.get("search") as string}
      onChange={SearchHandler}
    />
  );
};

export default Search;
