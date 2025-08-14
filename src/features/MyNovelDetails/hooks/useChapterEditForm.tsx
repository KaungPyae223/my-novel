import useStoreChapter from "@/store/useChapterStore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
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

export const useChapterEditForm = ({
  novelId,
  chapterID,
  chapterStatus,
}: {
  novelId: string;
  chapterID: string;
  chapterStatus: { canDraft: boolean; canPublish: boolean };
}) => {
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

  useEffect(() => {
    form.reset({
      chapterName: chapterData.chapterName,
      status: chapterData.status,
      summary: chapterData.summary || "",
      scheduledDate: chapterData.scheduledDate || new Date(),
      scheduledTime: chapterData.scheduledTime || "",
      content: chapterData.content,
    });
  }, [chapterData]);

  const router = useRouter();

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.status === "scheduled") {
      if (!values.scheduledDate) {
        form.setError("scheduledDate", {
          type: "required",
          message: "Scheduled date is required",
        });
        return;
      } else if (new Date(values.scheduledDate).getTime() <= Date.now()) {
        form.setError("scheduledDate", {
          type: "required",
          message: "Scheduled date must be in the future",
        });
        return;
      }

      if (!values.scheduledTime) {
        form.setError("scheduledTime", {
          type: "required",
          message: "Scheduled time is required",
        });
        return;
      }
    }

   

    setChapterData({
      id: chapterID,
      chapterName: values.chapterName,
      status: values.status,
      summary: values.summary || null,
      content: values.content,
      scheduledDate: values.scheduledDate || null,
      scheduledTime: values.scheduledTime || null,
    });
    router.push(
      `/my-novels/details/${novelId}/edit-chapter/${chapterID}/confirm`
    );
  }

  const [open, setOpen] = useState(false);
  const [published, setPublished] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const items = [];

    if (chapterStatus?.canDraft) {
      items.push(
        <SelectItem key="draft" value="draft">
          Draft
        </SelectItem>,
        <SelectItem key="scheduled" value="scheduled">
          Scheduled
        </SelectItem>
      );
    }
    if (chapterStatus?.canPublish) {
      items.push(
        <SelectItem key="published" value="published">
          Published
        </SelectItem>
      );
    }
    setPublished(items);
  }, [chapterStatus]);

  const status = form.watch("status");

  return {
    form,
    onSubmit,
    open,
    setOpen,
    published,
    setPublished,
    status,
  };
};
