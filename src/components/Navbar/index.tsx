import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Logo } from '@/assets/index';
import { NAV_LINKS } from '@/constants';
import { StyledNavbar, StyledNavItems } from './styles';
import { INavLinks } from '@/types';

const Navbar = () => {
  const renderNavLinks = (nav: INavLinks[][]) => {
    return (
      <>
        {nav.map((el, i) => (
          <ul
            className="nav-links-container"
            key={i + 1 + Date.now() + Math.random() * 100000}
          >
            {el.map(({ name, path }) => (
              <li key={path} className="links nav-link-items">
                <Link href={path}>
                  <a className="links nav-links">{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </>
    );
  };

  return (
    <StyledNavbar>
      <StyledNavItems>
        <Link href={'/'}>
          <div className="logo-container">
            <div className="image-wrapper">
              <Image className="logo" src={Logo} />
            </div>
            <p className="logo-text">STICA One Library</p>
          </div>
        </Link>
        {renderNavLinks(NAV_LINKS)}
      </StyledNavItems>
    </StyledNavbar>
  );
};

export default Navbar;
