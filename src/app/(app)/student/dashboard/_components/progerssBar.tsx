import { Typography } from "@/components/ui/typography";
import React from "react";

interface ProgressBarProps {
  percentage: number;
  time: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, time }) => {
  return (
    <div className="flex items-center w-full h-20 overflow-hidden relative">
      {/* Filled Portion */}
      <div
        className="flex items-center justify-center bg-[#424242] h-full"
        style={{ width: `${percentage}%` }}
      >
      </div>
      {/* Remaining Portion */}
      <div className="flex-1 bg-[#F5F5F5] h-full border border-[#E0E0E0]">
      </div>
      <div className="absolute left-4">
        <Typography variant={"p4"} className="text-[#C0C0C0] font-semibold">{time}</Typography>
        <Typography variant={"p5"} className="text-[#C0C0C0] font-semibold">{`Remaining | ${percentage}% Complete`}</Typography>
      </div>
    </div>
  );
};

export default ProgressBar;
