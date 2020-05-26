import React from 'react';
import './Link.scss';

function ExternalLink(link: string, content: any) {
  return (
      <a className="link" href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
  );
}

export default ExternalLink;
