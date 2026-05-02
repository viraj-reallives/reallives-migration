// import { Outlet } from 'react-router-dom';
// import LandingFooter from '@components/landing/LandingFooter/LandingFooter';

// export default function LandingLayout() {
//   return (
//     <>
//       <Outlet />
//       <LandingFooter />
//     </>
//   );
// }


import { Outlet, useLocation } from 'react-router-dom';
import LandingFooter from '@components/landing/LandingFooter/LandingFooter';

export default function LandingLayout() {
  const location = useLocation();

  const hideFooter = location.pathname.startsWith('/reallives/licenses');

  return (
    <>
      <Outlet />

      {/* 👇 condition */}
      {!hideFooter && <LandingFooter />}
    </>
  );
}