import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { projectDetailApi } from 'src/api/projectDetail.api'

export default function MyProject() {
  const { t } = useTranslation('myprojects')

  return (
    <>
      <div id='project' className='py-16 px-4 min-h-[100vh] bg-slate-100'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-semibold py-4 text-blue'>{t('title')}</h2>
          <div className='mt-10'>
            <div className='grid grid-cols-12 gap-4'>
              {projectDetailApi.map((projectDetail, index) => (
                <div className='lg:col-span-4 sm:col-span-6 col-span-12' key={index}>
                  <div className='group relative rounded-lg overflow-hidden'>
                    <Link to={projectDetail.path}>
                      <div className='mx-auto h-[300px] w-full'>
                        <img
                          src={projectDetail.image}
                          alt={projectDetail.name}
                          className='h-full w-full object-cover shadow-sm duration-[2000ms] group-hover:scale-110 group-hover:opacity-40 group-hover:duration-[2000ms] '
                        />
                      </div>
                    </Link>
                    <div className='absolute bottom-[-90px] left-2 h-fit w-fit'>
                      <div className=''>
                        <div
                          className='translate-y-0 transform opacity-100 transition-all
        duration-1000 group-hover:-translate-y-[100px] group-hover:opacity-100'
                        >
                          <h3 className='cursor-default font-semibold tracking-wide text-blue text-lg sm:text-2xl'>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
