import { Button } from '@dentist/components/ui/button';
import { whatsAppMessage } from '@dentist/utils/whatsapp-message';
import Link from 'next/link';

const NavBarDesktop = async () => {

  return (
    <header className='fixed bg-background border-b border-grey-50 shadow w-full z-20 py-4'>
      <div className='container m-auto flex items-center justify-between h-full'>
        <div className='flex items-center'>
          <h2 className='text-sm md:text-lg font-bold text-primary'>Perla De Esmalte</h2>
        </div>
        <div className='space-x-4'>
          <Button variant="secondary" asChild>
            <Link href={whatsAppMessage('dental')} target='_blank'>
              Agendar cita
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export const NavBar = () => {
  return (
    <>
      <NavBarDesktop />
    </>
  )
}
