import { DashboardNavigationBar, DashboardNavigationHeader } from '@dentist/components/dashboard'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-full'>
      <section className='grid grid-cols-[15%_85%] h-full bg-background'>
        <DashboardNavigationBar />
        <section>
          {children}
        </section>
      </section>
    </main>
  )
}

export default Layout