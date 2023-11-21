import { Link } from 'react-router-dom'
import { projectDetailApi } from 'src/api/projectDetail.api'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import './styles.css'
// import required modules
import { Autoplay, Navigation } from 'swiper/modules'

export default function SwiperSliderMoreProject() {
  return (
    <>
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className='mySwiper'
      >
        {projectDetailApi.map((projectDetail, index) => (
          <div key={index}>
            <SwiperSlide>
              <div className='group relative'>
                <Link to={projectDetail.path}>
                  <div className='mx-auto h-[300px] w-full overflow-hidden'>
                    <img
                      src={projectDetail.image}
                      alt={projectDetail.name}
                      className='h-full w-full object-cover shadow-sm duration-[2000ms] group-hover:scale-110 group-hover:opacity-50 group-hover:duration-[2000ms] '
                    />
                  </div>
                </Link>
                <div className='absolute  bottom-[-90px] left-2 h-fit w-fit'>
                  <div className=''>
                    <div
                      className='translate-y-0 transform opacity-100 transition-all
        duration-1000 group-hover:-translate-y-[100px] group-hover:opacity-100'
                    >
                      <h3 className='cursor-default font-semibold tracking-wide text-blue sm:text-2xl text-lg'>
                        {projectDetail.name}
                      </h3>
                      <Link to={projectDetail.path}>
                        <button className='text-left underline-effect hover:underline-effect text-sm text-gray duration-300 hover:font-medium hover:text-blue/90 hover:duration-300 sm:text-base'>
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
      </Swiper>
    </>
  )
}
