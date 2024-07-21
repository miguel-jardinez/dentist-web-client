'use client'
import React, { useReducer, useState } from 'react'
import { WriteBlogContext } from './write-blog-context'
import { writeBlogReducer, initialState, InitialState, ReducerAction } from './reducer/write-blog-reducer'

export const WriteBlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<React.Reducer<InitialState, ReducerAction>>(writeBlogReducer, initialState)

  return (
    <WriteBlogContext.Provider value={{ 
      state,
      dispatch
    }}>
      {children}
    </WriteBlogContext.Provider>
  )
}
