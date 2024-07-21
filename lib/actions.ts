"use server";

import z from "zod";
import { createServerAction } from "zsa";
import { formSchema } from "./validations";
export const sendMessage = createServerAction()
  .input(formSchema)
  .handler(async ({ input }) => {
    console.log(input);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "Message send";
  });
