import { DescriptionSeoForm } from './description-seo-form'

export const DescriptionSeoSection = () => {
  return (
    <div className='border-b border-b-slate-200'>
      <div className='p-4'>
        <p className='font-bold mb-2'>Descripción SEO</p>
        <div className='space-y-2'>
          <DescriptionSeoForm />
        </div>
      </div>
    </div>
  )
}
