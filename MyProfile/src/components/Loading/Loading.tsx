// import { PropagateLoader } from 'react-spinners'
import './index.css'
type Props = {
  title: string
}
export default function Loading({ title }: Props) {
  return (
    <div className='flex h-[100vh] items-center justify-center text-center'>
      <div className='text-shadow  z-[99999] sm:font-bold font-semibold text-xl md:text-3xl  uppercase text-blue'>
        {title}
      </div>
      <div className='spinner'>
        <div className='blob blob-0'></div>
      </div>
    </div>
  )
}
