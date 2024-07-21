'use client'

import { Textarea } from "@dentist/components/ui/textarea"
import { useWriteBlogReducer } from "../context/reducer/use-write-blog-reducer"
import { LayoutMetadataSection } from "./layout-metadata-section"

export const DescriptionSeoForm = () => {
  const { state, onChangeBlogDescriptionSeo } = useWriteBlogReducer()

  const onChangeContentSeo = (content: string) =>{
    onChangeBlogDescriptionSeo(content)
  }

  return (
    <LayoutMetadataSection title="Descripción SEO">
      <Textarea
        className="max-h-36 h-36"
        onChange={(e) => onChangeContentSeo(e.target.value)}
        value={state.blogDescriptionSeo} 
        maxLength={250}
        placeholder="una descripcion detallada acerca de tu blog para mejorar el seo y el posicionamiento..." 
      />
      <small className="text-slate-400 font-normal">máximo 250 caracteres</small>
    </LayoutMetadataSection>
  )
}
