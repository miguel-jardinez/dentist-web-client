'use server'

import { RequestState, RequestStateEnum } from '@dentist/utils/response-state'
import { LoginSchemaType, RegisterSchemaType } from '@dentist/utils/schema/auth/auth-schema'
import { supabaseServerClient } from '@dentist/utils/supabase/server-client'
import { AuthResponse, AuthTokenResponse, Session } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'


export const loginServerAction = async (data: LoginSchemaType): Promise<RequestState<Session>> => {
  try {
    const response = await supabaseServerClient()
    .auth
    .signInWithPassword({ 
      email: data.email, 
      password: data.password,
    })

    console.log(response)

    if (response.error) {
      return {
        type: RequestStateEnum.ERROR,
        message: response.error.message
      }
    }

    
    return {
      type: RequestStateEnum.SUCCESS,
      data: response.data.session
    }
  } catch(e: any) {
    console.log(e.message)

    return {
      type: RequestStateEnum.ERROR,
      message: e.message
    }
  }
}

export const registerServerAction = async (data: RegisterSchemaType): Promise<RequestState<Session | null>> => {
  try {
    const response = await supabaseServerClient().auth.signUp({ email: data.email, password: data.password, options: { data: { role: 'ADMINISTRATOR' } } })

    console.log(response)

    if (response.error) {
      return {
        type: RequestStateEnum.ERROR,
        message: ''
      }
    }

    return {
      type: RequestStateEnum.SUCCESS,
      data: response.data.session
    }
  } catch(e: any) {
    console.log(e.message)
    return {
      type: RequestStateEnum.ERROR,
      message: ''
    }
  }
}

export const logOutServerAction = async (): Promise<RequestState<boolean>> => {
  try {
    const data = await supabaseServerClient()
    .auth
    .signOut()

    if (data.error) {
      return {
        type: RequestStateEnum.ERROR,
        message: data.error.message
      }
    }
  
    return {
      type: RequestStateEnum.SUCCESS,
      data: true
    }
  } catch (e: any) {
    console.log(e.message)

    return {
      type: RequestStateEnum.ERROR,
      message: e.message
    }
  }
}