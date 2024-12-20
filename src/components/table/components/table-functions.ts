/* eslint-disable @typescript-eslint/no-explicit-any */
import { rankItem } from "@tanstack/match-sorter-utils";
import { FilterFn } from "@tanstack/react-table";

import { URLFilterComparator } from "../types";
export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export const listFilterFn: FilterFn<any> = (row, id, value) =>
  value.includes(row.getValue(id));

export const numberFilterFn: FilterFn<any> = (row, id, value) => {
  const min = value?.[0];
  const max = value?.[1];
  const comperator = value?.[2] as URLFilterComparator;

  if (comperator === "=" && !Number.isNaN(min)) {
    return Number(row.getValue(id)) === min;
  }
  if (comperator === "<" && !Number.isNaN(min)) {
    return Number(row.getValue(id)) < min;
  }
  if (comperator === ">" && !Number.isNaN(min)) {
    return Number(row.getValue(id)) > min;
  }
  if (comperator === "<>" && !Number.isNaN(min) && !Number.isNaN(max)) {
    return Number(row.getValue(id)) < max && Number(row.getValue(id)) > min;
  }
  return true;
};

function isValidDate(dateStr: string) {
  // Check if the string can be converted to a valid date
  const date = new Date(dateStr);
  return !Number.isNaN(date.getTime());
}
const withoutTime = (date: string) => {
  const removeTimeDate = new Date(date);
  removeTimeDate.setHours(0, 0, 0, 0);
  return removeTimeDate.getTime();
};

export const dateFilterFn: FilterFn<any> = (row, id, value) => {
  const min = value?.[0];
  const max = value?.[1];
  const comperator = value?.[2] as URLFilterComparator;

  if (comperator === "=" && isValidDate(min)) {
    return withoutTime(row.getValue(id)) === withoutTime(min);
  }
  if (comperator === "<" && isValidDate(min)) {
    return withoutTime(row.getValue(id)) < withoutTime(min);
  }
  if (comperator === ">" && isValidDate(min)) {
    return withoutTime(row.getValue(id)) > withoutTime(min);
  }
  if (comperator === "<>" && isValidDate(min) && isValidDate(max)) {
    return (
      withoutTime(row.getValue(id)) < withoutTime(max) &&
      withoutTime(row.getValue(id)) > withoutTime(min)
    );
  }
  return true;
};
