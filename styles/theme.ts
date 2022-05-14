export const colors = {
  primary: '#003262',
  primary_50: '#003362c0',
  secondary: '#FDB515',
  white: '#f5f5f5',
  black: '#414141',
  lightGray: '#e4e4e4'
};

export const lightTheme: any = {
  body: '#E8EEF1', // WHITE
  textMain: '#1E3D58', // NAVY BLUE
  textSecond: '#607d8b', // BLUE-ISH GRAY
  accentMain: '#057DCD', // ROYAL BLUE
  floatBG: '#d3edfe',
  menuNav: '#cfe7e4',
  blogTitleCard: 'rgba(232, 238, 241, 0.85)',
  colorPrimary: colors.primary,
  colorPrimary_50: colors.primary_50,
  colorSecondary: colors.secondary,
  whiteTLM: colors.white,
  blackTLM: colors.black
};

export const darkTheme: any = {
  body: '#0d1a25', // NAVY BLUE
  textMain: '#E8EEF1', // WHITE
  textSecond: '#9e9e9e', // GRAY
  accentMain: '#43B0F1', // BLUE GROTTO
  floatBG: '#011827',
  menuNav: '#142746',
  blogTitleCard: 'rgba(13, 26, 37, 0.85)',
  colorPrimary: '#003262',
  colorPrimary_50: colors.primary_50,
  colorSecondary: '#FDB515',
  whiteTLM: '#f5f5f5',
  blackTLM: '#000000'
};

export type ThemeProps = {
  theme: typeof lightTheme | typeof darkTheme;
};
