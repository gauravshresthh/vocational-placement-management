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
  submitted_date: string;
  message: string;
  placement_date: string;
  submitted_documents: string[];
  assigned: {
    title: string;
    active: boolean;
  }[];
  status: boolean;
};

export const followUpSchema = z.object({
  type: z.enum(["email", "call", "note"], {
    required_error: "You need to select a notification type.",
  }),
  message: z.string().min(1, "Message field required."),
});

export type SelectFollowUp = z.infer<typeof followUpSchema>;
