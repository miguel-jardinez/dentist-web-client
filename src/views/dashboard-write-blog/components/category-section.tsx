import { supabaseServerClient } from '@dentist/utils/supabase/server-client'
import { CategoryForm } from './category-form'

export const CategorySection = async () => {
  const data = await supabaseServerClient().from('category').select()

  return (
    <div className='border-b border-b-slate-200'>
      <div className='p-4'>
        <p className='font-bold mb-2'>Categorias</p>
        <div className='space-y-2'>
          <CategoryForm items={data.data ?? []} />
        </div>
      </div>
    </div>
  )
}
