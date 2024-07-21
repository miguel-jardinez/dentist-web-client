import React from 'react'
import { SlugForm } from './slug-form'

export const SlugSection = () => {
  return (
    <div className='border-b border-b-slate-200'>
      <div className='p-4'>
        <p className='font-bold mb-2'>Slug</p>
        <div className='space-y-2'>
          <SlugForm />
        </div>
      </div>
    </div>
  )
}
