import React from "react";
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
import { AtSign, Lock, Mail, User, UserPlus } from "lucide-react";
import Link from "next/link";
import { Toaster } from "sonner";
import { useRegister } from "../hooks/useRegister";


const RegisterForm = () => {
  
  const {form, onSubmit} = useRegister();

  return (
    <div className="mt-9 bg-white p-6 rounded-md shadow-xs border border-gray-200">
      <Toaster />
      <h1 className="text-2xl font-semibold mb-3">Create an account</h1>
      <p className=" text-gray-700 w-[350px] text-sm mb-6">
        Join NovelShare to start writing and sharing your stories
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center gap-2">
                    <User className="size-4" />
                    Full Name
                  </div>
                </FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Enter your full name" {...field} />
                  </div>
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
                <FormLabel>
                  <div className="flex items-center gap-2">
                    <AtSign className="size-4" />
                    User Name
                  </div>
                </FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Enter your username" {...field} />
                  </div>
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
                <FormLabel>
                  <div className="flex items-center gap-2">
                    <Mail className="size-4" />
                    Email Address
                  </div>
                </FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Your email address" {...field} />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center gap-2">
                    <Lock className="size-4" />
                    Password
                  </div>
                </FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input
                      type="password"
                      placeholder="Create a password"
                      {...field}
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex items-center gap-2">
                    <Lock className="size-4" />
                    Confirm Password
                  </div>
                </FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      {...field}
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="flex items-center gap-2 w-full">
            <UserPlus className="size-4" /> Create an account
          </Button>

          <hr />
          <p className="text-center text-sm text-gray-700">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600">
              Log in
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
