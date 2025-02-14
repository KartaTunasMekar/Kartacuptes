import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Schedule from './pages/Schedule'
import Awards from './pages/Awards'
import History from './pages/History'
import Arts from './pages/Arts'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pendaftaran" element={<Registration />} />
          <Route path="/jadwal" element={<Schedule />} />
          <Route path="/hadiah" element={<Awards />} />
          <Route path="/sejarah" element={<History />} />
          <Route path="/kesenian" element={<Arts />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
