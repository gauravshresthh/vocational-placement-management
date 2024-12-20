"use client";
import DashboardTitle from "@/components/ui/dashboard-title";
import { Typography } from "@/components/ui/typography";
import SelectCalendar from "./select-calendar";
import PrePlacementChart from "./pre-placement-chart";
import { Fragment } from "react";
import PreCard from "./pre-card";
import PostPlacementChart from "./post-placement-chart";
import Link from "next/link";
import { LogBookTable } from "./LogBookTable";
import dynamic from "next/dynamic";
const MapWithLocations = dynamic(
  () => import("@/components/shared/MapWithLocation"),
  {
    ssr: false, // Disable SSR for this component
  }
);
const AdminDashboard = () => {
  return (
    <div>
      <DashboardTitle
        title="Welcome Jhon"
        subtitle="We have some work to do."
      />
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div className="p-6 bg-white col-span-3">
          <div className="flex justify-between items-center">
            <Typography variant={"h4"}>Pre placements</Typography>
            <SelectCalendar />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="row-span-3">
              <PrePlacementChart />
            </div>
            {cardData.map((data) => (
              <Fragment key={data.title}>
                <PreCard data={data} />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="p-6 bg-white col-span-3">
          {" "}
          <div className="flex justify-between items-center">
            <Typography variant={"h4"}>Post placements</Typography>
          </div>
          <div className="flex flex-col gap-6 mt-4">
            <PostPlacementChart />
            <div className="flex justify-between">
              <Typography variant={"h4"}>Logbook Review - Due Past</Typography>
              <Link href="/" className="underline">
                View More
              </Link>
            </div>
            <LogBookTable />
          </div>
        </div>
        <div className="p-6 bg-white col-span-4 flex flex-col gap-6">
          <div className="flex justify-between">
            <Typography variant={"h4"}>On Going placements</Typography>
            <div className="flex flex-row gap-2 items-center">
              <Typography variant={"p4"}>Concern Cases</Typography>
              <div className="px-4 py-2 bg-lightgray rounded-3xl">
                <Typography variant={"p5"}>25</Typography>
              </div>
            </div>
          </div>
          <MapWithLocations locations={locations} />
        </div>
      </div>
    </div>
  );
};

const cardData = [
  { number: "20", title: "Document Review" },
  { number: "10", title: "Facility Request" },
  { number: "5", title: "Due Next Week" },
];

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
export default AdminDashboard;
