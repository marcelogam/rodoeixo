import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Parts from './pages/Parts';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-slate-800">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/pecas" element={<Parts />} />
            <Route path="/servicos" element={<Services />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
