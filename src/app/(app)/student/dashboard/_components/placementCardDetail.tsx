import React from "react";
import { Typography } from "@/components/ui/typography";

type Detail = {
  id: string | number;
  label: string;
  value: string | number;
  statusColor?: string; // Optional property for color indicator
};

type PlacementCardDetail = {
  details: Detail[];
};

const PlacementCardDetail: React.FC<PlacementCardDetail> = ({
  details,
}) => (
  <>
    {details.map(({id, label, value, statusColor }) => (
      <div key={id} className="flex py-2">
        <div className="w-1/2">
          <Typography variant="p4" className="font-bold text-[#444444]">
            {label}
          </Typography>
        </div>
        <div className="w-1/2 flex items-center gap-1">
          {statusColor && (
            <div
              className={`rounded-full w-[7px] h-[7px]`}
              style={{ backgroundColor: statusColor }}
            ></div>
          )}
          <Typography variant="p5" className="font-semibold text-[#444444]">
            {value}
          </Typography>
        </div>
      </div>
    ))}
  </>
);

export default PlacementCardDetail;
