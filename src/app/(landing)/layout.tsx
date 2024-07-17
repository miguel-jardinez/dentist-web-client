import { Footer } from '@dentist/app/(landing)/_components/footer'
import { NavBar } from '@dentist/app/(landing)/_components/nav-bar'
import React from 'react'

const LandingLayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className='bg-gradient-to-r from-background to-white'>
      <NavBar /> 
        { children }
      <Footer />
    </div>
  )
}

export default LandingLayout;
