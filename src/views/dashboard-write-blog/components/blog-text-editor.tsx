'use client'

import { Input } from "@dentist/components/ui/input";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { useWriteBlogReducer } from "../context/reducer/use-write-blog-reducer";
import { useParams, useSearchParams } from "next/navigation";
import { supabaseBrowserClient } from "@dentist/utils/supabase/browser-client";

interface ContentTextEditorState {
  author_id: string | null;
  content: string | null;
  created_at: string;
  id: string;
  published: boolean | null;
  title: string | null;
}


export const BlogTextEditor = () => {
  const [blogContent, setblogContent] = useState<ContentTextEditorState | null>()

  const { onChangeBlogTitle, state, onChangeBlogSlug, onChangeBlogDescriptionSeo } = useWriteBlogReducer()
  const params = useSearchParams()
  const BlockNoteEditor = useMemo(
    () => dynamic(() => import("./blocknote-editor"), { ssr: false }),
    []
  )

  const fetchBlogData = async (id: string) => {
    try {
      const data = await supabaseBrowserClient().from('blog').select('*').eq('id', id).single()
      setblogContent(data.data)
      onChangeBlogTitle(data.data?.title ?? '')
      onChangeBlogSlug(data.data?.slug ?? '')
      onChangeBlogDescriptionSeo(data.data?.description ?? '')

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
      <div className="mb-3 px-20 ">
        <Input
          className="border-0 bg-transparent h-full text-5xl outline-none font-light focus-visible:ring-0 focus-visible:outline-none"
          placeholder="Titulo del blog"
          onChange={(e) => onChangeBlogTitle(e.target.value)}
          value={state.blogTitle}
        />
      </div>
      <div className="max-w-full px-10">
        <BlockNoteEditor content={blogContent?.content} />
      </div>
    </div>
  );
}
