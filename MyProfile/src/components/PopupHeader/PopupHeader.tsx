import { createPortal } from 'react-dom'

type Props = {
  isPopupVisible: boolean
  setIsPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
  handleOverlayClick: (event: any) => void
}
export default function PopupHeader({ isPopupVisible, setIsPopupVisible, handleOverlayClick }: Props) {
  return createPortal(
    <>
      <div
        onClick={handleOverlayClick}
        className={` ${isPopupVisible ? 'visible' : 'invisible'} 
   fixed inset-0 z-[9] h-[100vh] w-full bg-zinc-900/30
   `}
      >
        <div
          className={`fixed top-0 left-0 h-[100vh] w-[300px] bg-zinc-900 transition-all duration-300
    ${isPopupVisible ? 'visible' : 'invisible translate-x-[-100%]'}  `}
        ></div>
      </div>
    </>,
    document.body
  )
}
