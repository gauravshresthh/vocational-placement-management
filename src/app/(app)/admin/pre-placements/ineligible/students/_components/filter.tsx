import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Filter() {
  return (
    <div className="flex flex-wrap gap-4 items-center ">
      <Select>
        <SelectTrigger title="Course:" className="w-[250px]">
          <SelectValue placeholder="Select a Course" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Diploma in It</SelectItem>
            <SelectItem value="banana">Diploma in Humanities</SelectItem>
            <SelectItem value="blueberry">CSIT</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger title="Due:" className="w-[200px]">
          <SelectValue placeholder="Select a Deu" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">With in a Day</SelectItem>
            <SelectItem value="banana">With in a Week</SelectItem>
            <SelectItem value="blueberry">With in a Month</SelectItem>
            <SelectItem value="grapes">With in a Year</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger title="Due Documents:" className="w-[250px]">
          <SelectValue placeholder="Select a Documents" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Passport</SelectItem>
            <SelectItem value="banana">Covid</SelectItem>
            <SelectItem value="blueberry">Police Report</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
