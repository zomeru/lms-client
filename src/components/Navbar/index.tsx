import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { APP_NAME, NAV_LINKS } from '@/constants';
import { INavLinks } from '@/types';
import { keyGenerator } from '@/utils/functions';
import { useAuth, USER_STORAGE_KEY } from '@/contexts/AuthContext';
import { Logo, DefaultProfile } from '@/assets/index';
import { StyledNavbar, StyledNavItems } from './styles';

const Navbar = () => {
  const router = useRouter();
  const { user } = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem(USER_STORAGE_KEY);

    window.location.href = window.location.origin;
  };

  const renderNavLinks = (nav: INavLinks[][]) => (
    <>
      {nav.map((el, i) => {
        if (router.pathname === '/auth' && i === 1) return null;
        if (user && i === 1) return null;

        return (
          <ul
            className="nav-links-container"
            key={`${el[i]}_${keyGenerator(i)}`}
          >
            {el.map(({ name, path }) => (
              <li key={path} className="links nav-link-items">
                <Link href={path} passHref>
                  {/* <p className="links nav-links">{name}</p> */}
                  <a href={`/${path}`} className="links nav-links">
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        );
      })}
      {user && (
        <div className="user-nav">
          <div className="user-nav-item user-image-wrapper">
            <Image
              src={DefaultProfile}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <Link href="/my-books" passHref>
            <div className="user-nav-item links user-link-items">
              <a href="/my-books" className="links nav-links">
                My books
              </a>
            </div>
          </Link>
          <div
            className="user-nav-item logout-button links user-link-items"
            onClick={handleLogout}
            onKeyDown={handleLogout}
            role="button"
            tabIndex={0}
          >
            <p className="links nav-links">Log out</p>
          </div>
        </div>
      )}
    </>
  );
  return (
    <StyledNavbar>
      <StyledNavItems>
        <Link href="/" passHref>
          <div className="logo-container">
            <div className="image-wrapper">
              <Image className="logo" src={Logo} />
            </div>
            <p className="logo-text">{APP_NAME}</p>
          </div>
        </Link>
        {renderNavLinks(NAV_LINKS)}
      </StyledNavItems>
    </StyledNavbar>
  );
};

export default Navbar;
