import { z, ZodType } from "zod"

interface CreateCategorySchema {
  category: string
}

export const CreateCategorySchema: ZodType<CreateCategorySchema> = z.object({
  category: z.string().min(3)
})

export type CreateCategorySchemaType = z.infer<typeof CreateCategorySchema>