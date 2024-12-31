import React from "react";
import Toolbar from "../../_components/Toolbar";
import { AssignFacilityTable } from "./AssignFacilityTable";
import AssignFacilityMap from "./AssignFacilityMap";

const AssignFacilityMain = () => {
  return (
    <div>
      <Toolbar
        mapContent={<AssignFacilityMap />}
        tableContent={<AssignFacilityTable />}
      />
    </div>
  );
};

export default AssignFacilityMain;
