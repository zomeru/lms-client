import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';

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

    setTimeout(() => {
      window.location.href = window.location.origin;
    }, 500);
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
        <Popover className="profile-popover">
          <Popover.Button className="profile-button">
            <div className="profile-button-container">
              <div className="profile-image-wrapper">
                <Image
                  src={user?.photoUrl || DefaultProfile}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <span className="profile-username">{user?.username}</span>
            </div>
          </Popover.Button>
          <Transition
            as={React.Fragment}
            enter="enter"
            enterFrom="enter-from"
            enterTo="enter-to"
            leave="leave"
            leaveFrom="leave-from"
            leaveTo="leave-to"
          >
            <Popover.Panel className="profile-popover-panel">
              <div className="popover-panel-container">
                <button
                  type="button"
                  className="panel-item"
                  onClick={() => router.push('/my-books')}
                >
                  <div className="panel-item-text">My books</div>
                </button>
                <button
                  type="button"
                  className="panel-item"
                  onClick={() => router.push(`/${user?.username}`)}
                >
                  <div className="panel-item-text">Profile</div>
                </button>
                <button
                  type="button"
                  className="panel-item"
                  onClick={() => router.push('/settings')}
                >
                  <div className="panel-item-text">Settings</div>
                </button>
                <button
                  type="button"
                  className="panel-item"
                  onClick={handleLogout}
                >
                  <div className="panel-item-text">Log out</div>
                </button>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
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
