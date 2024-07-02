import { Footer } from '@dentist/components/landing/footer'
import { NavBar } from '@dentist/components/landing/nav-bar'
import React from 'react'

const LandingLayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <>
      {/* <NavBar /> */}
        { children }
      <Footer />
    </>
  )
}

export default LandingLayout;
