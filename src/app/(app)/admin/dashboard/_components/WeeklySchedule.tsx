import { Icon } from "@/components/shared/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { Fragment } from "react";

export function FacilitatorWeekly() {
  return (
    <Tabs defaultValue="one" className="w-[400px]">
      <TabsList className="w-full flex items-start mb-0 p-0">
        {tabsNav.map((data) => (
          <Fragment key={data.week}>
            <TabsTrigger value={data.value} className="w-ful ">
              <div className="py-2 h-[80px] w-full text-center">
                <Typography variant={"p5"} className="text-gray-400">
                  {data.week}
                </Typography>
                <Typography variant={"p4"} className="font-bold">
                  {data.date}
                </Typography>
                {data.event && (
                  <div className="w-full flex justify-center">
                    <Icon icon="Dot" />
                  </div>
                )}
              </div>
            </TabsTrigger>
          </Fragment>
        ))}
      </TabsList>
      {tabsContent.map((data) => (
        <TabsContent
          key={data.value}
          value={data.value}
          className="pl-2 pr-4 w-full mt-0  h-[320px]"
        >
          <div className="border w-full px-6  divide-y-2 ">
            {data.payload ? (
              data.payload?.map((subdata, i) => (
                <div
                  key={`${subdata.name}${i}`}
                  className="flex items-center py-3 "
                >
                  <Avatar className="h-10 w-10 ">
                    <AvatarImage src={""} />
                    <AvatarFallback>QF</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <Typography variant={"p3"} className="font-bold">
                      {subdata.name}
                    </Typography>{" "}
                    <Typography variant={"p4"}>
                      Visiting: {subdata.visiting}
                    </Typography>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center p-4">
                <Typography variant={"p4"}>N/A</Typography>
              </div>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

const tabsNav = [
  { week: "Sun", date: "16", event: false, value: "one" },
  { week: "Mon", date: "17", event: true, value: "two" },
  { week: "Tue", date: "18", event: false, value: "three" },
  { week: "Wed", date: "19", event: true, value: "four" },
  { week: "Thu", date: "20", event: true, value: "five" },
  { week: "Fri", date: "21", event: false, value: "six" },
  { week: "Sat", date: "22", event: false, value: "seven" },
];

const tabsContent = [
  {
    value: "one",
  },
  {
    payload: [
      { name: "Mike Cyrus", visiting: "Alex Cena" },
      { name: "Mike Cyrus", visiting: "Alex Cena" },
      { name: "Mike Cyrus", visiting: "Alex Cena" },
      { name: "Mike Cyrus", visiting: "Alex Cena" },
    ],
    value: "two",
  },
  { value: "three" },
  {
    payload: [
      { name: "Mike Cyrus", visiting: "Alex Cena" },
      { name: "Mike Cyrus", visiting: "Alex Cena" },
      { name: "Mike Cyrus", visiting: "Alex Cena" },
      { name: "Mike Cyrus", visiting: "Alex Cena" },
    ],
    value: "four",
  },
  {
    payload: [
      { name: "Mike Cyrus", visiting: "Alex Cena" },
      { name: "Mike Cyrus", visiting: "Alex Cena" },
    ],
    value: "five",
  },
  {
    value: "six",
  },
  {
    value: "seven",
  },
];
