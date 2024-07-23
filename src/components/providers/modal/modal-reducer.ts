export interface InitialStateModal {
  isOpen: boolean
  componentModal: React.ReactNode | null
}

interface OpenModalAction {
  type: 'OPEN_ACTION_MODAL',
  payload: React.ReactNode
}

interface CloseOpenModal {
  type: 'CLOSE_ ACTION_MODAL'
}

export const initialStatemodal: InitialStateModal = {
  isOpen: false,
  componentModal: null
}

export type ModalReducerAction = OpenModalAction | CloseOpenModal;

export const modalReducer = (state: InitialStateModal, action: ModalReducerAction): InitialStateModal => {
  switch(action.type) {
    case "OPEN_ACTION_MODAL":
      return { ...state, isOpen: true, componentModal: action.payload }
    case "CLOSE_ ACTION_MODAL":
      return { ...state, isOpen: false, componentModal: null }
    default:
      return state
  }
}