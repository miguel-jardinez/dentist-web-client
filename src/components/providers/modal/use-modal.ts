import { useContext, useEffect } from "react"
import { ModalContext } from "./modal-context"

export const useModal = () => {
  const { state, dispatch } = useContext(ModalContext)

  const onOpenModal = (modalComponent: React.ReactNode) => {
    dispatch({
      type: 'OPEN_ACTION_MODAL',
      payload: modalComponent
    })
  }

  const onCloseModal = () => {
    dispatch({
      type: 'CLOSE_ ACTION_MODAL',
    })
  }

  return {
    onOpenModal,
    onCloseModal,
    state
  }

}