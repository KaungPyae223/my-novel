"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useNovelReview } from "@/services/novel";
import { confirmToast } from "@/utils/customToasts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Send } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  review: z.string().min(20, {
    message: "Review must be at least 20 characters.",
  }),
});

const WriteFanLetter = ({ novelID, title }: { novelID: string; title: string }) => {
  const { mutate } = useNovelReview();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    confirmToast({
      title: "Are you sure?",
      description: "Are you sure you want to submit this review?",
      confirmText: "Submit",
      cancelText: "Cancel",
      confirmColor: "bg-green-600 hover:bg-green-700",
      onConfirm: () => {
        mutate({
          review: values.review,
          novel_id: novelID,
        });
        form.reset();
      },
    });
  }

  return (
    <div className="p-7 shadow border bg-white border-gray-200 rounded-lg">
      <div className="flex flex-row items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Mail className="size-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Write Fan Letter
        </h2>
      </div>
      <p className="mt-3 text-gray-700 text-sm">
        Share your thoughts and appreciation with the author of {title}
      </p>
      <div className="mt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border rounded-lg h-40 border-gray-300 p-2 "
                      placeholder="Write your fan letter here... Share what you love about the novel, your favorite moments, or ask thoughtful questions about the story."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              <Send className="size-4 " />
              Send Letter
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default WriteFanLetter;
