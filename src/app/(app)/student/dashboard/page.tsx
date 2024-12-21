import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import React from "react";

const StudentDashboard = () => {
  return (
    <>
      <Card className="mt-3 ml-3 w-2/3 p-4">
        <div className="">
          <Typography variant={"h2"}>Welcome, Ellen Jonas</Typography>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex">
                <div className="w-[30%]">
                  <Typography variant={"p5"}>Course :</Typography>
                </div>
                <div>
                  <Typography variant={"p5"}>Diploma in IT</Typography>
                </div>
              </div>
              <div className="flex">
                <div className="w-[30%]">
                  <Typography variant={"p5"}>VPO :</Typography>
                </div>
                <div>
                  <Typography variant={"p5"}>Mike Jordan</Typography>
                </div>
              </div>
            </div>
            <div>
              <div className="flex">
                <div className="w-1/2">
                  <Typography variant={"p5"}>Course Start date:</Typography>
                </div>
                <div>
                  <Typography variant={"p5"}>01/02/2020</Typography>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2">
                  <Typography variant={"p5"}>
                    Completion date (Tentative):
                  </Typography>
                </div>
                <div>
                  <Typography variant={"p5"}>01/02/2020</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#d6d6d6] mt-3 mb-5"></div>
        <div className="flex gap-3">
          <div className="p-4 w-1/2 border border-[#EBEBEB] bg-[#F7F6F6]">
            <div className="flex justify-between">
              <div>
                <Typography variant={"p2"} className="font-semibold">
                  Placement#2
                </Typography>
              </div>
              <div>
                <button className="rounded-sm border border-1 border-black bg-[#5db85c] text-white px-3 py-1 text-sm">
                  Ongoing
                </button>
              </div>
            </div>
            <div className="border-t border-black my-3"></div>
            <div>
              <div className="flex py-2">
                <div className="w-1/2">
                  <Typography
                    variant={"p4"}
                    className="font-bold text-[#444444]"
                  >
                    Duration:
                  </Typography>
                </div>
                <div className="w-1/2">
                  <Typography
                    variant={"p5"}
                    className="font-semibold text-[#7E7E7E]"
                  >
                    50hrs
                  </Typography>
                </div>
              </div>
              <div className="flex py-2">
                <div className="w-1/2">
                  <Typography
                    variant={"p4"}
                    className="font-bold text-[#444444]"
                  >
                    Start Date (Tentative):
                  </Typography>
                </div>
                <div className="w-1/2">
                  <Typography
                    variant={"p5"}
                    className="font-semibold text-[#444444]"
                  >
                    02/02/2019
                  </Typography>
                </div>
              </div>
              <div className="flex py-2">
                <div className="w-1/2">
                  <Typography
                    variant={"p4"}
                    className="font-semibold text-[#444444]"
                  >
                    Actual Start Date:
                  </Typography>
                </div>
                <div className="w-1/2">
                  <Typography
                    variant={"p5"}
                    className="font-semibold text-[#444444]"
                  >
                    10/02/2019
                  </Typography>
                </div>
              </div>
              <div className="flex py-2">
                <div className="w-1/2">
                  <Typography
                    variant={"p4"}
                    className="font-semibold text-[#444444]"
                  >
                    Completion Date:
                  </Typography>
                </div>
                <div className="w-1/2">
                  <Typography
                    variant={"p5"}
                    className="font-semibold text-[#444444]"
                  >
                    10/03/2019
                  </Typography>
                </div>
              </div>
              <div className="flex py-2">
                <div className="w-1/2">
                  <Typography
                    variant={"p4"}
                    className="font-semibold text-[#444444]"
                  >
                    Status:
                  </Typography>
                </div>
                <div className="w-1/2 flex items-center gap-1">
                  <div className="rounded-full bg-[#73BB53] w-[7px] h-[7px]"></div>
                  <Typography
                    variant={"p5"}
                    className="font-semibold text-[#444444]"
                  >
                    Normal
                  </Typography>
                </div>
              </div>
              <div className="flex py-2">
                <div className="w-1/2">
                  <Typography
                    variant={"p4"}
                    className="font-semibold text-[#444444]"
                  >
                    Facility
                  </Typography>
                </div>
                <div className="w-1/2">
                  <Typography
                    variant={"p5"}
                    className="font-semibold text-[#444444]"
                  >
                    ABC Consulting Pvt Ltd
                  </Typography>
                </div>
              </div>
              <div className="flex py-2">
                <div className="w-1/2">
                  <Typography
                    variant={"p4"}
                    className="font-semibold text-[#444444]"
                  >
                    Facilitator
                  </Typography>
                </div>
                <div className="w-1/2">
                  <Typography
                    variant={"p5"}
                    className="font-semibold text-[#444444]"
                  >
                    Rozer Gnomeis
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-4 border border-[#EBEBEB] bg-[#F7F6F6]">
              <div className="flex justify-between">
                <div>
                  <Typography variant={"p2"} className="font-semibold">
                    Placement#1
                  </Typography>
                </div>
                <div>
                  <button className="rounded-sm border border-1 border-black bg-[#5db85c] text-white px-3 py-1 text-sm">
                    Completed
                  </button>
                </div>
              </div>
              <div className="border-t border-black my-3"></div>
              <div>
                <div className="flex py-2">
                  <div className="w-1/2">
                    <Typography
                      variant={"p4"}
                      className="font-bold text-[#444444]"
                    >
                      Duration:
                    </Typography>
                  </div>
                  <div className="w-1/2">
                    <Typography
                      variant={"p5"}
                      className="font-semibold text-[#7E7E7E]"
                    >
                      50hrs
                    </Typography>
                  </div>
                </div>
                <div className="flex py-2">
                  <div className="w-1/2">
                    <Typography
                      variant={"p4"}
                      className="font-semibold text-[#444444]"
                    >
                      Completed Date:
                    </Typography>
                  </div>
                  <div className="w-1/2">
                    <Typography
                      variant={"p5"}
                      className="font-semibold text-[#444444]"
                    >
                      02/07/2019
                    </Typography>
                  </div>
                </div>
                <div className="flex py-2">
                  <div className="w-1/2">
                    <Typography
                      variant={"p4"}
                      className="font-semibold text-[#444444]"
                    >
                      Logbook:
                    </Typography>
                  </div>
                  <div className="w-1/2 flex items-center gap-1">
                    <div className="rounded-full bg-[#388e3c] w-[7px] h-[7px]"></div>
                    <Typography
                      variant={"p5"}
                      className="font-semibold text-[#444444]"
                    >
                      Approved
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border border-[#EBEBEB] bg-[#F7F6F6] mt-4">
              <div className="flex justify-between">
                <div>
                  <Typography variant={"p2"} className="font-semibold">
                    Placement#3
                  </Typography>
                </div>
                <div>
                  <button className="rounded-sm border border-1 border-[#1463F6] bg-[#D4E2FC] text-[#1463F6] px-3 py-1 text-sm">
                    Upcoming
                  </button>
                </div>
              </div>
              <div className="border-t border-black my-3"></div>
              <div>
                <div className="flex py-2">
                  <div className="w-1/2">
                    <Typography
                      variant={"p4"}
                      className="font-bold text-[#444444]"
                    >
                      Duration:
                    </Typography>
                  </div>
                  <div className="w-1/2">
                    <Typography
                      variant={"p5"}
                      className="font-semibold text-[#7E7E7E]"
                    >
                      50hrs
                    </Typography>
                  </div>
                </div>
                <div className="flex py-2">
                  <div className="w-1/2">
                    <Typography
                      variant={"p4"}
                      className="font-semibold text-[#444444]"
                    >
                      Start Date (Tentative):
                    </Typography>
                  </div>
                  <div className="w-1/2">
                    <Typography
                      variant={"p5"}
                      className="font-semibold text-[#444444]"
                    >
                      02/07/2019
                    </Typography>
                  </div>
                </div>
                <div className="flex py-2">
                  <div className="w-1/2">
                    <Typography
                      variant={"p4"}
                      className="font-semibold text-[#444444]"
                    >
                      Eligible:
                    </Typography>
                  </div>
                  <div className="w-1/2 flex items-center gap-1">
                    <div className="rounded-full bg-[#1463F6] w-[7px] h-[7px]"></div>
                    <Typography
                      variant={"p5"}
                      className="font-semibold text-[#444444]"
                    >
                      Ineligible
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default StudentDashboard;
