import { Avatar, AvatarFallback, AvatarImage } from '@dentist/components/ui/avatar'
import { Button } from '@dentist/components/ui/button'
import React from 'react'

export const HeroTwo = () => {
  return (
    <section className='h-screen'>
      <div className='grid lg:grid-cols-2 grid-cols-1 h-full auto-rows-fr'>
        <div className='flex flex-col justify-center items-start p-10'>
          <div className='px-5 lg:px-10'>
            <p className='lg:mb-5'>Lorem, ipsum.</p>
            <h1 className='lg:pb-2 text-3xl'>Lorem, ipsum.</h1>
          </div>
          <div className='flex items-center bg-white rounded-full px-5 lg:px-10 py-2 lg:py-5 mb-4'>
            <h1 className='text-3xl'>Lorem, ipsum.</h1>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>MJ</AvatarFallback>
            </Avatar>
          </div>
          <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eos nobis fugit tempora et hic itaque facilis iste fugiat minus?</p>
          <Button>Lorem, ipsum.</Button>
        </div>
        <div className='flex items-center gap-4 p-5 lg:h-full'>
          <div className='relative lg:h-2/3 h-full w-full flex gap-2'>
            <div className='bg-blue-200 h-full w-1/2 rounded-2xl'></div>
            <div className='bg-blue-400 h-full w-1/2 rounded-2xl'></div>
            <div className='absolute bg-white px-4 py-2 rounded-full bottom-[80px] left-32 lg:left-[150px]'>
              <h1 className='font-normal text-xl'>Lorem, ipsum. 1</h1>
            </div>
            <div className='absolute bg-white px-4 py-2 rounded-full -bottom-2 right-36 lg:right-[80px]'>
              <h1 className='font-normal text-xl'>Lorem, ipsum. 2</h1>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

 