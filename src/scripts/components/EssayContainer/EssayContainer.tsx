import React from 'react';
import './EssayContainer.scss';

type Props = {
  title: string,
  content: string,
  timeToRead: number,
  lastEdited: string,
  published: string,
}

export const EssayContainer = ({ title, content, timeToRead, lastEdited, published }: Props) => {
  return (
    <div className="essay-container">
      <h1 className="title">{title}</h1>
      <div className="details">
        <p>{timeToRead} minute read</p>
        <p>Last edited: {lastEdited}</p>
        <p>Published: {published}</p>
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}