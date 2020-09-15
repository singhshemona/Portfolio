import React from 'react';
import './ExternalLink.scss';

type Props = {
  link: string,
  content: any,
  target?: string,
}

const ExternalLink = ({ link, content, target }: Props) =>
  <a className={ 'link ' + target } href={ link } target="_blank" rel="noopener noreferrer">
    { content }
  </a>

export default ExternalLink;
