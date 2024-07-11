import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaFacebook, FaTiktok, FaRegClock, FaWhatsapp } from 'react-icons/fa'
import { PiMapPin } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";

const footerWhatsAppMessage = encodeURIComponent('Hola, Me gustaría agendar una cita... Podría darme más informes por favor.')


export const Footer = () => {
  return (
    <footer>
      <section className='py-10 text-blue-950'>
        <div className='container m-auto grid lg:grid-cols-2 grid-cols-1'>
          <div className='lg:w-2/3 mb-10 lg:mb-0'>
              <h4>Perla de esmalte</h4>
              <p className='my-4 block'>
                Espero que cada visita sea una experiencia inigualable, llena de calidad y gratificante. 
                Tu salud es definitivamente nuestro primordial objetivo y nuestra prioridad. 
                ¡Gracias por confiar en nosotros para cuidar de ti!
              </p>
              <div className='flex items-center gap-4'>
                <div 
                    className='cursor-pointer rounded-full h-10 w-10 flex items-center justify-center text-destructive-foreground bg-primary'
                    >
                    <FaRegClock />
                </div>
                <div>
                    <h5 className='text-sm'>Lunes - Sábados</h5>
                    <p className='text-xs'>9:00 Am - 19:00 Pm</p>
                </div>
              </div>
          </div>
          <div className='lg:flex justify-end'>
            <div className='lg:w-1/2'>
            </div>
            <div className='lg:w-1/2'>
              <h4 className='mb-4'>Contáctanos</h4>
              <ul className='m-0 list-none space-y-5'>
                <Link className='block' href="https://maps.app.goo.gl/kRjGdEgqFLqMfMZ17" target='_blank'>
                  <li className='flex items-center'>
                    <div 
                      className='mr-4 rounded-full h-10 w-10 flex items-center justify-center text-destructive-foreground bg-primary'
                    >
                      <PiMapPin size={20} />
                    </div>
                    <h5 className='text-sm w-[80%]'>Calle Retroexcavadora 508, Mineral de la reforma; Los Tuzos.</h5>
                  </li>
                </Link>
                <Link className='block' href="tel:+527711167920" target='_blank'>
                  <li className='flex items-center'>
                    <div 
                        className='rounded-full mr-2 h-10 w-10 flex items-center justify-center text-destructive-foreground bg-primary'
                        >
                        <FaPhone />
                    </div>
                    <div>
                        <h5 className='text-sm'>+52 771-116-7920</h5>
                    </div>
                  </li>
                </Link>
                <Link className='block' href={`https://wa.me/527711167920?text=${footerWhatsAppMessage}`} target='_blank'>
                  <li className='flex items-center'>
                    <div 
                      className='rounded-full mr-2 h-10 w-10 flex items-center justify-center text-destructive-foreground bg-primary'
                      >
                      <FaWhatsapp size={24} />
                    </div>
                    <div>
                      <h5 className='text-sm'>+52 771-116-7920</h5>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-primary/70 py-5'>
          <div className='grid lg:grid-cols-2 grid-cols-1 m-auto container content-center'>
            <div className='flex items-center justify-center lg:justify-start'>
                <p className='text-white text-xs'>Todos los derechos reservados 2024</p>
            </div>
            <div className='flex items-center justify-center mt-5 lg:mt-0 lg:justify-end gap-4'>
                <Link href="https://www.instagram.com/perladelesmalte/" target='_blank'>
                <div 
                  className='cursor-pointer rounded-full h-8 w-8 flex items-center justify-center text-destructive-foreground bg-primary'
                  >
                  <FaInstagram />
                </div>
                </Link>
                <Link href="https://www.facebook.com/perladelesmalte" target='_blank'>
                <div 
                  className='cursor-pointer rounded-full h-8 w-8 flex items-center justify-center text-destructive-foreground bg-primary'
                  >
                  <FaFacebook />
                </div>
                </Link>
                <Link href="https://www.tiktok.com/@perladelesmalte" target='_blank'>
                <div 
                  className='cursor-pointer rounded-full h-8 w-8 flex items-center justify-center text-destructive-foreground bg-primary'
                  >
                  <FaTiktok />
                </div>
                </Link>
            </div>
          </div>
      </section>
    </footer>
  )
}
