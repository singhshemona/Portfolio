import React from 'react';
import './OpeningText.scss';
import { ExternalLink } from '../ExternalLink/ExternalLink';

const OpeningText = () => {
  return (
    <div className="opening-text" >
      <h1>I'm Shemona, I design with code.</h1>
      <h2>Currently a Design Technologist</h2>
      <ExternalLink
        link="mailto:singhshemona@gmail.com"
        content="Let's Collaborate"
      />
    </div>
  );
}

export default OpeningText;
