'use client'
import { LabelContentForm } from '@dentist/components/dashboard/label-content-form'
import { Button } from '@dentist/components/ui/button'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export const CreateLabelContent = () => {
  const searchParams = useSearchParams()
  const labelId = searchParams?.get('labelid')
  const width = labelId ? 'w-4/5' : 'w-full'
  
  return (
    <section className='flex h-full'>
      <div className={`h-full ${width} px-2 rounded-md`}>
        <div className='bg-white p-5'>
          <LabelContentForm />
        </div>
      </div>
      {
        labelId && (
          <div className='w-1/5 px-2'>
            <div className='bg-white p-5'>
              Side bar information
              <Button className='w-full' variant="destructive">Eliminar</Button>
            </div>
          </div>
        )
      }
    </section>
  )
}
