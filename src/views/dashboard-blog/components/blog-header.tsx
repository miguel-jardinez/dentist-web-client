'use client'

import { Button } from '@dentist/components/ui/button'
import { RequestStateEnum } from '@dentist/utils/response-state'
import { useRouter } from 'next/navigation'
import { createDraftBlogAction } from '../actions'

export const BlogHeader = () => {
  const router = useRouter()

  const handleCreateBlog = async () => {
    try {
      const data = await createDraftBlogAction()
      switch(data.type) {
        case RequestStateEnum.SUCCESS: {
          router.push(`blog/escribir-blog?blogId=${data.data}`)
        }
        case RequestStateEnum.ERROR: {

        }
        case RequestStateEnum.LOADING: {

        }
      }

    } catch (e: any) {
      console.log(e.message)
    }
  }

  return (
    <>
      <div className='flex items-center justify-between h-[10%]'>
        BlogHeader
      </div>
    </>
  )
}
