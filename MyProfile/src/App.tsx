import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Main from './pages/Main'
import ProjectDetail from './pages/ProjectDetail'
import { projectDetailApi } from './api/projectDetail.api'
import { useEffect } from 'react'

function App() {
  const location = useLocation()
  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [location])

    return null
  }

  return (
    <>
      <ScrollToTop />
      <div className='my-profile'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path={projectDetailApi.shopee.path} element={<ProjectDetail />} />
          <Route path={projectDetailApi.event.path} element={<ProjectDetail />} />
          <Route path={projectDetailApi.article.path} element={<ProjectDetail />} />
        </Routes>
      </div>
    </>
  )
}

export default App
