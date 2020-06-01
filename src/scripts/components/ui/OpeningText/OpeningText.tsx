import React from 'react';
import './OpeningText.scss';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import { Button } from '../Button/Button';

const OpeningText = () => {

  const email = () => {
    window.location.href = "mailto:singhshemona@gmail.com";
    console.log(window.location.href);
  };

  return (
    <div className="opening-text" >
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
        onClick={email}
      />
    </div>
  );
}

export default OpeningText;
