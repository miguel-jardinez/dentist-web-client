import { Button } from '@dentist/components/ui/button'
import Link from 'next/link'

export const BlogHeader = async () => {
  return (
    <>
      <div className='flex items-center justify-between h-[10%]^'>
        BlogHeader
        <Button asChild>
          <Link href="blog/escribir-blog">
            Crear blog
          </Link>
        </Button>
      </div>
    </>
  )
}
