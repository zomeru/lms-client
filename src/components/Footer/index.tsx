import React from 'react';

import { APP_NAME, FOOTER_LINKS } from '@/constants';
import { keyGenerator } from '@/utils';
import { StyledFooter } from './style';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-link-wrapper">
          {FOOTER_LINKS.map((el, i) => (
            <div key={keyGenerator(i)} className="link-wrapper">
              <h3 className="footer-title">{el.title}</h3>
              <ul>
                {el.links.map((link, j) => (
                  <li key={keyGenerator(j)} className="links link-list">
                    {link.path === '#' ? (
                      <p>{link.name}</p>
                    ) : (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="links footer-link"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="yellow-line" />
        <p className="copyright">Copyright &copy; 2022 {APP_NAME}</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
