'use server'

import { supabaseServerClient } from "@dentist/utils/supabase/server-client"

export const onSelectFeatureImage = async (url: string, blogId: string) => {
  try {
    const data = await supabaseServerClient()
      .from('blog')
      .update({ feature_image: url })
      .eq('id', blogId)

    console.log(data)
    
  } catch (e: any) {
    console.log(e.message)
  }
}