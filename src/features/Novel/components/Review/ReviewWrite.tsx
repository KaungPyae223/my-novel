import { MessageCircle, Paperclip } from "lucide-react";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { confirmToast } from "@/utils/customToasts";
import { useNovelReview } from "@/services/novel";

const formSchema = z.object({
  review: z.string().min(20, {
    message: "Review must be at least 20 characters.",
  }),
});

const ReviewWrite = ({ novelID }: { novelID: string }) => {
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
      <div className="flex flex-row items-center gap-3 text-2xl font-semibold">
        <MessageCircle className="size-6" />
        Write Review
      </div>
      <div className="mt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Review</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border rounded-lg h-40 border-gray-300 p-2 "
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Write your review for this novel here.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex justify-end ">
              <Button type="submit">
                <Paperclip className="size-4" /> Submit Review
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ReviewWrite;
