'use client'

import { CreateLabelSchema, CreateLabelSchemaType } from "@dentist/utils/schema/dashboard/dashboard-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export const LabelContentForm = () => {
  const searchParams = useSearchParams()
  const labelId = searchParams?.get('labelid')

  const params = useParams()
  const router = useRouter()

  const form = useForm<CreateLabelSchemaType>({
    resolver: zodResolver(CreateLabelSchema),
    defaultValues: {
      label: '',
      label_id: '',
      page_id: params?.id as string ?? ""
    }
  })

  const onHandleSubmit = async (data: CreateLabelSchemaType) => {
    // await createLabelServerAction(data)

    form.reset()
    router.back()
  }

  const fillLabelData = async (labelId: string) => {
    // const data = await getLabelById(labelId ?? "")

    // form.reset({
    //   label: data?.data.label,
    //   label_id: data?.data.label_id,
    //   page_id: data?.data.page_id
    // })
  }

  useEffect(() => {

    if (labelId) {
      fillLabelData(labelId)
    }
  }, [labelId])

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onHandleSubmit)}>
        <FormField 
          control={form.control}
          name="label_id"
          render={({field}) => (
            <FormItem>
              <FormLabel>Label id</FormLabel>
              <Input placeholder="Label Id" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField 
          control={form.control}
          name="label"
          render={({field}) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <Input placeholder="Label" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Crear label</Button>
      </form>
    </Form>
  )
}
