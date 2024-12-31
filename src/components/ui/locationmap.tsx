import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "../shared/icon";
import { useState } from "react";

const Locationmap = ({ defaultTab }: { defaultTab: string }) => {
  // Load the initial tab value from localStorage
  const [tab, setTab] = useState(defaultTab);
  // Handle tab change and store the value in localStorage
  const handleTabChange = (value: string) => {
    localStorage.setItem("activeTab", value);
    setTab(value);
  };
  return (
    <div className="flex items-center ">
      <TabsList className="flex items-center bg-lightgray rounded-full">
        <TabsTrigger
          value="map"
          className="bg-lightgray justify-start data-[state=active]:justify-center  text-xs data-[state=active]:bg-grayprimary rounded-full w-[75px] px-1 py-2  relative data-[state=active]:z-20"
          onClick={() => handleTabChange("map")}
        >
          <Icon icon="Compass" size={20} className="mr-1" />
          {tab === "map" ? "Map" : ""}
        </TabsTrigger>
        <TabsTrigger
          value="table"
          className="bg-lightgray justify-end data-[state=active]:justify-center text-xs data-[state=active]:bg-grayprimary rounded-full -ml-[44px] w-[75px] px-1 py-2 relative"
          onClick={() => handleTabChange("table")}
        >
          <Icon icon="TableOfContents" size={20} className="mr-1" />
          {tab === "table" ? "Table" : ""}
        </TabsTrigger>
      </TabsList>
    </div>
  );
};

export default Locationmap;
