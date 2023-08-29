import { createPortal } from 'react-dom'
import Li from '../Li'

type Props = {
  isPopupVisible: boolean
  setIsPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleOverlayClick: (event: any) => void
}
export default function PopupHeader({ isPopupVisible, setIsPopupVisible, setOpen, handleOverlayClick }: Props) {
  const closeMenu = () => {
    setIsPopupVisible(false)
    setOpen(false)
  }
  return createPortal(
    <>
      <div
        onClick={handleOverlayClick}
        className={` ${isPopupVisible ? 'visible' : 'invisible'} 
   fixed inset-0 z-[9] h-[100vh] w-full bg-zinc-900/30 lg:hidden
   `}
      >
        <div
          className={`fixed top-0 left-0 h-[100vh] w-[300px] bg-zinc-900 transition-all duration-300
    ${isPopupVisible ? 'visible' : 'invisible translate-x-[-100%]'}  `}
        >
          <div className='flex ml-4 pl-10 w-full h-full items-center'>
            <div>
              <div className='flex'>
                <button className='mr-2 bg-white font-bold text-blue duration-300 transition-all rounded-md hover:text-white hover:bg-blue px-4 py-1'>
                  VI
                </button>
                <button className='ml-2 duration-300 font-bold transition-all rounded-md bg-slate-100 text-black hover:bg-slate-700 hover:text-white px-4 py-1'>
                  ENG
                </button>
              </div>
              <ul className='mt-10'>
                <Li scrollTo='home' title='Home' closeMenu={closeMenu} className='text-white hover:text-blue ' />
                <Li scrollTo='about' title='About' closeMenu={closeMenu} className='text-white hover:text-blue' />
                <Li scrollTo='skill' title='Skill' closeMenu={closeMenu} className='text-white hover:text-blue' />
                <Li
                  scrollTo='ability-to-work'
                  title='Ability to work'
                  closeMenu={closeMenu}
                  className='text-white hover:text-blue'
                />
                <Li
                  scrollTo='project'
                  title='My project'
                  closeMenu={closeMenu}
                  className='text-white hover:text-blue'
                />
                <Li scrollTo='contact' title='Contact' closeMenu={closeMenu} className='text-white hover:text-blue' />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}
