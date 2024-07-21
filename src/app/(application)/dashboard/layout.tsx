import { DashboardNavigationBar, DashboardNavigationHeader } from '@dentist/components/dashboard'
import { usePathname } from 'next/navigation'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-full flex bg-white overflow-hidden'>
      <DashboardNavigationBar />
      <div className='w-full h-full'>
        {children}
      </div>
    </main>
  )
}

export default Layout