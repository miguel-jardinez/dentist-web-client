import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@dentist/components/ui/carousel'
import React from 'react'
import { HeroOne } from './hero-one'
import { HeroTwo } from './hero-two'
import { HeroThree } from './hero-three'

const heroList = [HeroTwo, HeroOne, HeroThree]

export const HeroCarousel = () => {
  return (
    <Carousel opts={{ loop: true, duration: 3 }} className='w-full lg:mb-0 mb-0 md:mb-10'>
      <CarouselContent>
        {
          heroList.map((Item, index) => {
            return (
              <CarouselItem key={index}>
                <Item />
              </CarouselItem>
            )
          })
        }
      </CarouselContent>
    </Carousel>
  )
}
