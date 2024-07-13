import { Button } from '@dentist/components/ui/button'
import { whatsAppMessage } from '@dentist/utils/whatsapp-message'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeroOne = () => {
  return (
    <section className='h-screen lg:mb-0 mt-14 md:mt-10'>  
      <div className='grid lg:grid-cols-2 grid-cols-1  lg:gap-4 h-full auto-rows-fr'>
        <div className='flex items-center lg:p-8 px-8'>
          <div className=''>
            <h1>Tu Sonrisa como siempre la has querido</h1>
            <h4 className='py-5'>Odontología actual para Sonrisas Radiantes</h4>
            <Button size="lg" asChild>
              <Link href={whatsAppMessage('Revisión dental')} target='_blank'>
                Reserva hoy
              </Link>
            </Button>
          </div>
        </div>
        <div className='h-full flex lg:items-center justify-center w-full'>
          <div className='relative w-full justify-center flex'>
            <div className='lg:w-[350px] w-2/3 lg:h-[500px] h-full rounded-lg'>
              <Image 
                src="/hero-one-01.jpg" 
                alt='' 
                width={300}
                height={200}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
            <div className='hidden md:block absolute left-8 lg:left-20 top-14 lg:top-[170px] rounded-lg shadow-xl w-[150px] h-[250px]  z-10'>
              <Image 
                src="/hero-one-02.jpg" 
                alt=''
                className='w-full h-full object-cover rounded-lg'
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

 