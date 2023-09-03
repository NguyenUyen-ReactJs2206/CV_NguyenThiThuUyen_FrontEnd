import React from 'react'

export default function Skill() {
  return (
    <div id='skill' className='py-16 px-4 min-h-[90vh] bg-slate-100'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-semibold py-4 text-blue'>Skill</h2>
        <p>HTML, CSS, Java Script, Tailwind CSS, Bootstrap, React JS</p>
        <div className='mt-10'>
          <div className='grid grid-cols-2 md:gap-4 gap-2'>
            <div className='md:col-span-1 col-span-2'>
              <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium '>
                <div className='tracking-wide'>HTML</div>
                <div className='absolute bottom-0 left-0 h-2 w-[80%] bg-blue '></div>
                <div className='absolute bottom-0 right-0 h-2 w-[20%] bg-slate-200 '></div>
              </div>
            </div>
            <div className='md:col-span-1 col-span-2'>
              <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium '>
                <div className='tracking-wide'>CSS</div>
                <div className='absolute bottom-0 left-0 h-2 w-[75%] bg-blue '></div>
                <div className='absolute bottom-0 right-0 h-2 w-[25%] bg-slate-200 '></div>
              </div>
            </div>
            <div className='md:col-span-1 col-span-2'>
              <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium '>
                <div className='tracking-wide'>Java Script</div>
                <div className='absolute bottom-0 left-0 h-2 w-[60%] bg-blue '></div>
                <div className='absolute bottom-0 right-0 h-2 w-[40%] bg-slate-200 '></div>
              </div>
            </div>
            <div className='md:col-span-1 col-span-2'>
              <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium '>
                <div className='tracking-wide'>Type Script</div>
                <div className='absolute bottom-0 left-0 h-2 w-[60%] bg-blue '></div>
                <div className='absolute bottom-0 right-0 h-2 w-[40%] bg-slate-200 '></div>
              </div>
            </div>
            <div className='md:col-span-1 col-span-2'>
              <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium '>
                <div className='tracking-wide'>Tailwind CSS</div>
                <div className='absolute bottom-0 left-0 h-2 w-[70%] bg-blue '></div>
                <div className='absolute bottom-0 right-0 h-2 w-[30%] bg-slate-200 '></div>
              </div>
            </div>
            <div className='md:col-span-1 col-span-2'>
              <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium '>
                <div className='tracking-wide'>Bootstrap</div>
                <div className='absolute bottom-0 left-0 h-2 w-[50%] bg-blue '></div>
                <div className='absolute bottom-0 right-0 h-2 w-[50%] bg-slate-200 '></div>
              </div>
            </div>
            <div className='md:col-span-1 col-span-2'>
              <div className='relative mb-2 flex justify-between py-2 text-sm font-semibold text-black sm:mb-4 sm:text-base lg:font-medium '>
                <div className='tracking-wide'>React JS</div>
                <div className='absolute bottom-0 left-0 h-2 w-[65%] bg-blue '></div>
                <div className='absolute bottom-0 right-0 h-2 w-[35%] bg-slate-200 '></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
