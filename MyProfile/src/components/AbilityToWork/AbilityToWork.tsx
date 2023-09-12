import { useTranslation } from 'react-i18next'

export default function AbilityToWork() {
  const { t } = useTranslation('abilitytowork')
  return (
    <div id='ability-to-work' className='py-16 min-h-[100vh]'>
      <div className='container mx-auto px-10 text-left'>
        <h2 className='text-4xl mb-4 font-semibold py-4 text-center text-blue'>{t('title')}</h2>
        <div className='grid grid-cols-12 gap-4'>
          <div className='lg:col-span-4 col-span-12'>
            <h3 className='text-lg font-bold'>HTML / CSS and Tailwind CSS / Bootstrap</h3>
          </div>
          <div className='lg:col-span-8 col-span-12'>
            <ul className='list-disc'>
              <li>{t('html&css1')}</li>
              <li>{t('html&css2')}</li>
              <li>{t('html&css3')}</li>
            </ul>
          </div>
        </div>
        <hr className='my-4' />
        <div className='grid grid-cols-12 gap-4'>
          <div className='lg:col-span-4 col-span-12'>
            <h3 className='text-lg font-bold'>Java Script / Type Script</h3>
          </div>
          <div className='lg:col-span-8 col-span-12'>
            <ul className='list-disc'>
              <li>{t('javascript&typescript1')}</li>
              <li>{t('javascript&typescript2')}</li>
              <li>{t('javascript&typescript3')}</li>
              <li>{t('javascript&typescript4')}</li>
            </ul>
          </div>
        </div>
        <hr className='my-4' />
        <div className='grid grid-cols-12 gap-4'>
          <div className='lg:col-span-4 col-span-12'>
            <h3 className='text-lg font-bold'>Framework</h3>
          </div>
          <div className='lg:col-span-8 col-span-12'>
            <ul className='list-disc'>
              <li>{t('framework1')}</li>
              <li>{t('framework2')}</li>
              <li>{t('framework3')}</li>
              <li>{t('framework4')}</li>
            </ul>
          </div>
        </div>
        <hr className='my-4' />
        <div className='grid grid-cols-12 gap-4'>
          <div className='lg:col-span-4 col-span-12'>
            <h3 className='text-lg font-bold'>{t('workwithgroup')}</h3>
          </div>
          <div className='lg:col-span-8 col-span-12'>
            <ul className='list-disc'>
              <li>{t('workwithgroup1')}</li>
              <li>{t('workwithgroup2')}</li>
              <li>{t('workwithgroup3')}</li>
              <li>{t('workwithgroup4')}</li>
              <li>{t('workwithgroup5')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
