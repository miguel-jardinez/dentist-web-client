import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='w-full h-full flex justify-center items-center'>
      <div className='bg-white w-1/3 p-10 rounded-lg shadow-lg'>
        {children}
      </div>
    </main>
  )
}

export default AuthLayout