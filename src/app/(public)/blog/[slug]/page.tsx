import { blogListMapper, blogMapper } from "@dentist/types/blog-type-supabase"
import { supabaseServerClient } from "@dentist/utils/supabase/server-client"
import { DashboardBlogContentPage } from "@dentist/views/public-blog-content/dashboard-blog-content-page"


const Page = async ({ params } : { params: { slug: string } }) => {
  const data = await supabaseServerClient()
    .from('blog')
    .select('*, user(*)')
    .eq('slug', params.slug)
    .single()

  console.log(data.data)

  if (!data.error) {
    return <DashboardBlogContentPage blogData={blogMapper(data.data)} />
  }
}

export default Page