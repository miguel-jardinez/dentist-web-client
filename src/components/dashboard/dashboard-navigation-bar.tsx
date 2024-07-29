'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdHome, MdTextFields } from 'react-icons/md'
import { IoImages } from "react-icons/io5";
import { IconType } from 'react-icons';
import { HiPencilAlt } from "react-icons/hi";


const ItemNavigationBar = ({ Icon, href, label }: { Icon: IconType, label: string, href: string  }): React.ReactNode => {
  return (
    <Link href={href} className='flex items-center px-4 h-8'>
      <Icon className='mr-2' size={16} />
      <p className='mt-0'>{label}</p>
    </Link>
  )
}


export const DashboardNavigationBar = () => {
    const pathName = usePathname()
    if (pathName.endsWith('/blog/escribir-blog')) return


    return (
    <nav 
      className='h-full w-3/12 bg-blue-300 pt-5 flex flex-col justify-between py-5'
    >
      <div className='space-y-10'>
        <div>
          <Link href="/dashboard">
            <MdHome className='mr-4' size={24} />
            <p className='mt-0'>Inicio</p>
          </Link>

        </div>
        <div className='space-y'>
          <h2 className='px-4 block text-lg'>Contenido</h2>
          <ItemNavigationBar 
            Icon={MdTextFields}
            label='Contenido'
            href='/dashboard/content'
          />
          <ItemNavigationBar 
            Icon={HiPencilAlt}
            label='Blog'
            href='/dashboard/blog'
          />
          <ItemNavigationBar 
            Icon={IoImages}
            label='Medios'
            href='/dashboard/medios'
          />
        </div>
      </div>
    </nav>
  )
}
