import React from "react";
import ProfileImageEdit from "./ProfileImageEdit";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Save, X } from "lucide-react";
import { useUpdateProfile } from "@/services/profile";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  userName: z.string().min(2).max(50),
  emailAddress: z.string().email(),
  phoneNumber: z.string().optional(),
  about: z.string().min(10),
  location: z.string().optional(),
  facebook: z.string().optional(),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
});

const ProfileEditForm = ({ data }: { data: any }) => {
  
  const { mutate } = useUpdateProfile();

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: data?.full_name,
      userName: data?.username,
      emailAddress: data?.email,
      phoneNumber: data?.phone || "",
      about: data?.about || "",
      location: data?.location || "",
      facebook: data?.facebook || "",
      twitter: data?.twitter || "",
      instagram: data?.instagram || "",
      youtube: data?.youtube || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    
    toast.loading("Updating profile...");

    mutate({
      full_name: values.fullName,
      username: values.userName,
      email: values.emailAddress,
      phone: values.phoneNumber,
      about: values.about,
      location: values.location,
      facebook: values.facebook,
      twitter: values.twitter,
      instagram: values.instagram,
      youtube: values.youtube,
    });
  }

  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="bg-white p-6 rounded-md my-6 shadow-sm border border-gray-200">
          <p className="font-semibold text-xl">Profile Information</p>
          <p className="text-sm text-gray-600 mt-1">
            Update your profile information and preferences.
          </p>

          <div className="flex flex-row gap-12 mt-9">
            <ProfileImageEdit profileImage={data?.profile_image} fullName={data?.full_name} />
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[100px]"
                        placeholder="Enter about you"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your location" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please do not share your exact location.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-md my-6 shadow-sm border border-gray-200">
          <p className="font-semibold text-xl">Social Links</p>
          <p className="text-sm text-gray-600 mt-1">
            Update your social links.
          </p>

          <div className="flex flex-row gap-12 mt-9">
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="facebook"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Facebook</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your facebook profile link"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>X (Twitter)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your X profile link"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Instagram profile link"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="youtube"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Youtube</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Youtube profile link"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 mb-3">
          <Button
            size="lg"
            onClick={() => router.push("/profile")}
            type="button"
            className="cursor-pointer"
            variant="outline"
          >
            <X className="size-4 mr-2" />
            Cancel
          </Button>

          <Button size="lg" type="submit" className="cursor-pointer">
            <Save className="size-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileEditForm;
