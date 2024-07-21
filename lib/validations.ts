import { z } from "zod";
export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Il nome deve contenere almeno 2 caratteri.",
  }),
  email: z.string().email({
    message: "Inserisci un indirizzo email valido.",
  }),
  message: z.string().min(10, {
    message: "Il messaggio deve contenere almeno 10 caratteri.",
  }),
});
