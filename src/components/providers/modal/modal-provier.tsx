'use client'

import React, { useReducer } from 'react'
import { ModalContext } from './modal-context'
import { initialStatemodal, modalReducer } from './modal-reducer'
import { ModalContainer } from './modal-container'

export const ModalProvier = ({ children } : { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(modalReducer, initialStatemodal)

  return (
    <ModalContext.Provider
      value={{ state, dispatch }}
    >
      <ModalContainer />
      {children}
    </ModalContext.Provider>
  )
}
