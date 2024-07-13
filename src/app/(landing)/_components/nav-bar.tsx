"use client"

import { SetStateAction, useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from '@dentist/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { whatsAppMessage } from '@dentist/utils/whatsapp-message';

const NavBarDesktop = () => {
  return (
    <header className='fixed bg-background border-b border-grey-50 shadow w-full z-20 py-4'>
      <div className='container m-auto flex items-center justify-between h-full'>
        <div className='flex items-center'>
          <h2 className='text-sm md:text-lg font-bold text-primary'>Perla De Esmalte</h2>
        </div>
        <div>
          <Button  asChild>
            <Link href={whatsAppMessage('dental')} target='_blank'>
              Agendar cita
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

const NavBarMobileMenu = ({ setOpen } : { setOpen: React.Dispatch<SetStateAction<boolean>> }) => {
  return (
    <section className="h-screen w-screen fixed z-30 bg-white inset-0 px-4 py-8">
      <div className="flex justify-end">
        <Button onClick={() => setOpen(false)} variant="outline" size="icon">
          <IoCloseSharp size={24} />
        </Button>
      </div>
      <ul className="list-none">
        <li>
          <Link href="#">How schedule</Link>
        </li>
        <li>
          <Link href="#">Services</Link>
        </li>
        <li>
          <Link href="#">Pricing</Link>
        </li>
        <li>
          <Link href="#">Place</Link>
        </li>
      </ul>
    </section>
  );
}

const NavBarMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='relative lg:hidden h-20 bg-white shadow-lg w-full z-20'>
      <div className='container m-auto flex items-center justify-between h-full'>
        <div className='flex items-center'>
          <Button onClick={() => setOpen(true)} variant="outline" size="icon">
            <IoIosMenu size={28} />
          </Button>
          {open && (
            <NavBarMobileMenu setOpen={setOpen} />
          )}
        </div>
      </div>
    </header>
  )
}

export const NavBar = () => {
  return (
    <>
      <NavBarDesktop />
    </>
  )
}
