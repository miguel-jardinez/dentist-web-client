const publicRoutes = [
  '/',
  '/auth/login',
  '/auth/register'
]

const adminRoutes = [
  '/admin',
  '/dashboards'
]

const authRoutes = [
  '/auth/login',
  '/auth/register'
]

export const isAuthRouted = (path: string) => {
  return authRoutes.some((publicRoute) => publicRoute === path)
}

export const isAdminRoutes = (path: string) => {
  return adminRoutes.some((publicRoute) => publicRoute === path)
}

export const isPublicRoutes = (path: string) => {
  return publicRoutes.some((publicRoute) => publicRoute === path)
}