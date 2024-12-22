import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";

export const FollowUpHistory = () => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="Email"
      className="w-full"
    >
      {followData.map((data) => (
        <AccordionItem
          key={data.title}
          value={data.title}
          className="border data-[state=open]:border-gray-400 p-4"
        >
          <AccordionTrigger>
            <div className="flex gap-3 w-full justify-between items-center">
              <div className="flex gap-3 items-center">
                <div className="rounded-md bg-grayprimary w-[50px] py-1 flex justify-center">
                  <Typography variant={"p5"}>{data.title}</Typography>
                </div>
                <Typography variant={"p5"}>Subject: {data.subject}</Typography>
              </div>

              <Typography variant={"p5"}>{data.date}</Typography>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-justify">
            {data.message}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const followData = [
  {
    title: "Email",
    subject: "Louriem Ipsum",
    date: "April 01,2021",
    message:
      "Fusce pharetra convallis urna. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Vestibulum fringilla pede sit amet augue. Pellentesque ut neque. Ut a nisl id ante tempus hendrerit. Sed lectus. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Nunc sed turpis. Nam commodo suscipit quam. In hac habitasse platea dictumst.",
  },
  {
    title: "Note",
    subject: "Louriem Ipsum",
    date: "April 01,2021",
    message:
      "Fusce pharetra convallis urna. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Vestibulum fringilla pede sit amet augue. Pellentesque ut neque. Ut a nisl id ante tempus hendrerit. Sed lectus. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Nunc sed turpis. Nam commodo suscipit quam. In hac habitasse platea dictumst.",
  },
  {
    title: "Call",
    subject: "Louriem Ipsum",
    date: "April 01,2021",
    message:
      "Fusce pharetra convallis urna. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Vestibulum fringilla pede sit amet augue. Pellentesque ut neque. Ut a nisl id ante tempus hendrerit. Sed lectus. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Nunc sed turpis. Nam commodo suscipit quam. In hac habitasse platea dictumst.",
  },
];
