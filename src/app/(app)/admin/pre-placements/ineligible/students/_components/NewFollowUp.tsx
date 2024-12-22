import { Typography } from "@/components/ui/typography";
import React from "react";
import { RadioNav } from "./RadioNav";

const NewFollowUp = () => {
  return (
    <div className="flex items-center gap-6">
      <Typography variant="p4" className="font-bold">
        New Follow up
      </Typography>
      <RadioNav />
    </div>
  );
};

export default NewFollowUp;
