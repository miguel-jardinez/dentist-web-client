import { Button } from '@dentist/components/ui/button'
import React from 'react'

export const AboutUs = () => {
  return (
    <section id='about-us' className='py-4 lg:py-10 container m-auto'>
      <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div className='flex items-center justify-center mb-5'>
          <div className='w-full h-full lg:w-5/6 lg:h-5/6 bg-blue-200 aspect-square rounded-lg'>

          </div>
        </div>
        <div className='space-y-5'>
          <h4>Lorem, ipsum.</h4>
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <div className='space-y-10'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nostrum fugit reprehenderit ipsum dolorem quo ipsa at, accusantium nisi sequi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nostrum fugit reprehenderit ipsum dolorem quo ipsa at, accusantium nisi sequi?</p>
            <Button size="lg">Lorem, ipsum.</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
