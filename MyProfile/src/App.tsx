import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import ProjectDetail from './pages/ProjectDetail'
import { projectDetailApi } from './api/projectDetail.api'

function App() {
  return (
    <div className='my-profile'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path={projectDetailApi.shopee.path} element={<ProjectDetail />} />
        <Route path={projectDetailApi.event.path} element={<ProjectDetail />} />
        <Route path={projectDetailApi.article.path} element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}

export default App
