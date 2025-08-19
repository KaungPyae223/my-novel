import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import Image from "next/image";
import { useUpdatePost } from "@/services/post";
import { toast } from "sonner";

const formSchema = z.object({
  content: z.string().min(2).max(50),
  image: z
    .any()
    .optional()
    .refine(
      (file) => !file || (file instanceof File && file.size <= 2 * 1024 * 1024),
      {
        message: "File size must be less than 2MB.",
      }
    ),
});

const PostUpdate = ({ data }: { data: any }) => {
  
    console.log(data);
  
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: data.content,
      image: data.image,
    },
  });

  const closeRef = React.useRef<HTMLButtonElement>(null);

  const { mutate } = useUpdatePost({ novelId: data.relative_id });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.loading("Editing a post...");
    const formData = new FormData();
    formData.append("content", values.content);
    if (values.image && values.image instanceof File) {
      formData.append("post_image", values.image);
    }
    formData.append("novel_id", data.relative_id);
    formData.append("post_id", data.id);

    mutate(formData);

    form.reset();
    closeRef.current?.click();
  }

  return (
    <DialogContent className="sm:max-w-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Edit Update</DialogTitle>
            <DialogDescription>Edit your post</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="h-28"
                      placeholder="Write a post..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormLabel>Post Image (Optional)</FormLabel>
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {field.value && typeof field.value === "string" ? (
                        <Image
                          src={field.value}
                          alt="Preview"
                          width={300}
                          height={400}
                          className="max-h-60 w-full mt-3 rounded-md object-contain"
                        />
                      ) : field.value && field.value instanceof File ? (
                        <Image
                          src={URL.createObjectURL(field.value)}
                          alt="Preview"
                          width={300}
                          height={400}
                          className="max-h-60 w-full mt-3 rounded-md object-contain"
                        />
                      ) : (
                        <div className="flex w-full mt-3 flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-12 cursor-pointer hover:bg-gray-50 transition">
                          <Upload className="h-8 w-8 text-gray-400" />
                          <p className="text-sm text-gray-500">
                            Upload a post image (optional)
                          </p>
                          <p className="text-xs text-gray-400">
                            PNG, JPG up to 5MB
                          </p>
                          <div className="mt-4 text-center">
                            <Button
                              variant="outline"
                              className="cursor-pointer pointer-events-none"
                            >
                              Choose File
                            </Button>
                          </div>
                        </div>
                      )}
                    </FormLabel>
                    <FormControl>
                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose ref={closeRef} asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Edit Post</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default PostUpdate;
