

import type { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware"
import type { NextRequestWithAuth } from "next-auth/middleware";


export async function middleware(request: NextRequestWithAuth) {

  const pathname = request.nextUrl.pathname;

  if(pathname === "/account") {
    console.log({ pathname})
    const response = await withAuth(request, {})
    console.log({ response})
    if( response?.status === 307) {
      return response;
    }
  }
 
}



export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
