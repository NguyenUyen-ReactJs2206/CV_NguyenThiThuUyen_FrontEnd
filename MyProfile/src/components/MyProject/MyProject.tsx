import { Link } from 'react-router-dom'
import { projectDetailApi } from 'src/api/projectDetail.api'

export default function MyProject() {
  return (
    <>
      <div id='project' className='py-16 px-4 min-h-[100vh] bg-slate-100'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-semibold py-4 text-blue'>My Project</h2>
          <div className='mt-10'>
            <Link to={projectDetailApi.shopee.path}>Shoppe</Link>
            <Link to={projectDetailApi.article.path}>Article</Link>
            <Link to={projectDetailApi.event.path}>Event</Link>
          </div>
        </div>
      </div>
    </>
  )
}
