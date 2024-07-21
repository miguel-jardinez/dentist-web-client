'use client'

import { Input } from "@dentist/components/ui/input";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { useWriteBlogReducer } from "../context/reducer/use-write-blog-reducer";
import { useSearchParams } from "next/navigation";
import { supabaseBrowserClient } from "@dentist/utils/supabase/browser-client";

interface ContentTextEditorState {
  author_id: string | null;
  content: string | null;
  created_at: string;
  id: string;
  published: boolean | null;
  title: string | null;
  description: string | null;
}


export const BlogTextEditor = () => {
  const [blogContent, setblogContent] = useState<ContentTextEditorState | null>()

  const { onChangeBlogTitle, state, onChangeBlogSlug, onChangeBlogDescriptionSeo, onChangeBlogContent } = useWriteBlogReducer()
  const params = useSearchParams()

  const QuillEditor = useMemo(
    () => dynamic(() => import("@dentist/components/quill-editor/quill-blog-editor"), { ssr: false }),
    []
  )

  const fetchBlogData = async (id: string) => {
    try {
      const data = await supabaseBrowserClient().from('blog').select('*').eq('id', id).single()
      setblogContent(data.data)
      onChangeBlogTitle(data.data?.title ?? '')
      onChangeBlogSlug(data.data?.slug ?? '')
      onChangeBlogDescriptionSeo(data.data?.description ?? '')
      onChangeBlogContent(data.data?.content ?? 'error')

    } catch (e: any) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    const blogId = params.get('blogId');

    if (blogId) {
      fetchBlogData(blogId)
    }
  }, [params])

  return (
    <div className="py-10 w-full max-h-full overflow-y-scroll">
      <div className="max-w-full px-10">
      <Input
          className="border-0 mb-5 bg-transparent h-full text-5xl outline-none font-light focus-visible:ring-0 focus-visible:outline-none"
          placeholder="Titulo del blog"
          onChange={(e) => onChangeBlogTitle(e.target.value)}
          value={state.blogTitle}
        />
        <QuillEditor value={state.blogContent ?? ''} />
      </div>
    </div>
  );
}
