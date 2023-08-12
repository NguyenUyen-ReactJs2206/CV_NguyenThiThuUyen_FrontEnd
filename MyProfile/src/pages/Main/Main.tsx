import '../../sass/main.scss'
import avatar from '../../assets/images/avatar-main.jpg'
import avatarAbout from '../../assets/images/avatar.jpg'
import cvFile from '../../assets/files/CV-Frontend-ReactJs-NguyenThiThuUyen (2).pdf'
import { Link } from 'react-scroll'
export default function Main() {
  return (
    <div className='my-profile'>
      <div id='top'>
        <div className='grid grid-cols-12'>
          <div className='xl:col-span-3 xl:block hidden min-h-[100vh]'>aa</div>
          <div className='xl:col-span-9 col-span-12'>
            <div className='home flex bg-black items-center justify-center min-h-[100vh] w-full'>
              <div className='container text-white px-8 text-center'>
                <div className='avatar text-center inline-block w-[200px] h-[200px] rounded-full bg-white overflow-hidden animation-left'>
                  <img src={avatar} alt='avatar' className='object-cover' />
                </div>
                <h1 className='my-4 text-3xl font-semibold uppercase animation-right'>Nguyễn Thị Thu Uyên</h1>
                <h2 className='text-2xl font-medium animation-left'>Front-end deverloper</h2>
                <h4 className='animation-left'>HTML, CSS, Java Script, React JS, Node JS</h4>
              </div>
            </div>
            <div className='about py-16 min-h-[100vh]'>
              <div className='container mx-auto text-center '>
                <h2 className='text-4xl font-semibold py-8'>About</h2>
                <div className='flex'>
                  <img
                    src={avatarAbout}
                    alt='avatarAbout'
                    className='object-cover md:block hidden md:h-[500px] md:w-[300px] lg:h-[550px] lg:w-[400px]'
                  />
                  <div className='px-2 text-left'>
                    <h2 className='py-2 text-2xl font-semibold'>Nguyễn Thị Thu Uyên</h2>
                    <div className='py-1'>
                      <h4 className='text-xl'> Front-end Developer</h4>
                      <p className='py-2 lg:text-base text-sm'>
                        Hi, I'm a front-end developer. I can learn to code and fix error codes for hours until all these
                        unexpected errors are resolved. Before that, I was a bachelor in business administration. Ever
                        since I was exposed to the IT industry, I knew I belonged in this world. In the past year, I
                        have been very focused on learning front-end web programming. Currently, I would love to join
                        the new environment to develop and strengthen my Front-end skills.
                      </p>
                    </div>
                    <h2 className='py-2 text-2xl font-semibold'>Education</h2>
                    <div className='py-1'>
                      <h4 className='text-xl font-semibold'>Front-end</h4>
                      <p className='lg:text-base text-sm'>
                        Front-end training course at T3H Information Technology Institute.
                      </p>
                      <p className='lg:text-base text-sm'>Front-end training course of Du Thanh Duoc.</p>
                    </div>
                    <div className='py-1'>
                      <h4 className='text-xl font-semibold'>Back-end</h4>
                      <p className='lg:text-base text-sm'>Back-end training course of Du Thanh Duoc.</p>
                    </div>
                    <div className='py-4'>
                      <div className='flex'>
                        <a
                          href={cvFile}
                          className='lg:py-5 lg:px-10 py-3 px-6'
                          download='CV-FrontEnd-Nguyen-Thi-Thu-Uyen'
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>Download CV
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        className='fixed bottom-[10%] justify-center items-center right-2 z-[999] flex h-20 w-20'
        activeClass='active'
        to='top'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button className='flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-white/70 text-center text-black/70 hover:bg-white hover:text-black'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5' />
          </svg>
        </button>
      </Link>
    </div>
  )
}
