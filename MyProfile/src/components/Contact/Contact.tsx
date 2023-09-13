import React from 'react'
import FormContact from '../FormContact'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation('contact')
  return (
    <div id='contact' className='py-16 px-4 min-h-[100vh]'>
      <div className='container mx-auto text-center'>
        <div className='my-4'>
          <h2 className='text-4xl font-semibold py-4 text-blue'>{t('title')}</h2>
          <p>{t('content')}</p>
        </div>
        <div className='grid grid-cols-3 '>
          <div className='col-span-3 md:col-span-1'>
            <div className='flex py-4 justify-center items-center'>
              <div>
                <div className='flex justify-center items-center'>
                  <div className='flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-blue'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='h-8 w-8 fill-current'>
                      <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
                    </svg>
                  </div>
                </div>

                <div className='break-all text-slate-600'>
                  <p>0367314106</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 md:col-span-1'>
            <div className='flex py-4 justify-center items-center'>
              <div>
                <div className='flex justify-center items-center'>
                  <div className='flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-blue'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='1em'
                      viewBox='0 0 384 512'
                      className='h-8 w-8 fill-current'
                    >
                      <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
                    </svg>
                  </div>
                </div>

                <div className='break-all text-slate-600'>
                  <p>Nha Trang, Khanh Hoa</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-3 md:col-span-1'>
            <div className='flex py-4 justify-center items-center'>
              <div>
                <div className='flex justify-center items-center'>
                  <div className='flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-blue'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={2}
                      stroke='currentColor'
                      className='h-10 w-10'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                      />
                    </svg>
                  </div>
                </div>

                <div className='break-all text-slate-600'>
                  <p>uyen99ntt@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <FormContact />
        </div>
      </div>
    </div>
  )
}
