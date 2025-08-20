"use client";
import React from "react";

import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/formatDate";

import { useChapterEditForm } from "../../hooks/useChapterEditForm";

const ChapterEditForm = ({
  novelId,
  chapterID,
  chapterStatus,
}: {
  novelId: string;
  chapterID: string;
  chapterStatus: {
    canDraft: boolean;
    canPublish: boolean;
  };
}) => {
  const { form, onSubmit, handleBack, open, setOpen, published, status } =
    useChapterEditForm({ novelId, chapterID, chapterStatus });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="mt-6 space-y-6">
          <div className="p-6 bg-white shadow border border-gray-200 rounded-lg">
            <p className="font-medium text-2xl">Chapter Information</p>
            <div className="space-y-6 mt-6">
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="chapterName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chapter Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter chapter name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <FormControl>
                        {published.length > 0 && (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Status</SelectLabel>
                                {published.map((item) => item)}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {status === "scheduled" && (
                <div className="p-6 bg-blue-50 border border-gray-200 rounded-lg">
                  <p className="text-lg font-medium">Schedule Details</p>
                  <div className="grid grid-cols-2 gap-6 mt-6">
                    <FormField
                      control={form.control}
                      name="scheduledDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Scheduled Date</FormLabel>
                          <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className="w-full justify-between font-normal"
                                >
                                  {field.value
                                    ? formatDate(field.value)
                                    : "Select date"}
                                  <ChevronDownIcon />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto overflow-hidden p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={(date) => {
                                  field.onChange(date); // ✅ Connect to form state
                                  setOpen(false);
                                }}
                                captionLayout="dropdown"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="scheduledTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Scheduled Time</FormLabel>
                          <FormControl>
                            <Input
                              type="time"
                              className="w-full bg-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}
              <FormField
                control={form.control}
                name="summary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chapter Summary (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your chapter's summary"
                        {...field}
                        className="min-h-[150px]"
                      />
                    </FormControl>
                    <FormDescription>
                      If you don&apos;t have a summary, you can skip this step
                      and AI will generate it for you.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="p-6 bg-white shadow border border-gray-200 rounded-lg">
            <p className="font-medium text-2xl">Chapter Content</p>
            <div className="mt-6">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Start writing your chapter content here..."
                        {...field}
                        className="min-h-[300px]"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button
            onClick={handleBack}
            type="button"
            variant="outline"
            className=""
          >
            Cancel
          </Button>
          <Button type="submit" className="">
            Review & Confirm
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ChapterEditForm;
