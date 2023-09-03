import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Main from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import { projectDetailApi } from './api/projectDetail.api'
import { useEffect } from 'react'
import MainLayout from './pages/MainLayout'

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
          <Route path='/' element={<MainLayout />} />
          <Route path={projectDetailApi.shopee.path} element={<ProjectDetail content={'shopeeeee'} />} />
          <Route path={projectDetailApi.event.path} element={<ProjectDetail content={'Event'} />} />
          <Route path={projectDetailApi.article.path} element={<ProjectDetail content={'Article'} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
