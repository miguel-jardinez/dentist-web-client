'use client'

import { DashboardNavigationBar, DashboardNavigationHeader } from '@dentist/components/dashboard'
import { usePathname } from 'next/navigation'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {

  const pathName = usePathname()

  const gridStyles = pathName.endsWith('/escribir-blog') ? 'grid-cols-1' : 'grid-cols-[20%_80%]'

  return (
    <main className='h-full'>
      <section className={`grid ${gridStyles} h-full bg-background`}>
        <DashboardNavigationBar />
        <section>
          {children}
        </section>
      </section>
    </main>
  )
}

export default Layout