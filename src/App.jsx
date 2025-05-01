
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Register from '@/components/Register';
import Feed from '@/components/Feed';
import Events from '@/components/Events';
import Chat from '@/components/Chat';
import Announcements from '@/components/Announcements';
import FAQ from '@/components/FAQ';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div>
        <motion.nav 
          className="navbar"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container navbar-content">
            <Link to="/" className="logo">EduSocial</Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">Inicio</Link>
              <Link to="/events" className="nav-link">Eventos</Link>
              <Link to="/chat" className="nav-link">Chat</Link>
              <Link to="/announcements" className="nav-link">Anuncios</Link>
              <Link to="/faq" className="nav-link">FAQ</Link>
              <Link to="/register" className="nav-link">Registro</Link>
            </div>
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Inicio</Link>
              <Link to="/events" className="nav-link" onClick={toggleMobileMenu}>Eventos</Link>
              <Link to="/chat" className="nav-link" onClick={toggleMobileMenu}>Chat</Link>
              <Link to="/announcements" className="nav-link" onClick={toggleMobileMenu}>Anuncios</Link>
              <Link to="/faq" className="nav-link" onClick={toggleMobileMenu}>FAQ</Link>
              <Link to="/register" className="nav-link" onClick={toggleMobileMenu}>Registro</Link>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="container main-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events" element={<Events />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </motion.div>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
