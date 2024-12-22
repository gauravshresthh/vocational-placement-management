import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";
interface DocumentProps {
  document_type: string;
  status: string;
}
const Documents = ({ DocumentsData }: { DocumentsData: DocumentProps[] }) => {
  return (
    <div>
      <Typography variant="p4" className="font-bold">
        Documents 3/3
      </Typography>
      <div className="mt-6 flex flex-col gap-2">
        {DocumentsData.map((data) => (
          <div
            key={data.document_type}
            className="bg-white p-2 flex justify-between items-center"
          >
            <div className="flex gap-4 items-center">
              <Icon icon="FileText" />
              <div className="w-[100px]">
                <Link href="/">
                  <Typography variant="p6" className="text-blue-600 underline">
                    {data.document_type}
                  </Typography>
                </Link>
              </div>
              {data.status === "1" ? (
                <div className="bg-green-400 w-[100px] px-2 py-1 rounded-sm border">
                  <Typography variant="p6" className=" text-center text-white">
                    Approved
                  </Typography>
                </div>
              ) : data.status === "0" ? (
                <div className="bg-blue-400 w-[100px] px-2 py-1  rounded-sm border">
                  <Typography variant="p6" className=" text-center text-white">
                    Submitted
                  </Typography>
                </div>
              ) : (
                <div className="bg-gray-300 w-[100px] px-2 py-1  rounded-sm border">
                  <Typography variant="p6" className=" text-center ">
                    Not Submitted
                  </Typography>
                </div>
              )}
            </div>
            <div className="flex gap-2 items-center">
              <Button variant={"unstyled"} className="flex gap-1">
                <Icon size={15} icon="Eye" />

                <Typography variant="p6">View</Typography>
              </Button>

              <Link href="/" className="flex gap-1">
                <Icon size={15} icon="ArrowDownToLine" />

                <Typography variant="p6">Download</Typography>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
