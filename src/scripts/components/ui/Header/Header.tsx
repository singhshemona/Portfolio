import React from 'react';
import './Header.scss';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import LinkedinLogo from 'images/linkedin.svg';
import NotionLogo from 'images/notion.svg';
import DevToLogo from 'images/dev-logo.svg';

const Header = () => {
  return (
    <header className="navigation">
      <ExternalLink
        link="https://www.linkedin.com/in/shemonasingh/"
        content={
          <img src={LinkedinLogo} alt="Linkedin Logo" />
        }
      />
      <ExternalLink
        link="https://www.notion.so/shemona/Get-Started-cb739b6a13ce490ba1d422f204397071"
        content={
          <img src={NotionLogo} alt="Notion Logo" />
        }
      />
      <ExternalLink
        link="https://dev.to/singhshemona"
        content={<img src={DevToLogo} alt="Dev to Logo" />}
      />
    </header>
  );
}

export default Header;
