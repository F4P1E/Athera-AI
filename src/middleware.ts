import { updateSession } from "@/utils/supabase/middleware";
import { type NextRequest, NextResponse } from "next/server";

const publicPaths = ["/about", "/contact", "/services"];
const authPaths = ["/sign-in", "/sign-up"];

export async function middleware(request: NextRequest) {
  const { origin, pathname, search, searchParams } = request.nextUrl;
  const { res, user } = await updateSession(request);

  if (pathname === "/") return res;

  // If user is logged in and tries to access auth pages
  if (user && authPaths.some((path) => pathname.startsWith(path))) {
    const returnUrl = decodeURIComponent(searchParams.get("returnUrl") || "");
    return NextResponse.redirect(new URL(returnUrl, origin));
  }

  // If user is not logged in and tries to access protected routes
  if (
    !user &&
    !publicPaths.some((path) => pathname.startsWith(path)) &&
    !authPaths.some((path) => pathname.startsWith(path))
  ) {
    const returnUrl = encodeURIComponent(pathname + search);
    return NextResponse.redirect(
      new URL(`/sign-in?returnUrl=${returnUrl}`, origin)
    );
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
