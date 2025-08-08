import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/'])

export default clerkMiddleware(async (auth, req) => {
    if (isPublicRoute(req)) {
        await auth.protect()
    }
})

export const config = {
    matcher: [
        "/((?!_next|static|favicon.ico).*)",  // Match all paths except specific ones
        "/",                                   // Match root path
        "/(api|trpc)(.*)",                     // Match API and tRPC routes
    ],
};