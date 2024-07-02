import React from 'react'

export const DentistMap = () => {
  return (
    <section id='place' className='my-4'>
      <iframe 
        className='w-full h-[400px] lg:h-[600px]'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.900449418561!2d-98.75736792247993!3d20.056009809013606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a12e4d20bceb%3A0x695af96b6c638a9f!2sC.%20Retroexcavadora%20508%2C%20Los%20Tuzos%2C%2042185%20Fraccionamientos%20del%20Sur%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1719792394247!5m2!1ses-419!2smx" 
        style={{ border:0 }} loading="lazy" 
      />
    </section>
  )
}
