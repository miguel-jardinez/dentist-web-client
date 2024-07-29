'use server'

import { supabaseServerClient } from "@dentist/utils/supabase/server-client"

interface CreateBlogServerAction {
  blogTitle: string,
  blogContent: string
  blogSlug: string,
  blogDescription: string,
  blogFeatureImage: string,
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
      feature_image: data.blogFeatureImage,
      is_published: true,
    }, {
      onConflict: 'id'
    }).select().single()

    console.log({response})
    return response
  } catch(e: any) {
    console.log(e.message)
    throw Error('Error')
  }
}

export const createNewCategory = async (category: string) => {
  try {
    const response = await supabaseServerClient().from('category').insert({
      category
    }).select('id, category').single()

    return response.data
  } catch(e: any) {
    console.log(e.message)
    throw Error('Error')
  }
}

export const deleteBlogCategory = async (categoryid: string) => {
  try {
    const response = await supabaseServerClient().from('category_blog').delete()
    .eq('category_id', categoryid).select('id, category(category)').single()

    return response.data
  } catch(e: any) {
    console.log(e.message)
    throw Error('Error')
  }
}

export const addCategoryToBlog = async (categoryid: string, blogId: string) => {
  try {
    const response = await supabaseServerClient().from('category_blog').insert({ category_id: categoryid, blog_id: blogId }).select('id, category(category)').single()
    console.log(categoryid, blogId, response)

    return response.data
  } catch(e: any) {
    console.log(e.message)
    throw Error('Error')
  }
}