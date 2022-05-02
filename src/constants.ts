import { INavLinks } from './types';

export const APP_NAME = 'STICA One Library';

export const NAV_LINKS: INavLinks[][] = [
  [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Books',
      path: '/books'
    },
    {
      name: 'About',
      path: '/about'
    }
  ],
  [
    {
      name: 'Sign in',
      path: '/signin'
    },
    {
      name: 'Sign up',
      path: '/signup'
    }
  ]
];
