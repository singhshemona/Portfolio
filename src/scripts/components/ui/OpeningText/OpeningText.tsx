import React from 'react';
import './OpeningText.scss';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import { Button } from '../Button/Button';

const OpeningText = () => {
  return (
    <div className="opening-text" >
      <span role="img" aria-label="Female Technologist Emoji" className="emoji">👩🏽‍💻</span>
      <h1>I'm Shemona, I <span className="design">design</span> with <code>code</code>.</h1>
      <h2>
        Currently a Design Technologist at {' '}
        <ExternalLink
        link="https://www.indeed.com/"
        content="Indeed.com"
        />
      </h2>
      <Button
        level="primary-button"
        content="Let's Collaborate"
        onClick={() =>
          window.location.href='https://www.linkedin.com/in/shemonasingh/detail/contact-info/'
        }
      />
    </div>
  );
}

export default OpeningText;
