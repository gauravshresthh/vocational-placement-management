import { z } from "zod";

export type IneligibleData = {
  id: string;
  userName: string;
  course: string;
  image: string;
  units: string;
  approved: string;
  via: string;
  email_data: string;
  message: string;
  placement_date: string;
};

export const followUpSchema = z.object({
  type: z.enum(["email", "call", "note"], {
    required_error: "You need to select a notification type.",
  }),
});

export type SelectFollowUp = z.infer<typeof followUpSchema>;
