import { Dispatch, SetStateAction, useState } from 'react'
import Li from '../Li'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

type Props = {
  setLoading: Dispatch<SetStateAction<boolean>>
}
export default function NavHeader({ setLoading }: Props) {
  const { i18n } = useTranslation('navbar')
  const [language, setLanguage] = useState('en')

  const handleLanguageChange = (lng: 'vi' | 'en') => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
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
            scrollTo='education'
            title='education'
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

          <Link
            to='top'
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => handleLanguageChange('vi')}
            className={`ml-8 p-2 uppercase text-sm cursor-pointer border-r-2 border-r-blue/40 hover:text-blue`}
          >
            <div className={`${language === 'vi' ? 'text-red-400' : ''}`}>VI</div>
          </Link>

          <Link
            to='top'
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => handleLanguageChange('en')}
            className={` p-2 uppercase text-sm cursor-pointer hover:text-blue`}
          >
            <div className={`${language === 'en' ? 'text-red-400' : ''}`}>EN</div>
          </Link>
        </ul>
      </div>
    </div>
  )
}
