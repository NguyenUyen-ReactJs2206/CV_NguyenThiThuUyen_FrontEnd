import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { projectDetailApi, responsiveCarouselDetail } from 'src/api/projectDetail.api'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import 'src/sass/index.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'

// import required modules
import { Pagination } from 'swiper/modules'

import Loading from 'src/components/Loading'
type Props = {
  content: {
    title: string
    linkWeb: string
    linkGithub: string
    technologiesFE: string[]
    technologiesBE: string[]
    functions: string[]
    conclude: string
  }[]
}
export default function ProjectDetail({ content }: Props) {
  const [loading, setLoading] = useState(true)
  const nodeRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [setLoading])
  return (
    <div>
      {loading && (
        <CSSTransition in={loading} timeout={500} nodeRef={nodeRef} classNames='loading' unmountOnExit>
          <Loading title='Loading...' />
        </CSSTransition>
      )}
      <CSSTransition in={!loading} timeout={1000} nodeRef={nodeRef} classNames='page' unmountOnExit>
        <div ref={nodeRef} id='top'>
          {content.map((contentDetail, index) => (
            <div key={index} className='min-h-[100vh] pb-20 max-w-[1200px] mx-auto'>
              <button
                className='mt-4 ml-1 bg-blue/70 transition-all hover:duration-300 hover:bg-blue text-white px-4 py-2'
                onClick={() => navigate('/')}
              >
                Back Home
              </button>
              <div className='pt-10 max-w-[1000px] mx-auto px-4'>
                <h1 className='text-center text-blue uppercase font-semibold text-2xl'>{contentDetail.title}</h1>
                <div className='content'>
                  {contentDetail.linkWeb !== '' && (
                    <div className='flex my-2'>
                      <h3 className='uppercase font-semibold'>Website: </h3>
                      <a
                        href={contentDetail.linkWeb}
                        target='_blank'
                        className='ml-4 text-blue duration-300 hover:duration-300 hover:transition-all hover:underline'
                      >
                        {contentDetail.linkWeb}
                      </a>
                    </div>
                  )}

                  <div className='flex my-2'>
                    <h3 className='uppercase font-semibold'>Github: </h3>
                    <a
                      href={contentDetail.linkGithub}
                      target='_blank'
                      className='ml-4 text-blue duration-300 hover:duration-300 hover:transition-all hover:underline'
                    >
                      {contentDetail.linkGithub}
                    </a>
                  </div>
                  <div className='my-4'>
                    {contentDetail.technologiesFE.length !== 0 && (
                      <div className='technologisFE'>
                        <h3 className='uppercase font-semibold'>Technologies Front-end: </h3>
                        <div className='sm:mx-4 mx-2'>
                          {contentDetail.technologiesFE.map((technologi, index) => (
                            <div key={index}>
                              <p>-{technologi}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {contentDetail.technologiesBE.length !== 0 && (
                      <div className='technologisBE'>
                        <h3 className='uppercase font-semibold'>Technologies Back-end: </h3>
                        <div className='sm:mx-4 mx-2'>
                          {contentDetail.technologiesBE.map((technologi, index) => (
                            <div key={index}>
                              <p>-{technologi}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className='my-2 functions'>
                      <h3 className='uppercase font-semibold'>Functions: </h3>
                      <div className='sm:mx-4 mx-2'>
                        {contentDetail.functions.map((func, index) => (
                          <div key={index}>
                            <p>-{func}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='my-2'>
                      <h3 className='uppercase font-semibold'>Conclude: </h3>
                      <div className='sm:mx-4 mx-2'>
                        <p>-{contentDetail.conclude}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='my-2'>
                  <h3 className='uppercase font-semibold mb-1'>More Project:</h3>

                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                      clickable: true
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                  >
                    {projectDetailApi.map((projectDetail, index) => (
                      <div key={index}>
                        <SwiperSlide>
                          <div className='group relative cursor-pointer'>
                            <Link to={projectDetail.path}>
                              <div className='mx-auto h-[300px] w-full cursor-pointer overflow-hidden'>
                                <img
                                  src={projectDetail.image}
                                  alt={projectDetail.name}
                                  className='h-full w-full cursor-pointer object-cover shadow-sm duration-[2000ms] group-hover:scale-110 group-hover:opacity-50 group-hover:duration-[2000ms] '
                                />
                              </div>
                            </Link>
                            <div className='absolute bottom-2 left-4 h-fit w-fit'>
                              <div className=''>
                                <div
                                  className='translate-y-0 transform opacity-100 transition-all
        duration-1000 group-hover:-translate-y-2 group-hover:opacity-100'
                                >
                                  <h3 className='cursor-default text-base font-medium tracking-wide text-blue sm:text-lg'>
                                    {projectDetail.name}
                                  </h3>
                                  <Link to={projectDetail.path}>
                                    <button className='underline-effect hover:underline-effect text-sm text-gray duration-300 hover:font-medium hover:text-blue/90 hover:duration-300 sm:text-base'>
                                      Read More
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    ))}
                    {/* <SwiperSlide>
                      <div className='group relative cursor-pointer'>
                        <Link to={pathDetailProject}>
                          <div className='mx-auto h-[300px] w-full cursor-pointer overflow-hidden'>
                            <img
                              src={image}
                              alt={name}
                              className='h-full w-full cursor-pointer object-cover shadow-sm duration-[2000ms] group-hover:scale-110 group-hover:opacity-50 group-hover:duration-[2000ms] '
                            />
                          </div>
                        </Link>
                        <div className='absolute bottom-2 left-4 h-fit w-fit'>
                          <div className=''>
                            <div
                              className='translate-y-0 transform opacity-100 transition-all
        duration-1000 group-hover:-translate-y-2 group-hover:opacity-100'
                            >
                              <h3 className='cursor-default text-base font-medium tracking-wide text-blue sm:text-lg'>
                                {name}
                              </h3>
                              <Link to={pathDetailProject}>
                                <button className='underline-effect hover:underline-effect text-sm text-gray duration-300 hover:font-medium hover:text-blue/90 hover:duration-300 sm:text-base'>
                                  Read More
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
                  </Swiper>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  )
}
