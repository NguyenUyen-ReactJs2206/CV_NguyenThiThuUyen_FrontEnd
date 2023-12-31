import { useTranslation } from 'react-i18next'
import avatar from 'src/assets/images/avatar-main.jpg'

export default function Hero() {
  const { t } = useTranslation('home')
  return (
    <div id='home' className='flex bg-blue items-center justify-center min-h-[100vh] w-full'>
      <div className='container text-white px-8 text-center'>
        <div className='avatar text-center inline-block w-[200px] h-[200px] rounded-full bg-white overflow-hidden animation-left'>
          <img src={avatar} alt='avatar' className='object-cover' />
        </div>
        <h1 className='py-4 text-3xl font-semibold uppercase animation-right'>{t('name')}</h1>
        <h2 className='text-2xl font-medium animation-left'>Front-end deverloper</h2>
        <h4 className='animation-left'>HTML, CSS, Java Script, React JS, Node JS</h4>
      </div>
    </div>
  )
}
