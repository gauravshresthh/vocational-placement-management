import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import React from "react";
import PlacementCardDetail from "./placementCardDetail";
import ProgressBar from "./progerssBar";
import InboxCard from "./inboxCard";

const details2 = [
  { id: 1, label: "Duration:", value: "50hrs" },
  { id: 2, label: "Start Date (Tentative):", value: "02/02/2019" },
  { id: 3, label: "Actual Start Date:", value: "10/02/2019" },
  { id: 4, label: "Completion Date:", value: "10/03/2019" },
  { id: 5, label: "Status:", value: "Normal", statusColor: "#73BB53" },
  { id: 6, label: "Facility", value: "ABC Consulting Pvt Ltd" },
  { id: 7, label: "Facilitator", value: "Rozer Gnomeis" },
];

const details1 = [
  { id: 1, label: "Duration:", value: "50hrs" },
  { id: 2, label: "Completed Date:", value: "02/07/2019" },
  { id: 3, label: "Logbook:", value: "Approved", statusColor: "#388e3c" },
];

const details3 = [
  { id: 1, label: "Duration:", value: "50hrs" },
  { id: 2, label: "Start Date (Tentative):", value: "02/07/2019" },
  { id: 3, label: "Eligible:", value: "Ineligible", statusColor: "#1463F6" },
];

const inboxData = [
  {
    id: 1,
    name: "Mike",
    role: "VPO",
    message: "Lorem ipsum for met.. Lorem ipsum fo",
    date: "04/12/2021",
    time: "11:30 AM",
    avatarSrc: "/image/icon/default-user-icon.svg",
  },
  {
    id: 2,
    name: "Jane",
    role: "CEO",
    message: "We need to discuss the new project updates.",
    date: "05/12/2021",
    time: "2:45 PM",
    avatarSrc: "/image/icon/jane-avatar.svg",
  },
  {
    id: 3,
    name: "David",
    role: "CTO",
    message: "I will be unavailable this week due to travel.",
    date: "06/12/2021",
    time: "9:00 AM",
    avatarSrc: "/image/icon/david-avatar.svg",
  },
  {
    id: 4,
    name: "Sarah",
    role: "Manager",
    message: "Please review the latest financial reports.",
    date: "07/12/2021",
    time: "1:30 PM",
    avatarSrc: "/image/icon/sarah-avatar.svg",
  },
];

const StudentDashboard = () => {
  return (
    <div className="p-3 flex gap-4">
      <Card className="w-2/3 p-4">
        <div>
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
            <PlacementCardDetail details={details2} />
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
              <PlacementCardDetail details={details1} />
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
              <PlacementCardDetail details={details3} />
            </div>
          </div>
        </div>
      </Card>
      <div className="w-1/3">
        <Card className="p-4">
          <div className="flex justify-between">
            <Typography variant={"p2"} className="font-semibold">
              Placement#1
            </Typography>
            <Typography variant={"p5"} className="font-semibold text-[#7E7E7E]">
              50hrs
            </Typography>
          </div>
          <div className="mt-4">
            <ProgressBar percentage={40} time="10hrs" />
          </div>
          <button className="bg-[#73BB53] text-white w-full py-2 mt-4">
            Fill Attendance
          </button>
        </Card>
        <Card className="mt-4 p-4">
          <div className="flex justify-between">
            <Typography variant={"p2"} className="font-semibold">
              Inbox
            </Typography>
            <Typography variant={"p4"}>2 unread</Typography>
          </div>
          {inboxData.map((item) => (
            <InboxCard
              key={item.id}
              name={item.name}
              role={item.role}
              message={item.message}
              date={item.date}
              time={item.time}
              avatarSrc={item.avatarSrc}
            />
          ))}
          <button className="border rounded-sm py-2 w-full mt-3">
            View all
          </button>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
