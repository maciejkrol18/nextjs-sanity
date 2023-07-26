import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string(),
  phone: z.string().min(9, { message: "Wprowadź minimum 9 cyfr" }),
  email: z.string().email({ message: "Wprowadź prawidłowy adres email" }).toLowerCase(),
  message: z.string().optional(),
});

export type ContactForm = z.infer<typeof ContactSchema>;
