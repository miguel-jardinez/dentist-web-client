import { supabaseServerClient } from "@dentist/utils/supabase/server-client"
import { CategoryForm } from "./category-form"
import { DescriptionSeoForm } from "./description-seo-form"
import { SlugForm } from "./slug-form"
import { FeatureImageBlog } from "./feature-image-blog"

export const SettingsBlogEditor = async () => {
  const data = await supabaseServerClient().from('category').select()

  return (
    <div className="w-1/3 border-l border-l-slate-200 overflow-scroll">
      <FeatureImageBlog />
      <CategoryForm items={data.data ?? []} />
      <SlugForm />
      <DescriptionSeoForm />
    </div>
  )
}
