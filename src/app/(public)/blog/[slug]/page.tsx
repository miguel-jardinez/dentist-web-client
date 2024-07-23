import { supabaseServerClient } from "@dentist/utils/supabase/server-client"
import { DashboardBlogContentPage } from "@dentist/views/public-blog-content/dashboard-blog-content-page"

const Page = async ({ params } : { params: { slug: string } }) => {
  const data = await supabaseServerClient()
        .from('blog')
        .select()
        .eq('slug', params.slug)
        .single()
  
  return <DashboardBlogContentPage blogData={data.data} />
}

export default Page