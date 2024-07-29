'use client'

import { RegisterSchema, RegisterSchemaType } from '@dentist/utils/schema/auth/auth-schema'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { registerServerAction } from '@dentist/views/auth/actions'
import { jwtDecode } from 'jwt-decode'
import { RequestStateEnum } from '@dentist/utils/response-state'


export const RegisterForm = () => {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = async (values: RegisterSchemaType) => {
    try {
      const data = await registerServerAction(values)

      switch(data.type) {
        case RequestStateEnum.SUCCESS: {
          const user = jwtDecode(data.data?.access_token ?? '')

          console.log(user);

        }
        case RequestStateEnum.ERROR: {

        }
        case RequestStateEnum.LOADING: {

        }
      }

    } catch(e: any) {
      console.log(e.message)
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input placeholder="Correo electrónico" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input placeholder="Contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input placeholder="Confirma contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type='submit'>Register</Button>
      </form>
    </Form>
  )
}
