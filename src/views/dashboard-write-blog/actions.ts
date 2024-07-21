'use server'

import { supabaseServerClient } from "@dentist/utils/supabase/server-client"
import { redirect } from "next/navigation"

interface CreateBlogServerAction {
  blogTitle: string,
  blogContent: string
  blogSlug: string,
  blogDescription: string,
}

export const createBlogServerAction = async (data: CreateBlogServerAction, blogId: string | null) => {
  try {
    const { data: userData } = await supabaseServerClient().auth.getUser()

    const response = await supabaseServerClient().from('blog').upsert({
      id: blogId ?? undefined,
      content: data.blogContent, 
      title: data.blogTitle,
      author_id: userData.user?.id,
      slug: data.blogSlug,
      description: data.blogDescription,
      published: true,
    }, {
      onConflict: 'id'
    })
    console.log(response)

    return true
  } catch(e: any) {
    console.log(e.message)
    throw Error('Error')
  }
}