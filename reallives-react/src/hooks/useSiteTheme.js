import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme';

/**
 * Applies the section default theme on mount and when the route changes.
 * Light everywhere except gamer (dark). Leaving gamer restores light.
 */
export function useSiteTheme(defaultTheme) {
  const { setTheme } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    setTheme(defaultTheme);

    if (defaultTheme !== 'dark') {
      return undefined;
    }

    return () => {
      setTheme('light');
    };
  }, [defaultTheme, setTheme, pathname]);
}
