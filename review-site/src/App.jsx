import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ShopDetail from './pages/ShopDetail'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-['Noto_Sans_JP']">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:id" element={<ShopDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
