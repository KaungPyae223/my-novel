import { Button } from "@/components/ui/button";
import { Router } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const MailSendSuccess = ({ handleSendVerificationMail }: any) => {

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-10 gap-6">
      {/* Success Illustration */}
      <Image
        width={180}
        height={180}
        src="/Work_space.svg"
        alt="Verification Success"
        className="mb-2"
      />

      {/* Title & Description */}
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Verification Email Sent
        </h2>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          Please check your inbox for the verification link. <br />
          If you don’t see it, check your spam folder.
        </p>
      </div>

      {/* Resend Section */}
      <div className="text-center mt-2">
        <p className="text-gray-700 text-sm">Didn’t receive the email?</p>
        <Button
          variant="outline"
          onClick={handleSendVerificationMail}
          className="text-blue-600 border-blue-600 hover:bg-blue-50 mt-3 px-6"
        >
          Resend Email
        </Button>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full border-t my-1"></div>

        <div className="flex items-center gap-2 mt-3">
          <p className="text-gray-700 text-sm">Already verified?</p>
          <Button
            variant="ghost"
            onClick={() => {router.back()}}
            className="text-blue-600 hover:underline px-0"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MailSendSuccess;
