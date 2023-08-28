import { useState } from 'react'
import 'src/sass/index.scss'
import PopupHeader from 'src/components/PopupHeader'
import Contact from 'src/components/Contact'
import Hero from 'src/components/Hero'
import About from 'src/components/About'
import Skill from 'src/components/Skill'
import AbilityToWork from 'src/components/AbilityToWork'
import MyProject from 'src/components/MyProject'

export default function Home() {
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
      <Skill />
      <AbilityToWork />
      <MyProject />
      <Contact />

      {/* <div
        className={`fixed lg:block hidden lg:w-[25%] top-0 left-0 h-[100vh] z-[10] bg-zinc-900 text-white animation-left__side--nav`}
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
              <Li scrollTo='home' title='Home' />
              <Li scrollTo='about' title='About' />
              <Li scrollTo='skill' title='Skill' />
              <Li scrollTo='ability-to-work' title='Ability to work' />
              <Li scrollTo='project' title='My project' />
              <Li scrollTo='contact' title='Contact' />
            </ul>
          </div>
        </div>
      </div> */}
      {/* <Link
        className='fixed bottom-[10%] justify-center items-center right-2 z-[999] flex h-20 w-20'
        activeClass='active'
        to='top'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button className='flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-white/70 text-center text-black/70 hover:bg-white hover:text-black'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5' />
          </svg>
        </button>
      </Link> */}

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
      />
    </div>
  )
}
