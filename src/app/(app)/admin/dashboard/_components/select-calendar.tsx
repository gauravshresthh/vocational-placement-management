import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Fragment } from "react";

const SelectCalendar = () => {
  const defaultMonth = "December";

  return (
    <Select value={defaultMonth}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Month" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {monthsData.map((data) => (
            <Fragment key={data}>
              <SelectItem value={data}>{data}</SelectItem>
            </Fragment>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const monthsData = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default SelectCalendar;
