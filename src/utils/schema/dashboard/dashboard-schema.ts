import { ZodType, z } from "zod";

interface CreatePageSchema {
  page_id: string;
  page_name: string;
}

interface CreateLabelSchema {
  label_id: string;
  label: string;
  page_id: string;
}

export const CreateLabelSchema: ZodType<CreateLabelSchema> = z.object({
  label_id: z.string().min(3),
  label: z.string().min(3),
  page_id: z.string().min(3)
})

export type CreateLabelSchemaType = z.infer<typeof CreateLabelSchema>

export const CreatePageSchema: ZodType<CreatePageSchema> = z.object({
  page_id: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  page_name: z.string().min(3)
});

export type CreatePageSchemaType = z.infer<typeof CreatePageSchema>;