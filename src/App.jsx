import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Faculty from './pages/Faculty'
import Programs from './pages/Programs'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0a0f2c] text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/programs" element={<Programs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App