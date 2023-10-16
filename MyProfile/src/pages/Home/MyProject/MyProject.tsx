import { Link } from 'react-router-dom'
import { projectDetailApi } from 'src/api/projectDetail.api'

export default function MyProject() {
  return (
    <>
      <div id='project' className='py-16 px-4 min-h-[100vh] bg-slate-100'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-semibold py-4 text-blue'>My Project</h2>
          <div className='mt-10'>
            <div className='grid grid-cols-12 gap-4'>
              {projectDetailApi.map((projectDetail, index) => (
                <>
                  <div className='lg:col-span-4 sm:col-span-6 rounded-lg col-span-12' key={index}>
                    <Link to={projectDetail.path}>
                      <div className='w-full lg:h-[370px] md:h-[320px] h-[300px] overflow-hidden rounded-xl bg-red-300'>
                        <img
                          src={`${projectDetail.image}`}
                          alt={`${projectDetail.name}`}
                          className='w-full h-full object-cover transition-all duration-500'
                        />
                      </div>
                    </Link>
                  </div>
                </>
              ))}

              {/* <div className='lg:col-span-4 sm:col-span-6 rounded-lg col-span-12'>
                <Link to={projectDetailApi.shopee.path}>
                  <div className='w-full lg:h-[370px] md:h-[320px] h-[300px] overflow-hidden rounded-xl bg-red-300'>
                    <img
                      src={`${IMAGE_SHOPEE}`}
                      alt={`${IMAGE_SHOPEE}`}
                      className='w-full h-full object-cover transition-all duration-500'
                    />
                  </div>
                </Link>
              </div>
              <div className='lg:col-span-4 sm:col-span-6 col-span-12'>
                <Link to={projectDetailApi.article.path}>
                  <div className='w-full lg:h-[370px] md:h-[320px] h-[300px] overflow-hidden bg-red-300'>
                    <img
                      src={`${IMAGE_ARTICLE}`}
                      alt={`${IMAGE_ARTICLE}`}
                      className='w-full h-full object-cover transition-all duration-500'
                    />
                  </div>
                </Link>
              </div>
              <div className='lg:col-span-4 sm:col-span-6 col-span-12'>
                <Link to={projectDetailApi.event.path}>
                  <div className='w-full lg:h-[370px] md:h-[320px] h-[300px] overflow-hidden bg-red-300'>
                    <img
                      src={`${IMAGE_HYGEE}`}
                      alt={`${IMAGE_HYGEE}`}
                      className='w-full h-full object-cover transition-all duration-500'
                    />
                  </div>
                </Link>
              </div> */}
            </div>
            {/* <Link to={projectDetailApi.shopee.path}>Shoppe</Link>
            <Link to={projectDetailApi.article.path}>Article</Link>
            <Link to={projectDetailApi.event.path}>Event</Link> */}
          </div>
        </div>
      </div>
    </>
  )
}
