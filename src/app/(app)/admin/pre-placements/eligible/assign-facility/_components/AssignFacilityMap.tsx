"use client";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import DrawerContent from "./DrawerContent";

const AssignFacilityMap = () => {
  const TableMapTest = useMemo(
    () =>
      dynamic(() => import("@/components/ui/tablemaptest"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );
  return (
    <div className="h-[500px]">
      <TableMapTest
        locations={locations}
        locationChildren={<DrawerContent />}
      />
    </div>
  );
};
const locations = [
  {
    lat: -33.8568,
    lng: 151.2153,
    name: "Apple",
    address: "Sydney Opera House",
    placement: 30,
  },
  {
    lat: -33.8523,
    lng: 151.2108,
    name: "Apple",
    address: "Sydney Harbour Bridge",
    placement: 30,
  },
  {
    lat: -33.8908,
    lng: 151.2743,
    name: "Apple",
    address: "Bondi Beach",
    placement: 30,
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    name: "Apple",
    address: "Sydney Central Business District ",
    placement: 30,
  },
];
export default AssignFacilityMap;
