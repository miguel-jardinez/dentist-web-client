import { z, ZodType } from 'zod'

interface LoginForm {
  email: string;
  password: string;
}

interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string,
}

export const LoginSchema: ZodType<LoginForm> = z.object({
  email: z.string().email(),
  password: z.string()
});

export type LoginSchemaType = z.infer<typeof LoginSchema>

export const RegisterSchema: ZodType<RegisterForm> = z.object({
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ['confirmPassword']
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>