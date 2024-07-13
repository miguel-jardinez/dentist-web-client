import { Avatar, AvatarFallback, AvatarImage } from '@dentist/components/ui/avatar'
import { Button } from '@dentist/components/ui/button'
import { whatsAppMessage } from '@dentist/utils/whatsapp-message'
import Image from 'next/image'
import Link from 'next/link'

export const HeroTwo = () => {
  return (
    <section className='h-screen mt-24 md:mt-10'>
      <div className='grid lg:grid-cols-2 grid-cols-1 h-full auto-rows-fr'>
        <div className='flex flex-col justify-center items-start p-4 md:p-10'>
          <div className='px-5 lg:pr-20 lg:pl-0 lg:mb-4'>
            <p className='text-lg lg:mb-5'>Sonrisas hermosas, experiencia inigualable</p>
            <h1 className='lg:pb-2text-3xl'>Compromiso en cumplir tus expectativas.</h1>
          </div>
          <div className='flex items-center bg-primary text-destructive-foreground rounded-full px-5 lg:px-10 py-2 lg:py-5 mb-4'>
            <h1 className='text-2xl md:text-3xl'>Disfrutamos de verte feliz</h1>
          </div>
          <p className='hidden md:block text-sm mb-8'>Cada sonrisa es más que un resultado; es el reflejo de nuestro compromiso inquebrantable contigo y tu bienestar.</p>
          <Link href={whatsAppMessage('Revisión dental')} target='_blank'>
            <Button>Reserva ahora</Button>
          </Link>
        </div>
        <div className='flex items-center gap-4 px-5 py-0 md:p-5 lg:h-full'>
          <div className='relative lg:h-2/3 h-full w-full flex gap-2'>
            <div className='h-full w-1/2 rounded-2xl'>
              <Image 
                src="/hero-one-03.jpg" 
                alt='' 
                width={300}
                height={200}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
            <div className=' h-full w-1/2 rounded-2xl'>
              <Image 
                src="/hero-one-04.jpg" 
                alt='' 
                width={300}
                height={200}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

 