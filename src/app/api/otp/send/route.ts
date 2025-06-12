import { createClient } from "@/utils/supabase/server";
import { validateEmail } from "@/utils/email";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const validatedEmail = await validateEmail(email);

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: validatedEmail,
    password: password,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ message: "OTP sent successfully" });
}
