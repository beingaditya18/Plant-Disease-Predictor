// components/NavLinks.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const NavLinks = ({ navLinksContainerRef }) => {
  const { t } = useTranslation();

  const links = [
    { id: 'home', label: t('nav.home') },
    { id: 'features', label: t('features.title') },
    { id: 'diseases', label: t('diseases.title') },
    { id: 'weather', label: t('weather.title') },
    { id: 'crops', label: t('crops.title') },
    { id: 'contact', label: t('contact.title') },
  ];

  return (
    <ul ref={navLinksContainerRef} className="navbar-nav mx-auto">
      {links.map(link => (
        <li key={link.id} className="nav-item">
          <a className="nav-link text-black text-decoration-underline" href={`#${link.id}`}>
            <b>{link.label}</b>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
