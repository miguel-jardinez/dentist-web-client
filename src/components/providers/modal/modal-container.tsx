import { useModal } from './use-modal'

export const ModalContainer = () => {
  const { onCloseModal, state } = useModal()

  return (
    <>
      {
        state.isOpen && (
          <>
            <div className='absolute inset-0 z-10 flex justify-center items-center'>
              <div onClick={onCloseModal} className='bg-black/50 z-[11] w-full h-full absolute inset-0'/>

              <div className="absolute z-[12] w-[90%] h-[90%] bg-white rounded-md shadow-lg m-auto bg-w p-5">
                {state.componentModal}
              </div>
            </div>
          </>
        )
      }
    </>
  )
}
