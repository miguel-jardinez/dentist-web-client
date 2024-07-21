import React from 'react'
import { BlogHeader, DataTableBlog } from './components'
import { DashboardLayout } from '@dentist/components/dashboard'
import { supabaseServerClient } from '@dentist/utils/supabase/server-client'

export const BlogPage = async () => {
  const data = await supabaseServerClient()
    .from('blog')
    .select('*, profile(*)')
    .order('created_at', { ascending: true })

  return (
    <DashboardLayout>
      <BlogHeader />
      <DataTableBlog data={data.data ?? []} />
    </DashboardLayout>
  )
}
