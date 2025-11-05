'use server'
import { RequestState, RequestStateEnum } from "@dentist/utils/response-state"
import { supabaseServerClient } from "@dentist/utils/supabase/server-client"
import { revalidatePath } from "next/cache"

export const createDraftBlogAction = async (): Promise<RequestState<string>> => {
  try {
    const supabase = supabaseServerClient()
    const user = await supabase.auth.getUser()

    const data = await supabase.from('blog').insert({
      author_id: user.data.user?.id
    }).select('id').single()

    console.log(data)

    if (data.error) {
      return {
        type: RequestStateEnum.ERROR,
        message: data.error.message
      }
    }

    return {
      type: RequestStateEnum.SUCCESS,
      data: data.data.id ?? ''
    }

  } catch(e: any) {
    console.log(e.message)
    return {
      type: RequestStateEnum.ERROR,
      message: e.message
    }
  }
}

export const deleteBlog = async (blogId: string): Promise<RequestState<boolean>> => {
  try {

    const data = await supabaseServerClient().from('blog').delete().eq('id', blogId)

    console.log(data)

    if (data.error) {
      return {
        type: RequestStateEnum.ERROR,
        message: data.error.message
      }
    }

    revalidatePath('/dashboard/blog')

    return {
      type: RequestStateEnum.SUCCESS,
      data: true
    }

  } catch(e: any) {
    console.log(e.message)
    return {
      type: RequestStateEnum.ERROR,
      message: e.message
    }
  }
}