import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gear from './pages/Gear';
import Contact from './pages/Contact';
import './styles/global.scss';

export default function App() {
  const [page, setPage] = useState('Home');
  const [fadeKey, setFadeKey] = useState(0);

  const navigate = (p) => {
    setPage(p);
    setFadeKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (page) {
      case 'Home':    return <Home key={fadeKey} />;
      case 'About':   return <About key={fadeKey} />;
      case 'Gear':    return <Gear key={fadeKey} />;
      case 'Contact': return <Contact key={fadeKey} />;
      default:        return <Home key={fadeKey} />;
    }
  };

  return (
    <div className="app">
      {/* Ambient background glows */}
      <div className="ambient-glow ambient-glow--top" />
      <div className="ambient-glow ambient-glow--bottom" />

      <Navbar currentPage={page} onNavigate={navigate} />

      <main className="main-content">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}