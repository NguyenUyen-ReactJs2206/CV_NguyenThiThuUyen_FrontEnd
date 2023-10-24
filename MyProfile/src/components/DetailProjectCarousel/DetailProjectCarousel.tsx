import { Link } from 'react-router-dom'
import 'src/sass/index.scss'

type Props = {
  name: string
  pathDetailProject: string
  image: string
}
export default function DetailProjectCarousel({ name, pathDetailProject, image }: Props) {
  return (
    <div className=''>
      <div className='group relative cursor-pointer'>
        <Link to={pathDetailProject}>
          <div className='mx-auto h-[300px] w-full cursor-pointer overflow-hidden sm:h-[300px] md:h-[400px]'>
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
              <h3 className='cursor-default text-base font-medium tracking-wide text-blue sm:text-lg'>{name}</h3>
              <Link to={pathDetailProject}>
                <button className='underline-effect hover:underline-effect text-sm text-gray duration-300 hover:font-medium hover:text-blue/90 hover:duration-300 sm:text-base'>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
