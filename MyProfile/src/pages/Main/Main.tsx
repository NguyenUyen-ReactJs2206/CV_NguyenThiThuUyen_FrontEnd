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
                <h2 className='text-4xl font-semibold py-8 text-blue'>About</h2>
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
                        <button className=' ml-6 lg:py-4 lg:px-6 py-3 px-4'>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='skill py-16 px-4 min-h-[55vh] bg-slate-100'>
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
            <div className='ability-to-work py-16 px-4 min-h-[100vh]'>
              <div className='container mx-auto text-left'>
                <h2 className='text-4xl mb-4 font-semibold py-4 text-center text-blue'>Ability to work</h2>
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
                <h2 className='text-4xl font-semibold py-4 text-blue'>My Project</h2>
              </div>
            </div>
            <div className='contact py-16 px-4 min-h-[100vh]'>
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
            <div className='footer py-16 px-4 bg-blue'>
              <div className='container mx-auto text-center'>
                <div className='my-8'>
                  <div className='py-4'>
                    <div className='flex items-center justify-center'>
                      <a
                        href='https://www.facebook.com/profile.php?id=100024807305613'
                        target='_blank'
                        className='mr-6 flex justify-center items-center h-8 w-8  hover:fill-blue hover:bg-white duration-300 transition-all rounded-full fill-white/90'
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 320 512' className='h-4 w-4'>
                          <path d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z' />
                        </svg>
                      </a>
                      <a
                        href='/'
                        className='mr-6 flex justify-center items-center h-8 w-8  hover:fill-blue hover:bg-white duration-300 transition-all rounded-full fill-white/90'
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512' className='h-4 w-4'>
                          <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                        </svg>
                      </a>
                      <a
                        href='/'
                        className='mr-6 flex justify-center items-center h-8 w-8  hover:fill-blue hover:bg-white duration-300 transition-all rounded-full fill-white/90'
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 576 512' className='h-4 w-4'>
                          <path d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' />
                        </svg>
                      </a>
                      <a
                        href='/'
                        className='mr-6 flex justify-center items-center h-8 w-8  hover:fill-blue hover:bg-white duration-300 transition-all rounded-full fill-white/90'
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512' className='h-4 w-4'>
                          <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className='pb-4 text-white text-sm tracking-wide font-thin'>
                    © 2023 Nguyen Thi Thu Uyen - All Rights Reserved
                  </div>
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
