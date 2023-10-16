import cvFile from 'src/assets/files/CV-Frontend-ReactJs-NguyenThiThuUyen (2).pdf'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

export default function Education() {
  const { t } = useTranslation('education')
  return (
    <div id='education' className='min-h-[60vh] bg-blue/20'>
      <div className='container lg:px-8 sm:px-6 px-4 py-16 mx-auto text-center '>
        <h2 className='text-4xl font-semibold py-8 text-blue'>{t('title')}</h2>
        <div className='sm:flex justify-around text-left'>
          <div className='py-1 '>
            <h4 className='text-xl font-semibold'>Front-end</h4>
            <p>{t('fe1')}</p>
            <p>{t('fe2')}</p>
            <p>{t('fe3')}</p>
          </div>
          <div className='py-1'>
            <h4 className='text-xl font-semibold'>Back-end</h4>
            <p>{t('be1')}</p>
          </div>
        </div>
        <div className='py-10'>
          <div className='flex justify-center'>
            <a
              href={cvFile}
              className='border hover:shadow-xl rounded-md p-2 lg:p-4 cursor-pointer 
          bg-blue/60 text-white hover:bg-blue
          font-semibold lg:font-bold transition-all duration-300'
              download='CV-FrontEnd-Nguyen-Thi-Thu-Uyen'
            >
              {t('download')}
            </a>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              duration={1000}
              offset={-20}
              className='border hover:shadow-md rounded-md ml-6 p-2 lg:p-4 cursor-pointer 
          bg-slate-500 text-white hover:bg-slate-800
          font-semibold lg:font-bold transition-all duration-300'
            >
              {t('send')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
