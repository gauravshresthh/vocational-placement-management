import { Typography } from "./typography";

const DashboardTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="py-6">
      <Typography variant={"h1"}>{title}</Typography>
      <Typography variant={"p4"}>{subtitle}</Typography>
    </div>
  );
};

export default DashboardTitle;
