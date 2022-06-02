import { INavLinks } from './types';

export const APP_NAME = 'One STICA Library';

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
      name: 'Sign in / Sign up',
      path: '/auth'
    }
    // {
    //   name: 'Sign up',
    //   path: '/signup'
    // }
  ]
];

export const FOOTER_LINKS = [
  {
    title: 'Help',
    links: [
      { name: 'FAQ', path: '/faq' },
      { name: 'Legal Notice', path: '/legal-notice' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of use', path: '/terms-of-use' }
    ]
  },
  {
    title: 'Social',
    links: [
      { name: 'Facebook', path: 'https://www.facebook.com/STIAlabang/' },
      { name: 'Instagram', path: 'https://www.instagram.com/stialabang/' },
      { name: 'Tiktok', path: 'https://www.tiktok.com/@stialabang/' },
      { name: 'Twitter', path: 'https://twitter.com/stialabang' },
      {
        name: 'Youtube',
        path: 'https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw'
      }
    ]
  },
  {
    title: 'Contact',
    links: [
      { name: 'email@gmail.com', path: 'mailto:email@gmail.com' },
      { name: '09123456780', path: '#' }
      // {
      //   name: 'C29W+VQG, Montillano St, Alabang, Muntinlupa, 1780 Metro Manila',
      //   path: '#'
      // }
    ]
  }
];

export const SIGN_IN_INPUTS = [
  { name: 'Email', type: 'email' },
  { name: 'Password', type: 'password' }
];

export const SIGN_UP_INPUTS = [
  // { name: 'Student No.', type: 'text' },
  { name: 'First Name', type: 'text' },
  { name: 'Last Name', type: 'text' },
  { name: 'Email', type: 'email' },
  { name: 'Username', type: 'text' },
  { name: 'Password', type: 'password' },
  { name: 'Confirm Password', type: 'password' }
];

export const BOOK_GENRES_FICTION = [
  'Action and adventure',
  'Alternate history',
  'Anthology',
  'Chick lit',
  "Children's",
  'Classic',
  'Comic book',
  'Coming-of-age',
  'Crime',
  'Drama',
  'Fairytale',
  'Fantasy',
  'Graphic novel',
  'Historical fiction',
  'Horror',
  'Mystery',
  'Paranormal romance',
  'Picture book',
  'Poetry',
  'Political thriller',
  'Romance',
  'Satire',
  'Science fiction',
  'Short story',
  'Suspense',
  'Thriller',
  'Western',
  'Young adult'
];

export const BOOK_GENRES_NONFICTION = [
  'Art/architecture',
  'Autobiography',
  'Biography',
  'Business/economics',
  'Crafts/hobbies',
  'Cookbook',
  'Diary',
  'Dictionary',
  'Encyclopedia',
  'Food',
  'Guide',
  'Health/fitness',
  'History',
  'Home and garden',
  'Humor',
  'Journal',
  'Math',
  'Memoir',
  'Philosophy',
  'Politics',
  'Prayer',
  'Religion',
  'Textbook',
  'True crime',
  'Review',
  'Science',
  'Self help',
  'Sports and leisure',
  'Travel',
  'True crime'
];

export const SETTINGS_SIDEBAR = {
  USER: ['Profile'],
  ADMIN: [
    'Books',
    'Request history',
    'Pending requests',
    'Approved requests',
    'Rejected requests',
    'Cancelled requests',
    'Returned books'
  ]
};

export const VALID_FILE_TYPES = ['image/png', 'image/gif', 'image/jpeg'];
