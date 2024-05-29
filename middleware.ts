import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register')) {
    if (request.cookies.has("token")) {
      return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    } else {
      return NextResponse.next()
    } 
  }else if (request.nextUrl.pathname.startsWith('/verify-success') || request.nextUrl.pathname.startsWith('/verify-failed')){
    return NextResponse.next()
  
  } else {
    if (!request.cookies.has("token")) {
      return NextResponse.redirect(new URL('/login', request.nextUrl))
    } else {
      return NextResponse.next()
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}