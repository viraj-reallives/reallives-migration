import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SiteContext from '@context/SiteContext';
import Navbar from '@components/common/Navbar/Navbar';
import Footer from '@components/common/Footer/Footer';
import GamerGoogleTag from '@components/gamer/GamerGoogleTag/GamerGoogleTag';
import styles from './GamerLayout.module.css';

export default function GamerLayout() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("rl-theme", "dark");
  }, []);

  return (
    <SiteContext.Provider value={{ siteKey: 'gamer' }}>
      <GamerGoogleTag />
      <div className={styles.layout} data-site="gamer">
        <Navbar />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </SiteContext.Provider>
  );
}
