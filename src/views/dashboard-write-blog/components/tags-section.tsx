import React from 'react'
import { TagForm } from './tag-form'

export const TagSection = () => {
  return (
    <div className='border-b border-b-slate-200'>
      <div className='p-4'>
        <p className='font-bold mb-2'>Etiquetas</p>
        <div className='space-y-2'>
          <TagForm />
        </div>
      </div>
    </div>
  )
}
