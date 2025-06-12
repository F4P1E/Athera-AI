import {
  createClient,
} from '@/utils/supabase/server';
import { validateEmail, validateOtp } from '@/utils/email';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  const { email, otp } = await request.json();

  const validatedEmail = await validateEmail(email);
  const validatedOtp = await validateOtp(otp);

  const supabase = await createClient();

  const { error } = await supabase.auth.verifyOtp({
    email: validatedEmail,
    token: validatedOtp,
    type: 'email',
  });

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });

  const cookieStore = await cookies();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const supabaseCookies = cookieStore
    .getAll()
    .filter(({ name }) => name.startsWith('sb-'))
    .map(({ name, value }) => ({ name, value }));

  return NextResponse.json({
    message: 'OTP verified successfully',
    cookies: supabaseCookies,
    session,
  });
}
