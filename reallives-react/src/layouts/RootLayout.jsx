import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@context/ThemeContext';
import '@/styles/global.css';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}
