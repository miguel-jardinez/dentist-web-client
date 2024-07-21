'use client'

import { useState } from "react"
import { CheckboxCategory } from "./checkbox-category"
import { useForm } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from "@dentist/components/ui/form"
import { Input } from "@dentist/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateCategorySchema, CreateCategorySchemaType } from "@dentist/utils/schema/blog/blog-schema"
import { Button } from "@dentist/components/ui/button"
import { LayoutMetadataSection } from "./layout-metadata-section"

interface CategoryFormProps {
  items: Array<{ category: string | null, id: string, created_at: string }>
}

export const CategoryForm = ({ items }: CategoryFormProps) => {
  const [openForm, setopenForm] = useState(false)

  const form = useForm<CreateCategorySchemaType>({
    resolver: zodResolver(CreateCategorySchema),
    defaultValues: {
      category: ''
    }
  })

  const onSubmit = async (values: CreateCategorySchemaType) => {
    console.log(values)
  }


  return (
    <LayoutMetadataSection title="Categorías">
      {
        items.map((item) => <CheckboxCategory label={item.category ?? ''} id={item.id} key={item.id} />)
      }
      <p
        onClick={() => setopenForm(!openForm)}
        className="text-primary underline cursor-pointer"
      >
        Añadir nueva categoría
      </p>

      {
        openForm && (<Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full mt-4" variant="secondary">Añadir categoría</Button>
          </form>
        </Form>)
      }


    </LayoutMetadataSection>
  )
}
