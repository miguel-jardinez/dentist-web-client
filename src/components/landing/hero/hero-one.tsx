import { Button } from '@dentist/components/ui/button'
import React from 'react'

export const HeroOne = () => {
  return (
    <section className='h-screen lg:mb-0'>  
      <div className='grid lg:grid-cols-2 grid-cols-1  lg:gap-4 h-full auto-rows-fr'>
        <div className='flex items-center lg:p-8 px-8'>
          <div className=''>
            <h1>Cosmetic and Beauty Dentistry trend today</h1>
            <h4 className='py-5'>Lorem ipsum dolor sit amet.</h4>
            <Button size="lg">Lorem, ipsum.</Button>
          </div>
        </div>
        <div className='h-full flex lg:items-center justify-center w-full'>
          <div className='relative w-full justify-center flex'>
            <div className='lg:w-[350px] w-2/3 lg:h-[500px] h-full bg-blue-100'></div>
            <div className='absolute left-8 lg:left-20 top-14 lg:top-[170px] w-[150px] h-[250px] bg-green-200 z-10'>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

 