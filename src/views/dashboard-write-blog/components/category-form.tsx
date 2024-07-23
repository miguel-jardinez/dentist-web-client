'use client'

import { Button } from "@dentist/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@dentist/components/ui/form"
import { Input } from "@dentist/components/ui/input"
import { CreateCategorySchema, CreateCategorySchemaType } from "@dentist/utils/schema/blog/blog-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { addCategoryToBlog, createNewCategory, deleteBlogCategory } from "../actions"
import { useWriteBlogReducer } from "../context/reducer/use-write-blog-reducer"
import { CheckboxCategory } from "./checkbox-category"
import { LayoutMetadataSection } from "./layout-metadata-section"

export const CategoryForm = () => {
  const { state, onChangeBlogCategory, onAddCategory } = useWriteBlogReducer()
  const [openForm, setopenForm] = useState(false)

  const form = useForm<CreateCategorySchemaType>({
    resolver: zodResolver(CreateCategorySchema),
    defaultValues: {
      category: ''
    }
  })

  const onChangeHandleCategory = async (category: { id: string, name: string }) => {
    const isInState = state.blogCategories.some(({ id }) => id === category.id)


    if (isInState) {
      await deleteBlogCategory(category.id)
      const deleteCategory = state.blogCategories.filter(({ id }) => id !== category.id)
      console.log({deleteCategory})
      onChangeBlogCategory(deleteCategory)
    } else {
      await addCategoryToBlog(category.id, state.blogId)
      const addCategory = [...state.blogCategories, category]
      onChangeBlogCategory(addCategory)
    }
    
  }

  const onSubmit = async (values: CreateCategorySchemaType) => {
    try {
      const data = await createNewCategory(values.category)
      onAddCategory({
        id: data?.id ?? '',
        name: data?.category ?? ''
      })
      form.reset()

      setopenForm(false)
    } catch(e: any) {
      console.log(e.message)
    }
  }


  return (
    <LayoutMetadataSection title="Categorías">
      {
        state.categoryList.map((item) => (
          <CheckboxCategory
            selected={state.blogCategories.some((category) => category.id === item.id)}
            onSelectCategory={({ id, label }) => onChangeHandleCategory({ id, name: label })} 
            label={item.name ?? ''} 
            id={item.id} key={item.id} 
          />
        ))
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
                  <FormLabel>Añadir nueva categoría</FormLabel>
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
