import { Dispatch, SetStateAction, useState } from 'react'
import 'src/sass/index.scss'
import PopupHeader from 'src/components/PopupHeader'
import Contact from 'src/pages/Home/Contact'
import Hero from 'src/pages/Home/Hero'
import About from 'src/pages/Home/About'
import Skill from 'src/pages/Home/Skill'
import AbilityToWork from 'src/pages/Home/AbilityToWork'
import MyProject from 'src/pages/Home/MyProject'
import Education from 'src/pages/Home/Education'

type Props = {
  setLoading: Dispatch<SetStateAction<boolean>>
}
export default function Home({ setLoading }: Props) {
  const [open, setOpen] = useState(false)
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  const handleShowPopup = () => {
    setOpen(true)
    setIsPopupVisible(true)
  }

  const handleHidePopup = () => {
    setOpen(false)
    setIsPopupVisible(false)
  }
  const handleOverlayClick = (event: any) => {
    if (event.target === event.currentTarget) {
      handleHidePopup()
    }
  }
  return (
    <div className='my-profile'>
      <Hero />
      <About />
      <Education />
      <Skill />
      <AbilityToWork />
      <MyProject />
      <Contact />

      {!open && (
        <button
          onClick={handleShowPopup}
          className='shadow-inner border-2 fixed top-10 lg:hidden block right-10 w-16 animation-right rounded-full h-16 bg-white z-10'
        >
          <div className='flex justify-center w-16 h-16 items-center cursor-pointer'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-10 w-10'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </div>
          </div>
        </button>
      )}
      {open && (
        <button
          onClick={handleHidePopup}
          className='shadow-inner border-2 fixed top-10 lg:hidden block right-10 w-16 animation-right rounded-full h-16 bg-white z-10'
        >
          <div className='flex justify-center w-16 h-16 items-center cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-10 w-10'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </div>
        </button>
      )}

      <PopupHeader
        isPopupVisible={isPopupVisible}
        setIsPopupVisible={setIsPopupVisible}
        setOpen={setOpen}
        handleOverlayClick={handleOverlayClick}
        setLoading={setLoading}
      />
    </div>
  )
}
