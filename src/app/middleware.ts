import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hasAuthCookie = request.cookies.has("token");

  if (!hasAuthCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my-novels/:path*","/profile/:path*","/communities/:path*","/favorites/:path*"],
};
