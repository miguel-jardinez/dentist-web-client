import React from "react"

interface LayoutMetadataSectionProps {
  children: React.ReactNode
  title: string
}

export const LayoutMetadataSection = ({ children, title } : LayoutMetadataSectionProps) => {
  return (
    <div className='border-b border-b-slate-200'>
      <div className='p-4'>
        <p className='font-bold mb-2'>{title}</p>
        <div className='space-y-2'>
          {children}
        </div>
      </div>
    </div>
  )
}
