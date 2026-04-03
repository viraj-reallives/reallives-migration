import { Outlet } from 'react-router-dom';
import LandingFooter from '@components/landing/LandingFooter/LandingFooter';

export default function LandingLayout() {
  return (
    <>
      <Outlet />
      <LandingFooter />
    </>
  );
}
