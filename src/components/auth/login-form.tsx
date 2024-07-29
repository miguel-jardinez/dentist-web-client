'use client'

import { LoginSchema, LoginSchemaType } from '@dentist/utils/schema/auth/auth-schema'
import { loginServerAction } from '@dentist/views/auth/actions'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { RequestStateEnum } from '@dentist/utils/response-state'
import { jwtDecode } from 'jwt-decode'
import { UserRole } from '@dentist/utils/supabase/supabase-middleware'


export const LoginForm = () => {
  const router = useRouter()
  const path = useSearchParams()

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (values: LoginSchemaType) => {
    try {
      const response = await loginServerAction(values)

      switch(response.type) {
        case RequestStateEnum.SUCCESS: {
          const user : UserRole = jwtDecode(response.data.access_token ?? '')
          
          if (user.user_role === "ADMINISTRATOR") {
            router.push('/dashboard')
          } else {
            router.push('/blog')
          }
        }
        case RequestStateEnum.ERROR: {

        }
        case RequestStateEnum.LOADING: {

        }
      }
    } catch(e: any) {

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
                <Input type="password" placeholder="Contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type='submit'>Login</Button>
      </form>
    </Form>
  )
}
