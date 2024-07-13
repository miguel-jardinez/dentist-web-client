import { Footer } from '@dentist/app/(landing)/_components/footer'
import { NavBar } from '@dentist/app/(landing)/_components/nav-bar'
import React from 'react'

const LandingLayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <>
      <NavBar /> 
        { children }
      <Footer />
    </>
  )
}

export default LandingLayout;
