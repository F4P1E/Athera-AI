"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState, useEffect } from "react";

export type VerifyOtpFormValues = z.infer<typeof formSchema>;

const formSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

interface VerifyOtpFormProps {
  onSuccess: (values: VerifyOtpFormValues) => Promise<void>;
  onResendOtp: () => Promise<void>;
}

export default function VerifyOtpForm({
  onSuccess,
  onResendOtp,
}: VerifyOtpFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const maxOTPLength = 6;

  // Resend cooldown
  const cooldown = 60;
  const [resendCooldown, setResendCooldown] = useState(0);

  // Countdown timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCooldown > 0) {
      timer = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [resendCooldown]);

  const form = useForm<VerifyOtpFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = async (values: VerifyOtpFormValues) => {
    setIsLoading(true);
    await onSuccess(values);
    setIsLoading(false);
  };

  const resendOtp = async () => {
    setIsResending(true);
    await onResendOtp();
    setIsResending(false);
    setResendCooldown(cooldown); // Start cooldown after successful resend
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center gap-4">
                <FormLabel className="text-gray-700 font-medium">
                  Verification Code
                </FormLabel>
                <FormControl>
                  <InputOTP
                    maxLength={maxOTPLength}
                    {...field}
                    disabled={isLoading}
                  >
                    <InputOTPGroup className="gap-2">
                      {Array.from({ length: maxOTPLength }).map((_, i) => (
                        <InputOTPSlot
                          key={i}
                          index={i}
                          className="rounded-lg border bg-white/50 text-lg font-semibold transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700/50 dark:bg-gray-800/50"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#34C0FC] text-white py-3 rounded-md shadow-md hover:bg-[#1D92D0] transition"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </Button>
        </form>
      </Form>

      <div className="flex flex-row items-center justify-center gap-1">
        <p className="text-sm text-gray-600">Did not receive the code? </p>
        <Button
          onClick={resendOtp}
          disabled={isResending || resendCooldown > 0}
          className="text-[#34C0FC] font-semibold hover:underline disabled:opacity-50"
          variant="link"
        >
          {isResending
            ? "Resending..."
            : resendCooldown > 0
            ? `Resend in ${resendCooldown}s`
            : "Resend"}
        </Button>
      </div>
    </>
  );
}
