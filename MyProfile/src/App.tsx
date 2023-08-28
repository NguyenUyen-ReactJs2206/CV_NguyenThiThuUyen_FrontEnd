import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Main from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import { projectDetailApi } from './api/projectDetail.api'
import { useEffect } from 'react'
import MainLayout from './pages/MainLayout'
import NavHeader from './components/NavHeader'
import Footer from './components/Footer/Footer'

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
          <Route path={projectDetailApi.shopee.path} element={<ProjectDetail />} />
          <Route path={projectDetailApi.event.path} element={<ProjectDetail />} />
          <Route path={projectDetailApi.article.path} element={<ProjectDetail />} />
        </Routes>
      </div>
    </>
  )
}

export default App
