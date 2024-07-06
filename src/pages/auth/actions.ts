'use server'
import { LoginSchemaType, RegisterSchemaType } from '@dentist/utils/schema/auth/auth-schema'
import { supabaseServerClient } from '@dentist/utils/supabase/server-client'


export const loginServerAction = async (data: LoginSchemaType) => {
  try {
    const response = await supabaseServerClient().auth.signInWithPassword({ email: data.email, password: data.password })
    console.log(response.data);
  } catch(e: any) {
    console.log(e.message)
  }
}

export const registerServerAction = async (data: RegisterSchemaType) => {
  try {
    const response = await supabaseServerClient().auth.signUp({ email: data.email, password: data.password, options: { data: { role: 'ADMINISTRATOR' } } })
    console.log(response);
  } catch(e: any) {
    console.log(e.message)
  }
}

export const logOutServerAction = async () => {
  try {
    const data = await supabaseServerClient()
    .auth
    .signOut()

  
    return data;
  } catch (e: any) {
    console.log(e.message)
  }
}