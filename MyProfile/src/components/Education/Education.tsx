import cvFile from 'src/assets/files/CV-Frontend-ReactJs-NguyenThiThuUyen (2).pdf'
import { Link } from 'react-scroll'
export default function Education() {
  return (
    <div>
      <h2 className='py-2 text-2xl font-semibold'>Education</h2>
      <div className='py-1'>
        <h4 className='text-xl font-semibold'>Front-end</h4>
        <p className='text-sm'>Front-end training course at T3H Information Technology Institute.</p>
        <p className='text-sm'>Front-end training course of Du Thanh Duoc.</p>
      </div>
      <div className='py-1'>
        <h4 className='text-xl font-semibold'>Back-end</h4>
        <p className='text-sm'>Back-end training course of Du Thanh Duoc.</p>
      </div>
      <div className='py-4'>
        <div className='flex'>
          <a
            href={cvFile}
            className='border hover:shadow-xl rounded-md p-2 lg:p-4 cursor-pointer 
          bg-blue/60 text-white hover:bg-blue
          font-semibold lg:font-bold transition-all duration-300'
            download='CV-FrontEnd-Nguyen-Thi-Thu-Uyen'
          >
            Download CV
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
            Send Message
          </Link>
        </div>
      </div>
    </div>
  )
}
