import React from 'react';
import './Header.scss';
import LinkedinLogo from '../../../../images/linkedin.png';

function Header() {
  return (
    <header className="navigation">
      <a className="social-media" href="https://www.linkedin.com/in/shemonasingh/" target="_blank" rel="noopener noreferrer">
        <img src={LinkedinLogo} alt="Linkedin Logo" />
      </a>
      <a className="button primary-button" href="mailto:singhshemona@gmail.com">Let's Collaborate</a>
      <a className="button primary-button" href="mailto:singhshemona@gmail.commailto:singhshemona@gmail.commailto:singhshemona@gmail.commailto:singhshemona@gmail.commailto:singhshemona@gmail.commailto:singhshemona@gmail.commailto:singhshemona@gmail.commailto:singhshemona@gmail.commailto:singhshemona@gmail.commailto:singhshemona@gmail.commailto:singhshemona@gmail.commailto:singhshemona@gmail.commailto:singhshemona@gmail.commailto:singhshemona@gmail.com">Let's Collaborate</a>
      <a className="button secondary-button" href="https://www.notion.so/shemona/Get-Started-cb739b6a13ce490ba1d422f204397071" target="_blank" rel="noopener noreferrer">My Second Brain</a>
    </header>
  );
}

export default Header;
