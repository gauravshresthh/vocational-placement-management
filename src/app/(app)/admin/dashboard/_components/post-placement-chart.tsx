"use client";

import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";
import { Typography } from "@/components/ui/typography";
const chartData = [
  {
    title: "Submission Remaining",
    value: 200,
    fill: "var(--color-ineligible)",
    color: "hsl(var(--chart-1))",
  },
  {
    title: "Review Remaining",
    value: 50,
    fill: "var(--color-pending)",
    color: "hsl(var(--chart-2))",
  },
  {
    title: "Logbook Approved",
    value: 600,
    fill: "var(--color-assigned)",
    color: "hsl(var(--chart-3))",
  },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  ineligible: {
    label: "Ineligible",
    color: "hsl(var(--chart-1))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-2))",
  },
  assigned: {
    label: "Assigned",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const PostPlacementChart = () => {
  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);
  return (
    <Card className="flex flex-row h-full">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="title"
              innerRadius={50}
              strokeWidth={10}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-1">
        <div className="w-full">
          <div className="flex justify-between w-full">
            <Typography variant={"h5"}>Total</Typography>
            <Typography variant={"h5"}>
              {totalVisitors.toLocaleString()}
            </Typography>
          </div>
          {chartData.map((data) => (
            <div key={data.title} className="flex justify-between w-full py-2">
              <Typography variant={"p5"}>{data.title}</Typography>
              <div className="flex flex-row gap-2 w-1/5 justify-between  items-center">
                <div
                  className="h-4 w-4"
                  style={{ backgroundColor: data.color }}
                ></div>
                <Typography variant={"p5"}>{data.value}</Typography>
              </div>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostPlacementChart;
