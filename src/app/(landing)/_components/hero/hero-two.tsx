'use client'
import { Button } from '@dentist/components/ui/button'
import { motion, Variant, Variants } from 'framer-motion'
import { whatsAppMessage } from '@dentist/utils/whatsapp-message'
import Image from 'next/image'
import Link from 'next/link'

const imageContainerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.2
    }
  }
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  },
}

export const HeroTwo = () => {
  return (
    <motion.section 
      variants={imageContainerVariants}
      initial="hidden"
      whileInView="show"
      className='h-auto md:h-screen mt-20 md:mt-10'
    >
      <div className='grid lg:grid-cols-2 grid-cols-1 h-full auto-rows-fr'>
        <motion.div variants={variants} className='flex flex-col justify-center items-start p-4 md:p-10'>
          <div className='px-5 lg:pr-20 lg:pl-0 lg:mb-4'>
            <p className='text-lg lg:mb-5'>Sonrisas hermosas, experiencia inigualable</p>
            <h1 className='lg:pb-2text-3xl'>
              <span className='text-red-400'>Compromiso</span> en cumplir tus <span className='text-red-400'>expectativas.</span>
            </h1>
          </div>
          <div className='mt-5 flex items-center bg-primary text-destructive-foreground rounded-full px-5 md:px-10 py-2 md:py-5 mb-4'>
            <h1 className='text-2xl md:text-4xl'>Disfrutamos de verte feliz</h1>
          </div>
          <p className='hidden md:block text-sm mb-8'>Cada sonrisa es más que un resultado; es el reflejo de nuestro compromiso inquebrantable contigo y tu bienestar.</p>

          <Button className='w-full md:w-1/3' size="lg" asChild>
            <Link href={whatsAppMessage('de Revisión dental')} target='_blank'>
              Reserva ahora
            </Link>
          </Button>

        </motion.div>
        <div className='flex items-center gap-4 px-5 py-0 md:p-5 h-2/3 md:h-full'>
          <div
            className='relative lg:h-2/3 h-full w-full flex gap-2'
          >
            <motion.div 
              variants={variants}
              className='h-full w-1/2 rounded-2xl bg-blue-400'
            >
              <Image
                src="/hero-one-03.jpg" 
                alt='' 
                width={300}
                height={200}
                className='w-full h-full object-cover rounded-lg'
              />
            </motion.div>
            <motion.div 
              variants={variants}
              className='h-full w-1/2 rounded-2xl bg-red-500'
            >
              <Image 
                src="/hero-one-04.jpg" 
                alt='' 
                width={300}
                height={200}
                className='w-full h-full object-cover rounded-lg'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

 