// import { PropagateLoader } from 'react-spinners'
import './index.css'
export default function Loading() {
  return (
    <div className='flex h-[100vh] items-center justify-center text-center'>
      {/* <PropagateLoader color='#0073B5' size={20} speedMultiplier={1.2} /> */}
      <div className='spinner'>
        <div className='blob blob-0'></div>
      </div>
    </div>
  )
}
