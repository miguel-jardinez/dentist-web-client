import { Button } from '@dentist/components/ui/button'
import { whatsAppMessage } from '@dentist/utils/whatsapp-message'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedReveal } from './animated-reveal'

export const AboutUs = () => {
  return (
    <AnimatedReveal>
      <section id='about-us' className='py-4 lg:py-10 container m-auto'>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
          <div className='flex items-center justify-center mb-5'>
            <div className='w-full h-full lg:w-5/6 lg:h-full bg-blue-200 aspect-square shadow-md rounded-lg'>
              <Image 
                src="/about-us.jpg" 
                alt="" 
                width={1000}
                height={800}
                className='h-full w-full object-cover rounded-lg'
              />
            </div>
          </div>
          <div className='space-y-5'>
            <h4 className='font-normal'>Cuidando tu Sonrisa y tu Bienestar</h4>
            <h1>
              <span className='text-red-400'>Expertos</span> en tratamientos dentales <span className='text-red-400'>sin dolor</span> y con garantía
            </h1>
            <div className='space-y-10'>
              <p>
                Estamos orgullosos de ofrecer tratamientos que no solo mejoran tu salud bucal, sino también tu calidad de vida.
                Nos dedicamos a proporcionar servicios dentales de calidad en un ambiente impecable, cómodo, acogedor y lo más libre de dolor posible.
              </p>
              <p>
                Estamos comprometidos a satisfacer las expectativas de tu tratamiento, 
                mantenerte informado y resolver de manera efectiva cualquier situación durante todo tu 
                tratamiento desde la primera consulta hasta su finalización.
              </p>
              <Button size="lg" asChild>
                <Link href={whatsAppMessage('dental')} target='_blank'>
                  Descubre tu experiencia
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedReveal>
  )
}
