"use client";
import React, { useEffect, useState } from "react";
import { EligibleFilter } from "./filter";
import Search from "@/components/header/search";
import Locationmap from "@/components/ui/locationmap";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const Toolbar = ({
  mapContent,
  tableContent,
}: {
  mapContent: React.ReactNode;
  tableContent: React.ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);
    } else {
      setActiveTab("map"); // Default tab value if not in localStorage
    }
  }, []);

  if (activeTab === null) {
    // Render nothing or a loading state until activeTab is initialized
    return null;
  }
  return (
    <Tabs defaultValue={activeTab}>
      <div className="w-full flex justify-between items-center px-2">
        <EligibleFilter />
        <div className="flex gap-4 items-center">
          <Locationmap defaultTab={activeTab} />
          <Search />
        </div>
      </div>
      <TabsContent value="map">{mapContent}</TabsContent>
      <TabsContent value="table">{tableContent}</TabsContent>
    </Tabs>
  );
};

export default Toolbar;
