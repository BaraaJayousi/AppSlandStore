import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// 1. Specify protected and public routes
const protectedRoutes = ['/', '/products']
const publicRoutes = ['/auth/login']

export default async function middleware(req: NextRequest) {
// 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  // 3. fetch the token from the cookie
  const token = cookies().get('token')?.value

   // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    token &&
    !req.nextUrl.pathname.startsWith('/products')
  ) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  return NextResponse.next()
  
}