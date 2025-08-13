"use client";
import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Upload } from "lucide-react";
import useStoreNovel from "@/store/useNovelStore";
import { useRouter } from "next/navigation";
import NovelTagManage from "../NovelCreate/NovelTagManage";
import useFetchData from "@/services/fetcher";
import Image from "next/image";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  description: z
    .string()
    .min(1, { message: "Description is required." })
    .min(10, { message: "Description must be at least 10 characters long." }),
  genre: z.string().min(1, {
    message: "Genre is required.",
  }),
  progress: z.string().min(1, {
    message: "Progress is required.",
  }),
  synopsis: z
    .string()
    .min(1, {
      message: "Synopsis is required.",
    })
    .min(10, {
      message: "Synopsis must be at least 10 characters long.",
    }),
  tags: z.string().min(1, {
    message: "Tags is required.",
  }),
  status: z.string().min(1, {
    message: "Status is required.",
  }),
  coverImage: z
    .any()
    .optional()
    .refine(
      (file) =>
        typeof file === "string" ||
        (file instanceof File && file.size <= 5 * 1024 * 1024),
      {
        message: "File size must be less than 5MB.",
      }
    ),
});

const NovelEditForm = () => {
  const router = useRouter();

  const { novelData, setNovelData }: any = useStoreNovel();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: novelData,
  });

  useEffect(() => {
    if (!novelData.id) return;

    console.log(novelData);

    form.reset({
      title: novelData.title,
      description: novelData.description,
      genre: novelData.genre,
      progress: novelData.progress,
      synopsis: novelData.synopsis,
      tags: novelData.tags,
      status: novelData.status,
      coverImage: novelData.coverImage,
    });
  }, [novelData]);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setNovelData({ ...novelData, ...values });
    router.push(`/my-novels/edit/${novelData.id}/confirm`);
  }

  const { data, isLoading } = useFetchData("/genres");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mt-6 flex flex-row gap-12">
          <div className="flex-1   bg-white p-6 rounded-md shadow border border-gray-200">
            <p className="font-medium text-2xl">Basic Information</p>
            <p className="text-sm text-gray-600 mt-1">
              Tell us about your novel
            </p>

            <div className="space-y-5 mt-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your novel's title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {!isLoading && (
                <div className="grid grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="genre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Genre</FormLabel>
                        <FormControl>
                          <Select
                            {...field}
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a genre" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Genres</SelectLabel>
                                {data?.map((genre: any) => (
                                  <SelectItem
                                    key={genre.id}
                                    value={JSON.stringify(genre)}
                                  >
                                    {genre.genre}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
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
                          <Select
                            {...field}
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Status</SelectLabel>
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="published">
                                  Published
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="progress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Progress</FormLabel>
                        <FormControl>
                          <Select
                            {...field}
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a progress" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Progress</SelectLabel>
                                <SelectItem value="ongoing">Ongoing</SelectItem>
                                <SelectItem value="complete">
                                  Complete
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <NovelTagManage form={form} />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your novel's description"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="synopsis"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Synopsis</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your novel's synopsis"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div>
            <div className="p-6 h-fit bg-white rounded-md shadow border border-gray-200">
              <p className="font-medium text-2xl">Cover Image</p>
              <p className="text-sm text-gray-600 mt-1">
                Upload a cover image for your novel
              </p>

              <FormField
                control={form.control}
                name="coverImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {typeof field.value === "string" && field.value ? (
                        <Image
                          src={field.value}
                          alt="Preview"
                          width={300}
                          height={300}
                          className="max-h-60 w-full max-w-[300px] mt-6 rounded-md object-contain"
                        />
                      ) : field.value instanceof File ? (
                        <Image
                          src={URL.createObjectURL(field.value)}
                          alt="Preview"
                          width={300}
                          height={300}
                          className="max-h-60 w-full max-w-[300px] mt-6 rounded-md object-contain"
                        />
                      ) : (
                        <div className="flex w-full mt-6 flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-12 cursor-pointer hover:bg-gray-50 transition">
                          <Upload className="h-8 w-8 text-gray-400" />
                          <p className="text-sm text-gray-500">
                            Upload a cover image
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
            <Button type="submit" className="w-full mt-6 cursor-pointer">
              Confirm
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default NovelEditForm;
