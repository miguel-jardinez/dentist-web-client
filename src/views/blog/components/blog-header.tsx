import { Button } from '@dentist/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const BlogHeader = () => {
  return (
    <>
      <div className='flex items-center justify-between'>
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
