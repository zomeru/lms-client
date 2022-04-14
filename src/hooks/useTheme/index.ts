import { useState, useEffect } from 'react';

export enum ThemeModes {
  light = 'light',
  dark = 'dark'
}

export const THEME_KEY = 'LMS_THEME_STORAGE_KEY';

export type Theme = ThemeModes.light | ThemeModes.dark;

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(ThemeModes.light);

  const setMode = (mode: Theme) => {
    window.localStorage.setItem(THEME_KEY, mode);
    setTheme(mode);
  };

  const toggleTheme = (): void => {
    theme === ThemeModes.light
      ? setMode(ThemeModes.dark)
      : setMode(ThemeModes.light);
  };

  useEffect(() => {
    const getTheme = () => {
      const localTheme: Theme = window.localStorage.getItem(THEME_KEY) as Theme;
      localTheme ? setTheme(localTheme) : setTheme(ThemeModes.light);
    };

    getTheme();
  }, []);

  return [theme, toggleTheme];
};

export default useTheme;
