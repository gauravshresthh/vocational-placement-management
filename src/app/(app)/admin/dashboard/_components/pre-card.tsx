import { Typography } from "@/components/ui/typography";

interface DataProps {
  title: string;
  number: string;
}
const PreCard = ({ data }: { data: DataProps }) => {
  return (
    <div className="bg-gray-100 p-6 space-y-2">
      <Typography variant={"h2"}>{data.number}</Typography>
      <div className="w-1/4 border" />
      <Typography variant={"p5"}>{data.title}</Typography>
    </div>
  );
};

export default PreCard;
