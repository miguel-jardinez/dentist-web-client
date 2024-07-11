import { Button } from '@dentist/components/ui/button'
import { Input } from '@dentist/components/ui/input'
import Link from 'next/link'

import { FaSearch } from 'react-icons/fa'

export const ContentPage = async () => {
  // const data = await getPagesServerAction()


  return (
    <section>
      <div className='flex items-center justify-between space-x-10'>
        <div className='flex flex-1 items-center bg-background pl-4 p-2 rounded-lg'>
          <FaSearch className='' />
          <Input className='outline-none border-none focus-visible:ring-0' placeholder='buscar pagina' />
        </div>
        <Link href="/dashboard/content/create-page-content">
          <Button>
            Añadir página
          </Button>
        </Link>
      </div>

      {/* <div className='block'>
        {data?.data?.map((item) => {
          return (
            <>
              <Link className='block' href={`/dashboard/content/page/${item.id}`}>{item.page_id}</Link>
            </>
          )
        })}
      </div> */}
    </section>
  )
}
