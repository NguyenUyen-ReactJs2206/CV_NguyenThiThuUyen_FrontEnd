import avatarAbout from 'src/assets/images/avatar.jpg'

import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation('about')
  return (
    <div id='about' className='min-h-[100vh]'>
      <div className='container lg:px-8 sm:px-6 px-4 py-16 mx-auto text-center '>
        <h2 className='text-4xl font-semibold py-8 text-blue'>{t('title')}</h2>
        <div className='flex'>
          <img
            src={avatarAbout}
            alt='avatarAbout'
            className='object-cover md:block hidden md:h-[500px] md:w-[300px] lg:h-[550px] lg:w-[400px]'
          />
          <div className='text-left px-2'>
            <h2 className='py-2 text-2xl font-semibold'>Nguyễn Thị Thu Uyên</h2>
            <div className='py-1'>
              <h4 className='text-xl'> Front-end Developer</h4>
              <div className=' xl:text-xl md:text-sm lg:text-base   '>
                <p className='py-1 xl:text-xl'>{t('about1')}</p>
                <p className='py-1 xl:text-xl'>{t('about2')}</p>
                <p className='py-1 xl:text-xl'>{t('about3')}</p>
                <p className='py-1 xl:text-xl'>{t('about4')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
