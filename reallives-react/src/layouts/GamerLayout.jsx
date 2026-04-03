import { Outlet } from 'react-router-dom';
import SiteContext from '@context/SiteContext';
import Navbar from '@components/common/Navbar/Navbar';
import Footer from '@components/common/Footer/Footer';
import styles from './GamerLayout.module.css';

export default function GamerLayout() {
  return (
    <SiteContext.Provider value={{ siteKey: 'gamer' }}>
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
