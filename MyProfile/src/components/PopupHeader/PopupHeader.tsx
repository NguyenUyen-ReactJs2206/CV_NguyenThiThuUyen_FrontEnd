import { createPortal } from 'react-dom'
import Li from '../Li'
import { useTranslation } from 'react-i18next'
import { Dispatch, SetStateAction, useState } from 'react'

type Props = {
  isPopupVisible: boolean
  setIsPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleOverlayClick: (event: any) => void
  setLoading: Dispatch<SetStateAction<boolean>>
}
export default function PopupHeader({
  isPopupVisible,
  setIsPopupVisible,
  setOpen,
  handleOverlayClick,
  setLoading
}: Props) {
  const { i18n } = useTranslation('navbar')
  const [language, setLanguage] = useState('en')

  const handleLanguageChange = (lng: 'vi' | 'en') => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    setIsPopupVisible(false)
    setOpen(false)
  }
  const closeMenu = () => {
    setIsPopupVisible(false)
    setOpen(false)
  }
  return createPortal(
    <>
      <div
        onClick={handleOverlayClick}
        className={` ${
          isPopupVisible ? 'visible opacity-100' : 'invisible opacity-0'
        } fixed inset-0 z-[9] h-[100vh] w-full bg-zinc-900/70 lg:hidden transition-all duration-700`}
      >
        <div
          className={`fixed top-0 left-0 h-[100vh] w-[300px] bg-zinc-900 transition-all duration-300
    ${isPopupVisible ? 'visible' : 'invisible translate-x-[-100%]'}  `}
        >
          <div className='flex ml-4 pl-10 w-full h-full items-center'>
            <div>
              <div className='flex'>
                <button
                  onClick={() => handleLanguageChange('vi')}
                  className={`${
                    language === 'vi' ? 'bg-blue text-white' : 'bg-white text-blue'
                  } mr-2  duration-300 transition-all rounded-md hover:text-white font-bold hover:bg-blue px-4 py-1`}
                >
                  VI
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`${
                    language === 'en' ? 'bg-slate-700 text-white' : ''
                  } ml-2 duration-300 font-bold transition-all rounded-md bg-slate-100 text-black hover:bg-slate-700 hover:text-white px-4 py-1`}
                >
                  ENG
                </button>
              </div>
              <ul className='mt-10'>
                <Li scrollTo='home' title='home' closeMenu={closeMenu} className='text-white hover:text-blue ' />
                <Li scrollTo='about' title='about' closeMenu={closeMenu} className='text-white hover:text-blue' />
                <Li
                  scrollTo='education'
                  title='education'
                  closeMenu={closeMenu}
                  className='text-white hover:text-blue'
                />
                <Li scrollTo='skill' title='skill' closeMenu={closeMenu} className='text-white hover:text-blue' />
                <Li
                  scrollTo='ability-to-work'
                  title='ability to work'
                  closeMenu={closeMenu}
                  className='text-white hover:text-blue'
                />

                <Li scrollTo='project' title='project' closeMenu={closeMenu} className='text-white hover:text-blue' />
                <Li scrollTo='contact' title='contact' closeMenu={closeMenu} className='text-white hover:text-blue' />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}
