import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@context/ThemeContext';
import GoogleTag from '@components/common/GoogleTag/GoogleTag';
import '@/styles/global.css';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <GoogleTag />
      <Outlet />
    </ThemeProvider>
  );
}
