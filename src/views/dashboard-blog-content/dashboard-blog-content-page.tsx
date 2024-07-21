'use client'

import { supabaseBrowserClient } from "@dentist/utils/supabase/browser-client"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

interface BlogDataState {
  author_id: string | null;
  content: string | null;
  created_at: string;
  description: string | null;
  id: string;
  published: boolean | null;
  slug: string | null;
  title: string | null;
}

export const DashboardBlogContentPage = () => {
  const [blogData, setblogData] = useState<BlogDataState | null>(null)
  const params = useParams<{ slug: string }>()

  const BlogContent = useMemo(
    () => dynamic(() => import("./components/blog-content"), { ssr: false }),
    []
  )

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
    <>
      <div className="max-w-screen-lg m-auto">
        <div className="mb-10">
          <h1>{blogData?.title}</h1>
        </div>
        <BlogContent content={blogData?.content ?? ''} />
      </div>
    </>
  )
}
