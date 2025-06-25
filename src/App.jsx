import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Catalogue from './pages/Catalogue';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          {/*
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/gallery" element={<Gallery />} />
          */}
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
