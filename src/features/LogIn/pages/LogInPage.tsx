"use client";
import { Book } from "lucide-react";
import React from "react";
import Banner from "@/features/Components/RegisterLogin/Banner";
import LogInForm from "../components/LogInForm";

const RegisterPage = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="py-12 my-auto px-24">
        <div className="text-blue-800 flex items-center flex-row gap-2">
          <Book className="size-7" />
          <div className="font-semibold text-2xl">My Novel</div>
        </div>
        <LogInForm />
      </div>
      <Banner />
    </div>
  );
};

export default RegisterPage;
