import { createContext } from "react";
import { initialStatemodal, InitialStateModal, ModalReducerAction } from "./modal-reducer";

interface InitialStateModalContext {
  state: InitialStateModal,
  dispatch: React.Dispatch<ModalReducerAction>
}

export const ModalContext = createContext<InitialStateModalContext>({
  state: initialStatemodal,
  dispatch: () => null
})