import React from "react";
import { RadioNav } from "./RadioNav";
import { Typography } from "@/components/ui/typography";
import { FollowUpHistory } from "./FollowUpHistory";

const NewFollowUp = () => {
  return (
    <>
      <RadioNav />
      <div className="border-t mt-4">
        <Typography variant="p4" className="font-bold py-2">
          Follow up History
        </Typography>
        <FollowUpHistory />
      </div>
    </>
  );
};

export default NewFollowUp;
