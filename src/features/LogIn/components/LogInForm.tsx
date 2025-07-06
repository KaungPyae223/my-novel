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
import { Lock, LogIn, Mail } from "lucide-react";
import Link from "next/link";
import { Toaster } from "sonner";
import { useLogIn } from "../hooks/useLogIn";

const LogInForm = () => {
  const { form, onSubmit } = useLogIn();

  return (
    <div className="mt-9 bg-white p-6 rounded-md shadow-xs border border-gray-200">
      <Toaster />
      <h1 className="text-2xl font-semibold mb-3">Welcome back</h1>
      <p className=" text-gray-700 w-[350px] text-sm mb-6">
        Sign in to your NovelShare account to continue your writing journey
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

          <Button type="submit" className="flex items-center gap-2 w-full">
            <LogIn className="size-4" /> Log In
          </Button>

          <hr />
          <p className="text-center text-sm text-gray-700">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-600">
              Register
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default LogInForm;
