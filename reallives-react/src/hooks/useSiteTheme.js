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

import { useEffect, useRef } from 'react';

import { useTheme } from '@hooks/useTheme';

/**
 * Apply a layout's default theme only on the user's first visit (no saved preference).
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

/**
 * Always apply the given theme while this layout is mounted (e.g. gamer = dark).
 * Restores the previous theme when the user leaves the layout.
 */
export function useForcedSiteTheme(forcedTheme) {
  const { setTheme } = useTheme();
  const previousThemeRef = useRef(null);

  useEffect(() => {
    previousThemeRef.current =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'dark'
        : 'light';

    setTheme(forcedTheme);

    return () => {
      setTheme(previousThemeRef.current ?? 'light');
    };
  }, [forcedTheme, setTheme]);
}
