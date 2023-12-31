import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import 'react-multi-carousel/lib/styles.css'
import 'src/sass/index.scss'

import Loading from 'src/components/Loading'
import SwiperSliderMoreProject from 'src/components/SwiperSliderMoreProject'
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
                  <SwiperSliderMoreProject />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  )
}
