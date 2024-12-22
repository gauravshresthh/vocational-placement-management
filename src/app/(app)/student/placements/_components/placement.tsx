"use client";
import { Card, CardContent } from "@/components/ui/card";
import DashboardTitle from "@/components/ui/dashboard-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";
import { useDropzone } from "react-dropzone";

const Placement = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <DashboardTitle
        title="Welcome, Ellen Jones"
        subtitle="Course: Diploma in IT"
      />
      <Card className="">
        <CardContent className="px-0">
          <Tabs defaultValue="placement1" className="w-full h-full">
            {/* Main Horizontal Tabs */}
            <div className="border-b border-[#C0C0C0]">
              <TabsList className="flex bg-transparent divide-x divide-[#C0C0C0] h-auto rounded-none py-2 px-0">
                <TabsTrigger
                  value="placement1"
                  className=" text-2xl font-semibold text-[#aaaaaa] hover:text-gray-800 data-[state=active]:text-gray-800 rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent w-1/3"
                >
                  Dip-IT Placement #1
                </TabsTrigger>
                <TabsTrigger
                  value="placement2"
                  className=" text-2xl font-semibold text-[#aaaaaa] hover:text-gray-800 data-[state=active]:text-gray-800 rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent w-1/3"
                >
                  Dip-IT Placement #2
                </TabsTrigger>
                <TabsTrigger
                  value="placement3"
                  className=" text-2xl font-semibold text-[#aaaaaa] hover:text-gray-800 data-[state=active]:text-gray-800 rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent w-1/3"
                >
                  Dip-IT Placement #3
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Content for Main Tabs */}
            <TabsContent value="placement1">
              <Tabs
                defaultValue="unitsRequirement"
                className="flex"
                orientation="vertical"
              >
                {/* Vertical Tabs List */}
                <div className="w-1/3 border-r border-[#C0C0C0]">
                  <TabsList className="flex flex-col space-y-4 bg-transparent h-fit">
                    <div>
                      <div className="flex items-center gap-5">
                        <Typography variant={"p3"} className="font-bold">
                          Placement details
                        </Typography>
                        <div className="bg-[#8B51F4] text-[#F7F6F6] border-2 border-[#3E8AF7] rounded-sm px-2 text-center font-semibold">
                          Pre-Placement
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-[30%]">
                          <Typography variant={"p4"}>Start Date:</Typography>
                        </div>
                        <div>
                          <Typography variant={"p4"}>01/02/202</Typography>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-[30%]">
                          <Typography variant={"p4"}>Duration:</Typography>
                        </div>
                        <div>
                          <Typography variant={"p4"}>50hrs</Typography>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-[30%]">
                          <Typography variant={"p4"}>Eligibility:</Typography>
                        </div>
                        <div className="flex items-center gap-1">
                          <div
                            className={`rounded-full w-[7px] h-[7px]`}
                            style={{ backgroundColor: "#FF3924" }}
                          ></div>
                          <Typography variant="p4">Ineligible</Typography>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="w-[30%]">
                          <Typography variant={"p4"}>Facilities:</Typography>
                        </div>
                        <div>
                          <Typography variant={"p4"}>Not Assigned</Typography>
                        </div>
                      </div>
                      <div className="border p-4 mt-4">
                        <div className="flex justify-between items-center">
                          <Typography variant={"p3"} className="font-bold">
                            Previous placements
                          </Typography>
                          <Image
                            src="/image/icon/green-check-icon.png"
                            alt="icon"
                            width={15}
                            height={15}
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <Typography variant={"p4"} className="text-blue-700">
                            Placement#1
                          </Typography>
                          <div className="flex items-center gap-1">
                            <div
                              className={`rounded-full w-[7px] h-[7px]`}
                              style={{ backgroundColor: "#73BB53" }}
                            ></div>
                            <Typography variant="p4">Completed</Typography>
                          </div>
                        </div>
                      </div>
                    </div>

                    <TabsTrigger
                      value="unitsRequirement"
                      className="p-4 font-medium text-gray-600 hover:bg-gray-100 rounded-none focus:outline-none data-[state=active]:bg-gray-200 data-[state=active]:text-gray-800 border text-left w-[80%]"
                    >
                      <div className="w-full">
                        <div className="flex justify-between items-center gap-5">
                          <Typography variant={"p3"} className="font-bold">
                            Units Requirement
                          </Typography>
                          <div className="">2/3</div>
                        </div>
                        <div className="">1 left</div>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="uploadDocuments"
                      className="p-4 font-medium text-gray-600 hover:bg-gray-100 rounded-none focus:outline-none data-[state=active]:bg-gray-200 data-[state=active]:text-gray-800 border w-[80%] text-left"
                    >
                      <div className="w-full">
                        <Typography variant={"p3"} className="font-bold">
                          Upload Your Documents
                        </Typography>
                        <div>Due Date: 01/02/2021</div>
                        <div className="flex justify-between items-center mt-3">
                          <div className="text-base text-blue-600">
                            Police Report
                          </div>
                          <Image
                            src="/image/icon/green-check-icon.png"
                            alt="icon"
                            width={10}
                            height={10}
                          />
                        </div>
                        <div className="mt-2 px-3">
                          <div
                            {...getRootProps({ className: "dropzone" })}
                            className="border border-blue-400 border-dashed bg-gray-200 p-4"
                          >
                            <input {...getInputProps()} />
                            <div className="text-lg font-semibold text-center">
                              Upload Documents
                            </div>
                            <div className="text-center">2 left</div>
                          </div>
                        </div>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger
                      value="facilities"
                      className="p-4 font-medium text-gray-600 hover:bg-gray-100 rounded-none focus:outline-none data-[state=active]:bg-gray-200 data-[state=active]:text-gray-800 border text-left w-[80%]"
                    >
                      <div className="w-full">
                        <Typography variant={"p3"} className="font-bold">
                          Facilities
                        </Typography>

                        <div className="">Not eligible yet</div>
                      </div>
                    </TabsTrigger>
                  </TabsList>
                </div>
                {/* Vertical Tabs Content */}
                <div className="w-2/3 pl-4">
                  <TabsContent value="unitsRequirement">
                    <div className="pl-5 pr-14">
                      <Typography variant={"p4"} className="font-bold">
                        Units Requirement
                      </Typography>
                      <div>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="font-bold text-[#757575]">
                                Unit
                              </TableHead>
                              <TableHead className="w-[8rem] font-bold text-[#757575]">
                                Status
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium">
                                <div>
                                  <div className="text-base font-semibold">
                                    Work with diverse people
                                  </div>
                                  <div className="text-[#757575]">
                                    Code: CHCDIV001
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="bg-[#DFF0D9] text-[#388E3C] border border-[#D7E9C6] px-3 py-1 rounded-sm ">
                                  Completed
                                </div>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                <div>
                                  <div className="text-base font-semibold">
                                    Work with diverse people
                                  </div>
                                  <div className="text-[#757575]">
                                    Code: CHCDIV001
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="bg-[#DFF0D9] text-[#388E3C] border border-[#D7E9C6] px-3 py-1 rounded-sm">
                                  Completed
                                </div>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">
                                <div>
                                  <div className="text-base font-semibold">
                                    Work with diverse people
                                  </div>
                                  <div className="text-[#757575]">
                                    Code: CHCDIV001
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="bg-[#D4E2FC] text-[#0E5AD0] border border-[#0E5AD0] px-3 py-1 rounded-sm">
                                  In Progress
                                </div>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="uploadDocuments">
                  <div className="pl-5 pr-14">
                      <Typography variant={"p4"} className="font-bold">
                        Units Requirement
                      </Typography>
                    </div>
                  </TabsContent>
                  <TabsContent value="facilities">
                    <p>Facilities here.</p>
                  </TabsContent>
                </div>
              </Tabs>
            </TabsContent>

            <TabsContent value="placement2">
              <p>Content for Dip-IT Placement #2</p>
            </TabsContent>
            <TabsContent value="placement3">
              <p>Content for Dip-IT Placement #3</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default Placement;
