import React from "react"; // Adjust import as per your library// Adjust import as per your library
import { Typography } from "@/components/ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface InboxCardProps {
  name: string;
  role: string;
  message: string;
  date: string;
  time: string;
  avatarSrc?: string;
}

const getRandomColor = () => {
  const colors = [
    "bg-red-600",
    "bg-blue-700",
    "bg-green-700",
    "bg-yellow-700",
    "bg-purple-800",
    "bg-indigo-700",
    "bg-teal-700",
    "bg-pink-700",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getFallbackText = (name: string) => {
  const nameParts = name.split(" "); // Split name into words
  const firstLetter = nameParts[0]?.[0] || ""; // First letter of the first word
  const secondLetter = nameParts[1]?.[0] || ""; // First letter of the second word (if exists)
  return `${firstLetter}${secondLetter}`.toUpperCase(); // Combine and uppercase
};

const InboxCard: React.FC<InboxCardProps> = ({
  name,
  role,
  message,
  date,
  time,
  avatarSrc,
}) => {
  const randomBgColor = getRandomColor();
  const fallbackText = getFallbackText(name);
  return (
    <div className="border-b border-[#C0C0C0] py-3">
      <div className="flex gap-4 items-start">
        <Avatar className="h-11 w-11 border-[3px] border-[#438BCA]">
          <AvatarImage className="rounded" src={avatarSrc} />
          <AvatarFallback className={`rounded ${randomBgColor} text-white`}>
            {fallbackText}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex">
            <Typography variant={"p3"} className="font-semibold text-[#444444]">
              {name} <span className="text-[#7A7A7A]">. {role}</span>
            </Typography>
          </div>
          <Typography variant={"p4"} className="text-[#7A7A7A]">
            {message}
          </Typography>
          <div className="flex gap-4">
            <Typography variant={"p4"}>{date}</Typography>
            <Typography variant={"p4"}>{time}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxCard;
