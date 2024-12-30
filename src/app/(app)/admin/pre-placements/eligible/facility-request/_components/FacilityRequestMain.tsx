"use client";
import React from "react";
import Toolbar from "../../_components/Toolbar";
import { FacilityRequestTable } from "./FacilityRequestTable";
import FacilityRequestMap from "./FacilityRequestMap";

const FacilityRequestMain = () => {
  return (
    <div>
      <Toolbar
        mapContent={<FacilityRequestMap />}
        tableContent={<FacilityRequestTable />}
      />
    </div>
  );
};

export default FacilityRequestMain;
