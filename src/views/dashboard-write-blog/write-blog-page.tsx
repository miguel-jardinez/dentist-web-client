import { supabaseServerClient } from "@dentist/utils/supabase/server-client"
import { BlogTextEditor } from "./components/blog-text-editor"
import { SettingsBlogEditor } from "./components/settings-blog-editor"
import { WriteBlogHeader } from "./components/write-blog-header"

interface WriteBlogPageProps {
  blogId?: string
}

export const WriteBlogPage = async ({ blogId } : WriteBlogPageProps) => {
  const data = blogId ? await supabaseServerClient()
  .from('blog')
  .select('*, blog_category(category(*))')
  .eq('id', blogId)
  .single() : null
  const categoryData = await supabaseServerClient().from('category').select()

  const categories = data?.data?.blog_category.map(({ category }) => ({id: category?.id ?? '', name: category?.category ?? ''}))

  return (
    <>
      <WriteBlogHeader />
      <div className="bg-white h-[90%] flex">
        <BlogTextEditor blogData={{
          blogId: blogId,
          categories: categories ?? [],
          content: data?.data?.content,
          descriptionSeo: data?.data?.description,
          image: data?.data?.feature_image,
          slug: data?.data?.slug,
          title: data?.data?.title,
          categoryList: categoryData.data ?? []
        }} />
        <SettingsBlogEditor />
      </div>
    </>
  )
}
