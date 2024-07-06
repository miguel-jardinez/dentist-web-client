'use client'

import { Button } from '@dentist/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@dentist/components/ui/form'
import { Input } from '@dentist/components/ui/input'
import { CreatePageSchema, CreatePageSchemaType } from '@dentist/utils/schema/dashboard/dashboard-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createPageServerAction } from './actions'
import { useRouter } from 'next/navigation'

export const CreatePageContent = () => {
  const router = useRouter()

  const form = useForm<CreatePageSchemaType>({
    resolver: zodResolver(CreatePageSchema),
    defaultValues: {
      page_id: '',
      page_name: ''
    }
  });

  const onSubmit = async (values: CreatePageSchemaType) => {
    await createPageServerAction(values)
    form.reset()
    router.back()
  }

  return (
    <section className='h-full'>
      <div className='p-5'>
        <div className='p-5 bg-white rounded-lg shadow-sm h-full'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField 
                control={form.control}
                name="page_id"
                render={({ field }) => (
                  <FormItem className='mb-3'>
                    <FormLabel>ID de la página</FormLabel>
                    <FormControl>
                      <Input placeholder="ID de la página" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField 
                control={form.control}
                name="page_name"
                render={({ field }) => (
                  <FormItem className='mb-3'>
                    <FormLabel>Nombre de la página</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre de la página" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className='w-full'>Crear página</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
