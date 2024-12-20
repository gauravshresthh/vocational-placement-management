import DashboardTitle from "@/components/ui/dashboard-title";
import { Typography } from "@/components/ui/typography";
import SelectCalendar from "./select-calendar";
import PrePlacementChart from "./pre-placement-chart";
import { Fragment } from "react";
import PreCard from "./pre-card";
import PostPlacementChart from "./post-placement-chart";
import Link from "next/link";

const AdminDashboard = () => {
  return (
    <div>
      <DashboardTitle
        title="Welcome Jhon"
        subtitle="We have some work to do."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white">
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
        <div className="p-6 bg-white">
          {" "}
          <div className="flex justify-between items-center">
            <Typography variant={"h4"}>Post placements</Typography>
          </div>
          <div className="flex flex-col gap-6 mt-4">
            <PostPlacementChart />
            <div className="flex justify-between">
              <Typography variant={"h4"}>Post placements</Typography>
              <Link href="/" className="underline">
                View More
              </Link>
            </div>
          </div>
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
export default AdminDashboard;
