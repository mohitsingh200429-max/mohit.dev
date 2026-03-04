import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  businessType: z.string().min(2, "Business type required"),
  projectDetails: z.string().min(10, "Please describe your project")
});

export type LeadFormData = z.infer<typeof leadSchema>;