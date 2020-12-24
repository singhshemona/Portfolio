import React from 'react';
import './ExternalLink.scss';

type Props = {
  link: string,
  content: any,
}

export const ExternalLink = ({ link, content }: Props) =>
  <a className='link' href={ link } target="_blank" rel="noopener noreferrer">
    { content }
  </a>
