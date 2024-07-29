'use client'

import { Input } from "@dentist/components/ui/input";
import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";
import { useWriteBlogReducer } from "../context/reducer/use-write-blog-reducer";

interface BlogTextEditorProps {
  blogData: {
    title?: string | null
    content?: string | null
    image?: string | null
    descriptionSeo?: string | null
    slug?: string | null
    categories?: Array<{ id: string, name: string }>
    categoryList?: Array<{ category: string | null; created_at: string; id: string; }> | null
    blogId?: string
  }
}

export const BlogTextEditor = ({ blogData }: BlogTextEditorProps) => {
  const QuillEditor = useMemo(
    () => dynamic(() => import("@dentist/components/quill-editor/quill-blog-editor"), { ssr: false }),
    []
  )

  const {
    state,
    onChangeBlogTitle,
    onFillDataBlog
  } = useWriteBlogReducer()

  useEffect(() => {
    if (blogData) {
      onFillDataBlog({
        blogCategories: blogData.categories ?? [],
        blogContent: blogData.content ?? '',
        blogDescriptionSeo: blogData.descriptionSeo ?? '',
        blogFeatureImage: blogData.image ?? '',
        blogSlug: blogData.slug ?? '',
        blogTitle: blogData.title ?? '',
        categoryList: blogData.categoryList?.map((item) => ({ id: item.id ?? '', name: item.category ?? '' })) ?? [],
        blogId: blogData.blogId ?? ''
      })
    }
  }, [blogData, onFillDataBlog])

  return (
    <div className="py-10 w-full max-h-full overflow-y-scroll">
      <div className="max-w-full h-full px-10">
        <Input
          className="border-0 mb-5 bg-transparent h-[10%] text-5xl outline-none font-light focus-visible:ring-0 focus-visible:outline-none"
          placeholder="Titulo del blog"
          onChange={(e) => onChangeBlogTitle(e.target.value)}
          value={state.blogTitle}
        />
        <QuillEditor value={state.blogContent ?? ''} />
      </div>
    </div>
  );
}
