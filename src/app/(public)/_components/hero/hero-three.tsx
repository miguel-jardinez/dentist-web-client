'use client'
import { Button } from '@dentist/components/ui/button'
import { whatsAppMessage } from '@dentist/utils/whatsapp-message'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.4
    }
  }
}

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

export const HeroThree = () => {
  return (
    <motion.section variants={containerVariants} initial="hidden" whileInView="show" className='h-screen relative mt-20 md:mt-0'>
      <div className='grid lg:grid-cols-2 grid-cols-1 h-full px-8 py-0 lg:p-10 auto-rows-fr'>
        <motion.div variants={item} className='flex flex-col justify-center items-start'>
          <h1>Una vida <span className='text-red-400'>sin dolor dental</span> es una vida más <span className='text-red-400'>feliz.</span></h1>
          <p className='my-5'>Calidad y cuidado en cada procedimiento dental. Dile adiós al miedo de visitar al dentista y empieza a disfrutar de tu salud.</p>
          <Button  className='w-full md:w-1/3' size="lg" asChild>
            <Link href={whatsAppMessage('Revisión dental')} target='_blank'>
              Agenda hoy
            </Link>
          </Button>
        </motion.div>
        <motion.div variants={item} className='relative flex lg:block justify-center'>
          <div className='lg:absolute bottom-0 right-[150px] w-3/4 lg:w-[400px] h-full lg:h-[600px] bg-green-300'>
            <Image
              src="/hero-one-05.jpg"
              alt=''
              width={300}
              height={200}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
