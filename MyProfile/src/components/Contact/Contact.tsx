import React from 'react'
import FormContact from '../FormContact'

export default function Contact() {
  return (
    <div id='contact' className='contact py-16 px-4 min-h-[100vh]'>
      <div className='container mx-auto text-center'>
        <div className='my-4'>
          <h2 className='text-4xl font-semibold py-4 text-blue'>Contact</h2>
          <p>I believe I can take the job in your company, let's contact me!</p>
        </div>
        <div className='grid grid-cols-3 '>
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
