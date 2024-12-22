"use client";

import { useSearchParams } from "@/hooks/useSearchParams";
import { Input } from "../ui/input";
import { Icon } from "../shared/icon";
import debounce from "lodash/debounce";

const Search = () => {
  const { setSearchParams, searchParams } = useSearchParams();
  // const SearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchParams({ search: event?.target?.value });
  // };
  const debounceFn = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ search: event?.target?.value });
  }, 800);
  return (
    <Input
      startContent={
        <Icon size={"20px"} className="text-gray-500" icon="Search" />
      }
      container="w-[350px] "
      style={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
      placeholder="Search"
      defaultValue={searchParams.get("search") as string}
      onChange={debounceFn}
    />
  );
};

export default Search;
