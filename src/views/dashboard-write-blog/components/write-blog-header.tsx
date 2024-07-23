'use client'

import { Button } from "@dentist/components/ui/button"
import { useWriteBlogReducer } from "../context/reducer/use-write-blog-reducer"
import { createBlogServerAction } from "../actions"
import { useRouter, useSearchParams } from "next/navigation"

export const WriteBlogHeader = () => {
  const params = useSearchParams()
  const router = useRouter()
  const { state } = useWriteBlogReducer()

  const onPublishBlog = async () => {
    const blogId = params.get('blogId')

    try {
      await createBlogServerAction({ 
        blogContent: state.blogContent, 
        blogTitle: state.blogTitle,
        blogSlug: state.blogSlug,
        blogDescription: state.blogDescriptionSeo,
        blogFeatureImage: state.blogFeatureImage
      }, blogId)
      
      router.push('/dashboard/blog')
    } catch (e: any) {
      console.log(e)
    }

  }

  return (
    <div className="flex justify-end items-center h-[10%] px-8 space-x-3 border border-b-slate-200">
      <Button variant="secondary">Guardar en borrador</Button>
      <Button onClick={onPublishBlog}>Publicar</Button>
    </div>
  )
}
