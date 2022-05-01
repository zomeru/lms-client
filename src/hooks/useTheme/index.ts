import { useState, useEffect } from 'react';

export enum ThemeModes {
  LIGHT = 'light',
  DARK = 'dark'
}

export const THEME_STORAGE_KEY = 'LMS_THEME_STORAGE_KEY';

export type Theme = ThemeModes.LIGHT | ThemeModes.DARK;

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(ThemeModes.LIGHT);

  const setMode = (mode: Theme) => {
    window.localStorage.setItem(THEME_STORAGE_KEY, mode);
    setTheme(mode);
  };

  const toggleTheme = (): void => {
    theme === ThemeModes.LIGHT
      ? setMode(ThemeModes.DARK)
      : setMode(ThemeModes.LIGHT);
  };

  useEffect(() => {
    const getTheme = () => {
      const localTheme: Theme = window.localStorage.getItem(
        THEME_STORAGE_KEY
      ) as Theme;
      localTheme ? setTheme(localTheme) : setTheme(ThemeModes.LIGHT);
    };

    getTheme();
  }, []);

  return [theme, toggleTheme];
};

export default useTheme;
