"use client";
import useStoreChapter from "@/store/useChapterStore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import useFetchData from "@/services/fetcher";
import { useEffect, useState } from "react";
import { SelectItem } from "@/components/ui/select";

const formSchema = z.object({
  chapterName: z.string().min(2).max(100),
  status: z.enum(["draft", "published", "scheduled"]),
  summary: z.string().optional(),
  scheduledDate: z.date().optional(),
  scheduledTime: z.string().optional(),
  content: z.string(),
});

export const useChapterCreateForm = ({ novelId }: { novelId: string }) => {
  const { setChapterData, chapterData } = useStoreChapter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      chapterName: chapterData.chapterName,
      status: chapterData.status,
      summary: chapterData.summary || "",
      scheduledDate: chapterData.scheduledDate || new Date(),
      scheduledTime: chapterData.scheduledTime || "",
      content: chapterData.content,
    },
  });

  const router = useRouter();

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (
      values.status === "scheduled" &&
      (!values.scheduledDate ||
        !values.scheduledTime ||
        new Date(values.scheduledDate).getTime() <= Date.now())
    ) {
      if (!values.scheduledDate) {
        form.setError("scheduledDate", {
          type: "required",
          message: "Scheduled date is required",
        });
      }
      if (
        values.scheduledDate &&
        new Date(values.scheduledDate).getTime() <= Date.now()
      ) {
        form.setError("scheduledDate", {
          type: "required",
          message: "Scheduled date must be in the future",
        });
      }
      if (!values.scheduledTime) {
        form.setError("scheduledTime", {
          type: "required",
          message: "Scheduled time is required",
        });
      }
      return;
    }

    setChapterData({
      id: null,
      chapterName: values.chapterName,
      status: values.status,
      summary: values.summary || null,
      content: values.content,
      scheduledDate: values.scheduledDate || null,
      scheduledTime: values.scheduledTime || null,
    });
    router.push(`/my-novels/details/${novelId}/create-chapter/confirm`);
  }

  const [open, setOpen] = useState(false);
  const [published, setPublished] = useState<React.ReactNode>(null);

  const { data, isLoading } = useFetchData(`/chapters/draft-count/${novelId}`);

  const status = form.watch("status");

  useEffect(() => {
    if (!isLoading && data === 0) {
      setPublished(
        <>
          <SelectItem value="published">Published</SelectItem>
          <SelectItem value="scheduled">Scheduled</SelectItem>
        </>
      );
    }
  }, [isLoading, data]);

  return {
    form,
    onSubmit,
    open,
    setOpen,
    published,
    setPublished,
    isLoading,
    data,
    status,
  };
};
