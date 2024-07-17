'use client'
import { whatsAppMessage } from "@dentist/utils/whatsapp-message"
import Image from "next/image"
import Link from "next/link"
import { AnimatedReveal } from "./animated-reveal"
import { motion, Variants } from "framer-motion"

const services = [
  {
    link: whatsAppMessage('Limpieza dental'),
    image: '/service-01.jpg',
    title: 'Limpieza dental',
    description: 'Te incluimos el pulido y aplicación de flúor para un completo cuidado dental.'
  },
  {
    link: whatsAppMessage('Blanqueamiento dental'),
    image: '/service-02.jpg',
    title: 'Blanqueamiento dental',
    description: 'Hará que luzcas una sonrisa naturalmente más blanca y radiante.'
  },
  {
    link: whatsAppMessage('Resinas dnetales'),
    image: '/service-03.jpg',
    title: 'Resinas dentales',
    description: 'Este material nos ayuda a restaurar dientes con algún tipo de daño con la ventaja de ser estético y compatible con tus dientes.'
  },
  {
    link: whatsAppMessage('Extracciones'),
    image: '/service-04.jpg',
    title: 'Extracciones',
    description: 'Consiste en un tratamiento de última instancia o de urgencia con respecto a un diente dañado o con dolor como en el caso de las muelas del juicio.'
  },
  {
    link: whatsAppMessage('Carillas de resin'),
    image: '/service-05.jpg',
    title: 'Carillas de resina',
    description: 'Éstas te generan un cambio estético en el tamaño, forma y color de tus dientes sin desgastarlos. '
  },
  {
    link: whatsAppMessage('Prótesis removible'),
    image: '/service-06.jpg',
    title: 'Prótesis removible',
    description: 'Ya sean totales o parciales son una buena opción para reemplazar dientes perdidos, facilitan la higiene y cuidado de los demás dientes.'
  },
]

const animationContainer: Variants = {
  hidden: {
    opacity: 1
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.6
    }
  }
}
const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}


const Services = ({ image, title, description, link }: { image: string, title: string, description: string, link: string }) => {
  return (
    <motion.article variants={item} className="relative w-full lg:w-1/3 p-4 lg:mb-10">
      <Link href={link} target="_blank">
        <div className="h-[300px] mb-2">
          <div className="h-full w-full lg:w-8/12 bg-red-200 rounded-lg">
            <Image
              src={image}
              alt=''
              width={300}
              height={200}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>
        <div className="flex justify-center -mt-10">
          <div className="
            shadow-lg
            lg:absolute 
            w-2/3
            lg:w-1/2
            text-center
            lg:text-start
            lg:top-[6rem]
            lg:left-[14rem]
            bg-primary/90
            text-destructive-foreground
            rounded-xl 
            px-4 
            py-2"
          >
            <h3 className="text-xl mb-2 font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </Link>
    </motion.article>

  )
}

export const SectionServices = () => {
  return (
    <AnimatedReveal>
      <section id="services" className="sm:container sm:m-auto py-8">
        <h4 className="text-center">Más Populares</h4>
        <h3 className="text-center text-5xl font-extrabold text-red-400 mb-5">Nuestros Servicios</h3>
        <motion.div variants={animationContainer} viewport={{ once: true }} initial="hidden" whileInView="show" className="lg:flex flex-wrap">
          {
            services.map((item) => <Services key={item.title} {...item} />)
          }
        </motion.div>
      </section>
    </AnimatedReveal>
  )
}
