import React from 'react'

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='w-full h-full py-4 px-8 overflow-hidden'>
      {children}
    </section>
  )
}
