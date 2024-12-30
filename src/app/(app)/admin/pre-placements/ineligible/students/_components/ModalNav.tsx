import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewFollowUp from "./NewFollowUp";
import Documents from "./Documents";

interface TabsHeaderProps {
  title: string;
  value: string;
}
export function MoDalTab({
  value,
  TabsHeader,
}: {
  value: string;
  TabsHeader: TabsHeaderProps[];
}) {
  return (
    <Tabs defaultValue={value} className="w-full">
      <TabsList className="flex justify-start gap-8  px-3 divide-x bg-white rounded-none">
        {TabsHeader.map((data) => (
          <TabsTrigger
            key={data.title}
            value={data.value}
            className="data-[state=active]:font-bold w-1/4"
          >
            {data.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {TabsHeader[0].value === "assign" && (
        <TabsContent className=" p-6" value="assign">
          sdfsdf
        </TabsContent>
      )}

      <TabsContent className="p-6" value="documents">
        <Documents DocumentsData={DocumentsData} />
      </TabsContent>
      <TabsContent className="p-6" value="units"></TabsContent>
      <TabsContent className="p-6" value="follow_up">
        <NewFollowUp />
      </TabsContent>
    </Tabs>
  );
}

const DocumentsData = [
  { document_type: "Police Report", status: "1" },
  { document_type: "Covid Report", status: "0" },
  { document_type: "Passport", status: "2" },
];
