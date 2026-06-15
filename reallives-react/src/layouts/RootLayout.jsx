import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@context/ThemeContext';
import GoogleTag from '@components/common/GoogleTag/GoogleTag';
import MobileAppBanner from '@components/common/MobileAppBanner/MobileAppBanner';
import '@/styles/global.css';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <GoogleTag />
      <Outlet />
      <MobileAppBanner />
    </ThemeProvider>
  );
}
