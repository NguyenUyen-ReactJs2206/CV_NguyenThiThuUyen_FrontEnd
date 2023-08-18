import { useState } from 'react'
import '../../sass/index.scss'
import avatar from '../../assets/images/avatar-main.jpg'
import avatarAbout from '../../assets/images/avatar.jpg'
import cvFile from '../../assets/files/CV-Frontend-ReactJs-NguyenThiThuUyen (2).pdf'
import { Link } from 'react-scroll'
import PopupHeader from '../../components/PopupHeader'
import FormContact from '../../components/FormContact'

export default function Main() {
  const [open, setOpen] = useState(false)
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const handleShowPopup = () => {
    setOpen(true)
    setIsPopupVisible(true)
  }

  const handleHidePopup = () => {
    setOpen(false)
    setIsPopupVisible(false)
  }
  const handleOverlayClick = (event: any) => {
    if (event.target === event.currentTarget) {
      handleHidePopup()
    }
  }
  return (
    <div className='my-profile'>
      <div id='top'>
        <div className='grid grid-cols-12'>
          <div className='lg:col-span-3 lg:block hidden h-[100vh] w-full bg-white'></div>
          <div className='lg:col-span-9 col-span-12'>
            <div className='home flex bg-blue items-center justify-center min-h-[100vh] w-full'>
              <div className='container text-white px-8 text-center'>
                <div className='avatar text-center inline-block w-[200px] h-[200px] rounded-full bg-white overflow-hidden animation-left'>
                  <img src={avatar} alt='avatar' className='object-cover' />
                </div>
                <h1 className='my-4 text-3xl font-semibold uppercase animation-right'>Nguyễn Thị Thu Uyên</h1>
                <h2 className='text-2xl font-medium animation-left'>Front-end deverloper</h2>
                <h4 className='animation-left'>HTML, CSS, Java Script, React JS, Node JS</h4>
              </div>
            </div>
            <div className='about px-4 py-16 min-h-[100vh]'>
              <div className='container mx-auto text-center '>
                <h2 className='text-4xl font-semibold py-8'>About</h2>
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
                      <p className='py-2 text-sm'>
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
                          className='lg:py-4 lg:px-6 py-3 px-4'
                          download='CV-FrontEnd-Nguyen-Thi-Thu-Uyen'
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>Download CV
                        </a>
                        <a href={cvFile} className=' ml-6 lg:py-4 lg:px-6 py-3 px-4'>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>Send Message
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='skill py-16 px-4 min-h-[55vh] bg-slate-100'>
              <div className='container mx-auto text-center'>
                <h2 className='text-4xl font-semibold py-4'>Skill</h2>
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
            <div className='ability-to-work py-16 px-4 min-h-[100vh]'>
              <div className='container mx-auto text-left'>
                <h2 className='text-4xl font-semibold py-4 text-center'>Ability to work</h2>
                <div className='grid grid-cols-12 gap-4'>
                  <div className='lg:col-span-4 col-span-12'>
                    <h3 className='text-lg font-bold'>HTML / CSS and Tailwind CSS / Bootstrap</h3>
                  </div>
                  <div className='lg:col-span-8 col-span-12'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex suscipit dolor deserunt eius
                      velit quidem cupiditate voluptatem asperiores? Labore, deleniti. Est sint odit reiciendis expedita
                      cum ex modi doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, quo quidem
                      officia laboriosam, aliquam adipisci delectus hic ipsum, eius tempora tenetur. Pariatur, sit.
                      Impedit labore quae rem voluptatem officiis delectus!
                    </p>
                  </div>
                </div>
                <hr className='my-4' />
                <div className='grid grid-cols-12 gap-4'>
                  <div className='lg:col-span-4 col-span-12'>
                    <h3 className='text-lg font-bold'>Java Script / Type Script</h3>
                  </div>
                  <div className='lg:col-span-8 col-span-12'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex suscipit dolor deserunt eius
                      velit quidem cupiditate voluptatem asperiores? Labore, deleniti. Est sint odit reiciendis expedita
                      cum ex modi doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, quo quidem
                      officia laboriosam, aliquam adipisci delectus hic ipsum, eius tempora tenetur. Pariatur, sit.
                      Impedit labore quae rem voluptatem officiis delectus!
                    </p>
                  </div>
                </div>
                <hr className='my-4' />
                <div className='grid grid-cols-12 gap-4'>
                  <div className='lg:col-span-4 col-span-12'>
                    <h3 className='text-lg font-bold'>Framework</h3>
                  </div>
                  <div className='lg:col-span-8 col-span-12'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex suscipit dolor deserunt eius
                      velit quidem cupiditate voluptatem asperiores? Labore, deleniti. Est sint odit reiciendis expedita
                      cum ex modi doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, quo quidem
                      officia laboriosam, aliquam adipisci delectus hic ipsum, eius tempora tenetur. Pariatur, sit.
                      Impedit labore quae rem voluptatem officiis delectus!
                    </p>
                  </div>
                </div>
                <hr className='my-4' />
                <div className='grid grid-cols-12 gap-4'>
                  <div className='lg:col-span-4 col-span-12'>
                    <h3 className='text-lg font-bold'>The ability to work in groups</h3>
                  </div>
                  <div className='lg:col-span-8 col-span-12'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ex suscipit dolor deserunt eius
                      velit quidem cupiditate voluptatem asperiores? Labore, deleniti. Est sint odit reiciendis expedita
                      cum ex modi doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, quo quidem
                      officia laboriosam, aliquam adipisci delectus hic ipsum, eius tempora tenetur. Pariatur, sit.
                      Impedit labore quae rem voluptatem officiis delectus!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='my-project py-16 px-4 min-h-[100vh] bg-slate-100'>
              <div className='container mx-auto text-center'>
                <h2 className='text-4xl font-semibold py-4'>My Project</h2>
              </div>
            </div>
            <div className='contact py-16 px-4 min-h-[100vh]'>
              <div className='container mx-auto text-center'>
                <div className='my-4'>
                  <h2 className='text-4xl font-semibold py-4'>Contact</h2>
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
          </div>
        </div>
      </div>
      <div
        className={`fixed lg:block hidden lg:w-[25%] top-0 left-0 h-[100vh] z-[10] bg-zinc-900 text-white animation-left__side--nav`}
      >
        <div className='flex justify-center w-full h-full items-center'>
          <div className='flex'>
            <span>VI</span>
            <span>EN</span>
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

      {!open && (
        <button
          onClick={handleShowPopup}
          className='shadow-inner border-2 fixed top-10 lg:hidden block right-10 w-16 animation-right rounded-full h-16 bg-white z-10'
        >
          <div className='flex justify-center w-16 h-16 items-center cursor-pointer'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-10 w-10'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </div>
          </div>
        </button>
      )}
      {open && (
        <button
          onClick={handleHidePopup}
          className='shadow-inner border-2 fixed top-10 lg:hidden block right-10 w-16 animation-right rounded-full h-16 bg-white z-10'
        >
          <div className='flex justify-center w-16 h-16 items-center cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-10 w-10'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </div>
        </button>
      )}

      <PopupHeader
        isPopupVisible={isPopupVisible}
        setIsPopupVisible={setIsPopupVisible}
        handleOverlayClick={handleOverlayClick}
      />
    </div>
  )
}
