import Li from '../Li'
import { useTranslation } from 'react-i18next'

export default function NavHeader() {
  const { i18n } = useTranslation('navbar')

  const handleLanguageChange = (lng: 'vi' | 'en') => {
    i18n.changeLanguage(lng)
  }
  return (
    <div className='lg:block hidden bg-blue fixed w-full z-20'>
      <div className='animation-bottom__navbar bg-white py-4'>
        <ul className='flex justify-end mr-10 flex-shrink-0'>
          <Li
            scrollTo='home'
            title='home'
            className='px-4 uppercase py-2 text-sm hover:underline-effect underline-effect duration-1000 hover:text-blue  '
          />
          <Li
            scrollTo='about'
            title='about'
            className='px-4 py-2 uppercase text-sm hover:underline-effect underline-effect duration-1000 hover:text-blue  '
          />
          <Li
            scrollTo='skill'
            title='skill'
            className='px-4 py-2 uppercase text-sm hover:underline-effect underline-effect duration-1000 hover:text-blue  '
          />
          <Li
            scrollTo='ability-to-work'
            title='ability to work'
            className='px-4 py-2 uppercase text-sm hover:underline-effect underline-effect duration-1000 hover:text-blue  '
          />
          <Li
            scrollTo='project'
            title='project'
            className='px-4 py-2 uppercase text-sm hover:underline-effect underline-effect duration-1000 hover:text-blue  '
          />
          <Li
            scrollTo='contact'
            title='contact'
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
