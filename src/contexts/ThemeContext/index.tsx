import { createContext } from 'react';
import { ThemeProvider as TP } from 'styled-components';

import { darkTheme, lightTheme } from '@styles/theme';
import { useTheme } from '@/hooks';
import { Theme, ThemeModes } from '@/hooks/useTheme';

interface ThemeContextProps {
  theme: typeof darkTheme | typeof lightTheme;
  toggleTheme: Theme | (() => void);
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: darkTheme,
  toggleTheme: () => {}
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [theme, toggleTheme] = useTheme();
  const themeMode = theme === ThemeModes.LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <TP theme={themeMode}>{children}</TP>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
