'use client'

import { Input } from "@dentist/components/ui/input"
import { useWriteBlogReducer } from "../context/reducer/use-write-blog-reducer"

export const SlugForm = () => {
  const { onChangeBlogSlug, state } = useWriteBlogReducer()

  return (
    <Input placeholder="mi-nuevo-blog" value={state.blogSlug} onChange={(e) => onChangeBlogSlug(e.target.value)} />
  )
}
