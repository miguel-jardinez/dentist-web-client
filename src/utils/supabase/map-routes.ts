const publicRoutes = [
  '/',
  '/auth/login',
  '/auth/register'
]

const adminRoutes = [
  '/admin',
  '/dashboard',
  '/dashboard/blog'
]

const authRoutes = [
  '/auth/login',
  '/auth/register'
]

export const isAuthRouted = (path: string) => {
  return authRoutes.some((publicRoute) => publicRoute.startsWith(path))
}

export const isAdminRoutes = (path: string) => {
  return adminRoutes.some(adminRoute => path.startsWith(adminRoute));
}

export const isPublicRoutes = (path: string) => {
  return publicRoutes.some((publicRoute) => publicRoute === path)
}