import { updateSession } from "@/utils/supabase/middleware";
import { type NextRequest, NextResponse } from "next/server";

const publicPaths = ["/", "/about", "/contact", "/sign-in", "/sign-up"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!publicPaths.some((path) => path.startsWith(pathname))) {
    const { res, user } = await updateSession(request);

    if (!user) {
      const returnUrl = encodeURIComponent(
        request.nextUrl.pathname + request.nextUrl.search
      );
      const loginUrl = new URL(`/sign-in?returnUrl=${returnUrl}`, request.url);
      return NextResponse.redirect(loginUrl);
    }

    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
