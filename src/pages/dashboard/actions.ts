'use server'

import { CreatePageSchemaType } from "@dentist/utils/schema/dashboard/dashboard-schema";
import { supabaseServerClient } from "@dentist/utils/supabase/server-client"

export const getPagesServerAction = async () => {
  try {
    const data = await supabaseServerClient().from('page').select()
    return data;
  } catch (e: any) {
    console.log(e.message)
  }
}

export const createPageServerAction = async (data: CreatePageSchemaType) => {
  try {
    const dataPage = await supabaseServerClient().from('page').insert({ page_id: data.page_id })
    console.log(dataPage)
    return dataPage;
  } catch(e: any) {
    console.log(e)
  }
}

export const getPageByIdServerAction = async (id: string) => {
  try {
    const data = await supabaseServerClient()
    .from('page')
    .select('*, label(*)')
    .eq('id', id)
    .single()

    return data;
  } catch(e: any) {
    console.log(e.message)
  }
}

export const createLabelServerAction = async (data: CreatePageSchemaType) => {
  try {
    const response = await supabaseServerClient()
      .from('label')
      .upsert(data, { onConflict: 'label_id' })
      .select()

    return response;
  } catch (e: any) {
    console.log(e.message)
  }
}

export const getLabelsByPageId = async (id: string) => {
  try {
    const response = await supabaseServerClient()
    .from('label')
    .select('*')
    .eq('page_id', id)

    return response;
  } catch (e: any) {
    console.log(e.message)
  }
}

export const getLabelById = async (id: string) => {
  try {
    const data = await supabaseServerClient()
    .from('label')
    .select('*')
    .eq('id', id)
    .single()

    return data
  } catch (e: any) {
    console.log(e.message)
  }
}