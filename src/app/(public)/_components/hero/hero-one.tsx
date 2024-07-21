'use client'
import { Button } from '@dentist/components/ui/button'
import { whatsAppMessage } from '@dentist/utils/whatsapp-message'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const containerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3
    }
  }
}

const items: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export const HeroOne = () => {
  return (
    <section className='h-screen lg:mb-0 mt-14 md:mt-10'>  
      <motion.div initial="hidden" whileInView="show" variants={containerVariants} className='grid lg:grid-cols-2 grid-cols-1  lg:gap-4 h-full auto-rows-fr'>
        <div className='flex items-center lg:p-8 px-8'>
          <motion.div variants={items} className=''>
            <h1><span className='text-red-400'>Tu Sonrisa</span> como siempre la has <span className='text-red-400'>querido</span></h1>
            <h4 className='py-5'>Odontología actual para Sonrisas Radiantes</h4>
            <Button className='w-full md:w-1/3' size="lg" asChild>
              <Link href={whatsAppMessage('Revisión dental')} target='_blank'>
                Reserva hoy
              </Link>
            </Button>
          </motion.div>
        </div>
        <div className='h-full flex lg:items-center justify-center w-full'>
          <div className='relative w-full justify-center flex'>
            <motion.div variants={items} className='lg:w-[350px] w-2/3 lg:h-[500px] h-full rounded-lg'>
              <Image 
                src="/hero-one-01.jpg" 
                alt='' 
                width={300}
                height={200}
                className='w-full h-full object-cover rounded-lg'
              />
            </motion.div>
            <motion.div variants={items} className='hidden md:block absolute left-8 lg:left-20 top-14 lg:top-[170px] rounded-lg shadow-xl w-[150px] h-[250px]  z-10'>
              <Image 
                src="/hero-one-02.jpg" 
                alt=''
                className='w-full h-full object-cover rounded-lg'
                width={300}
                height={200}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

 