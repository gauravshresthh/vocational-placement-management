import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Typography } from "./typography";
import { Separator } from "./separator";

interface LocationProps {
  icon?: string;
  name: string;
  address: string;
  placement: number;
}
const LocationCard = ({ location }: { location: LocationProps }) => {
  return (
    <div className="flex flex-row gap-2 justify-between items-center">
      <Avatar className="h-12 w-12 rounded-none">
        <AvatarImage className="rounded-none" src={location.icon || ""} />
        <AvatarFallback className="rounded-none">QF</AvatarFallback>
      </Avatar>
      <div>
        <Typography variant={"p3"} className="font-bold mb-2">
          {location.name}
        </Typography>

        <Typography variant={"p6"} className="underline">
          {location.address}
        </Typography>
      </div>
      <div className="border-l">
        <div className="px-2">
          <Typography variant={"p4"} className="font-bold m-1">
            {location.placement}
          </Typography>
          <Typography variant={"p6"} className="m-1">
            Request
          </Typography>
        </div>
        <Separator className="my-2" />
        <div className="px-2">
          <Typography variant={"p4"} className="font-bold m-1">
            {location.placement}
          </Typography>
          <Typography variant={"p6"} className="m-1">
            Quota
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
