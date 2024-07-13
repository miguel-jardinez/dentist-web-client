import { Button } from '@dentist/components/ui/button'
import { whatsAppMessage } from '@dentist/utils/whatsapp-message'
import Image from 'next/image'
import Link from 'next/link'

export const HeroThree = () => {
  return (
  <section className='h-screen relative mt-20 md:mt-0'>
        <div className='grid lg:grid-cols-2 grid-cols-1 h-full px-8 py-0 lg:p-10 auto-rows-fr'>
          <div className='flex flex-col justify-center items-start'>
            <h1>Una vida sin dolor dental es una vida más feliz.</h1>
            <p className='my-5'>Calidad y cuidado en cada procedimiento dental. Dile adiós al miedo de visitar al dentista y empieza a disfrutar de tu salud.</p>
            <Link href={whatsAppMessage('Revisión dental')} target='_blank'>
              <Button size="lg">Agenda hoy</Button>
            </Link>
          </div>
          <div className='relative flex lg:block justify-center'>
            <div className='lg:absolute bottom-0 right-[150px] w-3/4 lg:w-[400px] h-full lg:h-[600px] bg-green-300'>
              <Image 
                src="/hero-one-05.jpg" 
                alt='' 
                width={300}
                height={200}
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
            {/* <div className='flex items-center gap-4 bg-white absolute right-5 top-10 lg:right-[50px] lg:top-[400px] px-4 py-2 rounded-full'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div>
                <h6 className='font-bold'>Perla Gonzalez</h6>
                <p>Consultant</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
  )
}

 