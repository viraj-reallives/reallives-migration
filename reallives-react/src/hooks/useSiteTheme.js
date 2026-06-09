// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useTheme } from '@hooks/useTheme';


// export function useSiteTheme(defaultTheme) {
//   const { setTheme } = useTheme();
//   const { pathname } = useLocation();

//   useEffect(() => {
//     setTheme(defaultTheme);

//     if (defaultTheme !== 'dark') {
//       return undefined;
//     }

//     return () => {
//       setTheme('light');
//     };
//   }, [defaultTheme, setTheme, pathname]);
// }

import { useEffect } from 'react';
import { useTheme } from '@hooks/useTheme';

/**
 * Apply default theme only on first visit.
 * User-selected theme remains unchanged when navigating pages.
 */
export function useSiteTheme(defaultTheme) {
  const { setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem('rl-theme');

    if (!savedTheme) {
      setTheme(defaultTheme);
    }
  }, [defaultTheme, setTheme]);
}
