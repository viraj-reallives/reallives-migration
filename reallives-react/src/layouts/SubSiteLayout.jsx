import { Outlet } from 'react-router-dom';
import SiteContext from '@context/SiteContext';
import Navbar from '@components/common/Navbar/Navbar';
import Footer from '@components/common/Footer/Footer';
import styles from './SubSiteLayout.module.css';

export default function SubSiteLayout({ siteKey }) {
  return (
    <SiteContext.Provider value={{ siteKey }}>
      <div className={styles.layout}>
        <Navbar />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </SiteContext.Provider>
  );
}
