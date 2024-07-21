'use client'

import { supabaseBrowserClient } from "@dentist/utils/supabase/browser-client"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import "react-quill/dist/quill.snow.css"
import '../../components/quill-editor/quill-editor-styles.css'

interface BlogDataState {
  author_id: string | null;
  content: string | null;
  created_at: string;
  description: string | null;
  id: string;
  published: boolean | null;
  slug: string | null;
  title: string | null;
  feature_image: string | null;
}

export const DashboardBlogContentPage = () => {
  const [blogData, setblogData] = useState<BlogDataState | null>(null)
  const params = useParams<{ slug: string }>()

  const onHangleDetBlogData = async (slug: string) => {
    try {
      const data = await supabaseBrowserClient()
        .from('blog')
        .select()
        .eq('slug', slug)
        .single()

        setblogData(data.data)
    } catch (e: any) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    const slug = params.slug

    if (slug) {
      onHangleDetBlogData(slug)
    }
  }, [params])

  return (
    <section className="pt-16">
      <Image
        alt={blogData?.title ?? ''}
        src={blogData?.feature_image ?? ''}
        width={1024}
        height={500}
        className="w-full h-[30rem] object-cover mb-10"
      />
      <div className="max-w-screen-md m-auto">
        <div className="mb-10">
          <h1>{blogData?.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blogData?.content ?? '' }} />
      </div>
    </section>
  )
}
