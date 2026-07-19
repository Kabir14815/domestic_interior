import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import OurWorkPage from './pages/OurWorkPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ServiceCategoryPage from './pages/ServiceCategoryPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function ExternalRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/our-work/:projectId" element={<ProjectDetailPage />} />
        <Route
          path="/services/category/shading-solutions"
          element={<ExternalRedirect to="https://chhayashading.com/" />}
        />
        <Route path="/services/category/:categoryId" element={<ServiceCategoryPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
