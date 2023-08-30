import { useState } from 'react'
import Li from '../Li'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

export default function NavHeader() {
  const { i18n, t } = useTranslation('navbar')

  const handleLanguageChange = (lng: 'vi' | 'en') => {
    i18n.changeLanguage(lng)
  }
  return (
    <div className='lg:block hidden bg-blue fixed w-full z-20'>
      <div className='animation-bottom__navbar bg-white py-4'>
        <ul className='flex justify-end mr-10 flex-shrink-0'>
          {/* <Li
            scrollTo='home'
            title='Home'
            className='px-4 uppercase py-2 text-sm hover:underline-effect underline-effect duration-1000 hover:text-blue  '
          /> */}
          <li className='uppercase px-4 py-2 text-sm hover:underline-effect underline-effect duration-1000 hover:text-blue  '>
            <Link className='py-1 cursor-pointer' to='home' spy={true} smooth={true} duration={1000} offset={-20}>
              {t('home')}
            </Link>
          </li>
          <Li
            scrollTo='about'
            title='About'
            className='px-4 py-2 uppercase text-sm hover:underline-effect underline-effect duration-1000 hover:text-blue  '
          />
          <Li
            scrollTo='skill'
            title='Skill'
            className='px-4 py-2 uppercase text-sm hover:underline-effect underline-effect duration-1000 hover:text-blue  '
          />
          <Li
            scrollTo='ability-to-work'
            title='Ability to work'
            className='px-4 py-2 uppercase text-sm hover:underline-effect underline-effect duration-1000 hover:text-blue  '
          />
          <Li
            scrollTo='project'
            title='My project'
            className='px-4 py-2 uppercase text-sm hover:underline-effect underline-effect duration-1000 hover:text-blue  '
          />
          <Li
            scrollTo='contact'
            title='Contact'
            className='px-4 py-2 uppercase text-sm hover:underline-effect underline-effect duration-1000 hover:text-blue'
          />

          <button
            onClick={() => handleLanguageChange('vi')}
            className='ml-8 p-2 uppercase text-sm cursor-pointer border-r-2 border-r-blue/40 hover:text-blue'
          >
            VI
          </button>

          <button
            onClick={() => handleLanguageChange('en')}
            className=' p-2 uppercase text-sm cursor-pointer hover:text-blue'
          >
            EN
          </button>
        </ul>
      </div>
    </div>
  )
}
