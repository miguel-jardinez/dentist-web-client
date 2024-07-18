
'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { MdTextFields, MdHome } from 'react-icons/md'
import { Button } from '../ui/button'
import { logOutServerAction } from '@dentist/views/auth/actions'

export const DashboardNavigationBar = () => {
  const router = useRouter();
  const pathName = usePathname()
  const baseLinkStyle = "w-full px-4 py-3 flex items-center";
  const isActivePath = "bg-white/30 rounded-md"

  const isActive = (path: string) => pathName === path

  const onLogout = async () => {
    await logOutServerAction()
  }

  if (pathName.endsWith('/blog/escribir-blog')) return

  return (
    <nav 
      className='h-full bg-blue-300 pt-5 flex flex-col justify-between py-5'
    >
      <div className='space-y-10'>
        <div>
          <Link className={`${baseLinkStyle} ${ isActive('/dashboard') ? isActivePath : ''}`} href="/dashboard">
            <MdHome className='mr-4' size={24} />
            <p className='mt-0'>Inicio</p>
          </Link>

        </div>
        <div className='space-y-2'>
          <h2 className='px-4 block text-xl'>CMS</h2>
          <Link className={`${baseLinkStyle} ${ isActive('/dashboard/content') ? isActivePath : ''}`} href="/dashboard/content">
            <MdTextFields className='mr-4' size={24} />
            <p className='mt-0'>Contenido</p>
          </Link>
          <Link className={`${baseLinkStyle} ${ isActive('/dashboard/content') ? isActivePath : ''}`} href="/dashboard/blog">
            <MdTextFields className='mr-4' size={24} />
            <p className='mt-0'>Blog</p>
          </Link>
        </div>
      </div>
      <div className='px-4'>
        <Button onClick={onLogout} className='w-full'>Log Out</Button>
      </div>
    </nav>
  )
}
