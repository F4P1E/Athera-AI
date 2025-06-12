"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SignUpForm, { type SignUpFormValues } from "./sign-up-form";
import VerifyOtpForm, { VerifyOtpFormValues } from "./verify-otp-form";

export default function SignUp() {
  const router = useRouter();
  const [step, setStep] = useState<"signup" | "verify">("signup");
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const onSubmit = async (values: SignUpFormValues) => {
    try {
      await sendOtp(values.email, values.password);
      setEmail(values.email);
      setPassword(values.password);
      setStep("verify");
      toast.success("Verification code sent to your email!");
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send verification code. Please try again."
      );
    }
  };

  const sendOtp = async (email: string | null, password: string | null) => {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    try {
      const response = await fetch("/api/otp/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send OTP");
      }

      return data;
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send verification code. Please try again."
      );
    }
  };

  const resendOtp = async () => {
    try {
      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      await sendOtp(email, password);
      toast.success("Verification code resent!");
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to resend verification code. Please try again."
      );
    }
  };

  const verifyOtp = async (values: VerifyOtpFormValues) => {
    try {
      const response = await fetch("/api/otp/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp: values.otp,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to verify OTP");
      }

      toast.success("Account verified successfully!");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to verify OTP. Please try again."
      );
    }
  };

  return (
    <div className="relative min-h-screen flex bg-gradient-to-br from-[#F0F5FF] to-[#DDE7F9]">
      {/* Left Section (Image) */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero/hero-background-1.jpg")' }}
      ></div>

      {/* Right Section (Form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
          {step === "signup" ? (
            <>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
                Create Your Account
              </h1>

              {/* Sign-up Form */}
              <SignUpForm onSubmit={onSubmit} />

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="text-[#34C0FC] font-semibold"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-6 mb-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Verify Your Email
                  </h2>
                  <p className="text-gray-600">
                    We&apos;ve sent a 6-digit verification code to{" "}
                    <span className="font-semibold">{email}</span>
                  </p>
                </div>
              </div>

              {/* OTP Verification Form */}
              <VerifyOtpForm onSuccess={verifyOtp} onResendOtp={resendOtp} />

              <div className="mt-6 text-center">
                <Button
                  variant="ghost"
                  onClick={() => setStep("signup")}
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  ← Back to sign up
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
