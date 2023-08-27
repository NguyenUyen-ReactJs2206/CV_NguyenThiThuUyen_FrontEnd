export default function FormContact() {
  return (
    <div>
      <form className='bg-slate-100 py-20 text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20'>
        <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
          <div className='col-span-2'>
            <input
              placeholder="Your name or Company's name"
              type='text'
              className='w-full border border-blue/80 px-4 py-4 text-lg outline-none focus:outline-blue'
            />
          </div>

          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder='Your phone number'
              type='text'
              className='w-full border border-blue/80 px-4 py-4 text-lg outline-none focus:outline-blue'
            />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <input
              placeholder='Your Email'
              type='text'
              className='w-full border border-blue/80 px-4 py-4 text-lg outline-none focus:outline-blue'
            />
          </div>
          <div className='col-span-2'>
            <textarea
              placeholder='Your Message'
              className='w-full border border-blue/80 px-4 py-4 text-lg outline-none focus:outline-blue'
              rows={4}
            ></textarea>
            <div className='mt-1 min-h-[17px] text-sm text-red-600'></div>
          </div>
          <div className='col-span-2'>
            <button
              type='submit'
              className='mt-4 w-full bg-blue/80 px-4 py-4 text-lg uppercase text-white outline-none transition-all duration-300 hover:bg-blue hover:duration-300 sm:mt-6'
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}