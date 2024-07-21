"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useServerAction } from "zsa-react";
import { sendMessage } from "@/lib/actions";
import { formSchema } from "@/lib/validations";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function PrenotaUnaVisita() {
  const { isPending, execute, data, error } = useServerAction(sendMessage);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const [data, err] = await execute(values);
    console.log(data, err);
    if (err) {
      toast.error("Errore. Per favore riprova.");
      return;
    }
    toast.success("Messaggio inviato con successo.");

    form.reset({ name: "", email: "", message: "" });
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl mb-12 text-pink-500">Contatti</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg text-pink-500 pb-8 md:text-2xl">
            Opzioni di contatto
          </h2>
          <p className="leading-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Messaggio</FormLabel>
                  <FormControl>
                    <Textarea rows={10} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isPending}
              type="submit"
              className="w-full bg-pink-500"
            >
              {isPending ? "Invio..." : "Inviare"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
