import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import OurWorkPage from './pages/OurWorkPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/our-work/:projectId" element={<ProjectDetailPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
