import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileCtaBar from '../components/layout/MobileCtaBar';
import useScrollToTop from '../hooks/useScrollToTop';
import './MainLayout.css';

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="app-main">
        <Outlet />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
