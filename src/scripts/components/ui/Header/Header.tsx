import React from 'react';
import './Header.scss';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import LinkedinLogo from 'images/logos/linkedin.svg';
import NotionLogo from 'images/logos/notion.svg';
import DevToLogo from 'images/logos/dev.svg';
import GithubLogo from 'images/logos/github.svg';
import BehanceLogo from 'images/logos/behance.svg';
import FCCLogo from 'images/logos/freeCodeCamp.svg';

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
        link="https://www.behance.net/singhshemona/projects"
        content={<img src={BehanceLogo} alt="Github Logo" />}
      />
      <ExternalLink
        link="https://github.com/singhshemona"
        content={<img src={GithubLogo} alt="Github Logo" />}
      />
      <ExternalLink
        link="https://forum.freecodecamp.org/u/singhshemona/activity"
        content={<img src={FCCLogo} alt="Free Code Camp Logo" />}
      />
      <ExternalLink
        link="https://dev.to/singhshemona"
        content={<img src={DevToLogo} alt="Dev to Logo" />}
      />
    </header>
  );
}

export default Header;
