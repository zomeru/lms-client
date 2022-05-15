import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Logo } from '@/assets/index';
import { APP_NAME, NAV_LINKS } from '@/constants';
import { INavLinks } from '@/types';
import { keyGenerator } from '@/utils';
import { StyledNavbar, StyledNavItems } from './styles';

const Navbar = () => {
  const router = useRouter();

  const renderNavLinks = (nav: INavLinks[][]) => (
    <>
      {nav.map((el, i) => {
        if (router.pathname === '/auth' && i === 1) return null;

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
