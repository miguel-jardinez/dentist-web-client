import { DashboardLayout } from '@dentist/components/dashboard'
import { supabaseServerClient } from '@dentist/utils/supabase/server-client'
import { BlogHeader, DataTableBlog } from './components'
import { blogListMapper } from '@dentist/types/blog-type-supabase'

export const BlogPage = async () => {
  const userId = (await supabaseServerClient().auth.getUser()).data.user?.id

  const data = await supabaseServerClient()
    .from('blog')
    .select('*, user(*), category_blog(category(*))', { count: 'exact' })
    .order('created_at', { ascending: true })

  return (
    <DashboardLayout>
      <BlogHeader />
      <DataTableBlog data={blogListMapper(data.data ?? [])} />
    </DashboardLayout>
  )
}
