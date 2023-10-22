import { useEffect, useRef, useState } from 'react'
import Carousel from 'react-multi-carousel'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { projectDetailApi, responsiveCarouselDetail } from 'src/api/projectDetail.api'
import DetailProjectCarousel from 'src/components/DetailProjectCarousel'
import 'react-multi-carousel/lib/styles.css'

import Loading from 'src/components/Loading'
type Props = {
  content: { title: string; linkWeb: string; linkGithub: string; technologies: string[]; functions: never[] }[]
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
            <>
              <div key={index}>
                <button className='' onClick={() => navigate('/')}>
                  <div className='bg-red-400'>Back Home</div>
                </button>
                <div className='xl:max-w-[1200px] lg:max-w-[900px]  mx-auto'>
                  <h1>{contentDetail.title}</h1>
                </div>
                <div className='m-4'>
                  <Carousel
                    responsive={responsiveCarouselDetail}
                    pauseOnHover={false}
                    sliderClass='transition-duration-2000'
                    infinite={true}
                    arrows={true}
                  >
                    {/* <DetailProjectCarousel/>
               <DetailProjectCarousel/>
               <DetailProjectCarousel/>
               <DetailProjectCarousel/> */}
                    {projectDetailApi.map((projectDetail, index) => (
                      <>
                        <DetailProjectCarousel
                          key={index}
                          name={projectDetail.name}
                          pathDetailProject={projectDetail.path}
                        />
                      </>
                    ))}
                  </Carousel>
                </div>
              </div>
            </>
          ))}
        </div>
      </CSSTransition>
    </div>
  )
}
