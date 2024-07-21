'use client'

import { Input } from "@dentist/components/ui/input"
import { useWriteBlogReducer } from "../context/reducer/use-write-blog-reducer"
import { LayoutMetadataSection } from "./layout-metadata-section"

export const SlugForm = () => {
  const { onChangeBlogSlug, state } = useWriteBlogReducer()

  return (
    <LayoutMetadataSection title="Slug">
      <Input placeholder="mi-nuevo-blog" value={state.blogSlug} onChange={(e) => onChangeBlogSlug(e.target.value)} />
    </LayoutMetadataSection>
  )
}
