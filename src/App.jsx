import { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Lazy Loading for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Products = lazy(() => import('./pages/Products'))
const Contact = lazy(() => import('./pages/Contact'))

const Loading = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#0093d0] border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
