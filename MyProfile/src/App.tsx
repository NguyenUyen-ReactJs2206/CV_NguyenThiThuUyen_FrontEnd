import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Main from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import { projectDetailApi } from './api/projectDetail.api'
import { useEffect } from 'react'
import MainLayout from './layouts/MainLayout'

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
          <Route
            path={projectDetailApi[0].path}
            element={<ProjectDetail content={projectDetailApi[0].projectDetailContent} />}
          />
          <Route
            path={projectDetailApi[1].path}
            element={<ProjectDetail content={projectDetailApi[1].projectDetailContent} />}
          />
          <Route
            path={projectDetailApi[2].path}
            element={<ProjectDetail content={projectDetailApi[2].projectDetailContent} />}
          />

          <Route
            path={projectDetailApi[3].path}
            element={<ProjectDetail content={projectDetailApi[3].projectDetailContent} />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
