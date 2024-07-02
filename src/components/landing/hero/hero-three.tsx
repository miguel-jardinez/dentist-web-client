import { Avatar, AvatarFallback, AvatarImage } from '@dentist/components/ui/avatar'
import { Button } from '@dentist/components/ui/button'
import React from 'react'

export const HeroThree = () => {
  return (
  <section className='h-screen relative'>
        <div className='grid lg:grid-cols-2 grid-cols-1 h-full px-8 py-0 lg:p-10 auto-rows-fr'>
          <div className='flex flex-col justify-center items-start'>
            <h1>Lorem ipsum dolor sit.</h1>
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sunt beatae velit, aliquam consectetur hic natus nulla aut alias perferendis!</p>
            <Button size="lg">Lorem, ipsum.</Button>
          </div>
          <div className='relative flex lg:block justify-center'>
            <div className='lg:absolute bottom-0 right-[150px] w-1/2 lg:w-[400px] h-full lg:h-[600px] bg-green-300'></div>
            <div className='flex items-center gap-4 bg-white absolute right-5 top-10 lg:right-[50px] lg:top-[400px] px-4 py-2 rounded-full'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div>
                <h6 className='font-bold'>Perla Gonzalez</h6>
                <p>Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

 