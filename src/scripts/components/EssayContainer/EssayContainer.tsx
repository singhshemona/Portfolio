import React from 'react';
import './EssayContainer.scss';

type Props = {
  title: string,
  content: string,
  timeToRead: number,
  lastEdited: string,
  written: string,
}

export const EssayContainer = ({ title, content, timeToRead, lastEdited, written }: Props) => {
  return (
    <div className="essay-container">
      <h2>{title}</h2>
      <h3>{timeToRead} minute read</h3>
      <p>{lastEdited}</p>
      <p>{written}</p>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}