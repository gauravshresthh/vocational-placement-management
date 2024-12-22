import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewFollowUp from "./NewFollowUp";
import Documents from "./Documents";

export function MoDalTab({ value }: { value: string }) {
  return (
    <Tabs defaultValue={value} className="w-full">
      <TabsList className="flex justify-start gap-8  px-3 divide-x bg-white rounded-none">
        {TabsHeader.map((data) => (
          <TabsTrigger
            key={data.title}
            value={data.value}
            className="data-[state=active]:font-bold"
          >
            {data.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent className=" p-6" value="documents">
        <Documents DocumentsData={DocumentsData} />
      </TabsContent>
      <TabsContent className=" p-4" value="units"></TabsContent>
      <TabsContent className=" p-6" value="follow_up">
        <NewFollowUp />
      </TabsContent>
    </Tabs>
  );
}

const TabsHeader = [
  {
    title: "Documents",
    value: "documents",
  },
  {
    title: "Units",
    value: "units",
  },
  {
    title: "Follow up",
    value: "follow_up",
  },
];

const DocumentsData = [
  { document_type: "Police Report", status: "1" },
  { document_type: "Covid Report", status: "0" },
  { document_type: "Passport", status: "2" },
];
