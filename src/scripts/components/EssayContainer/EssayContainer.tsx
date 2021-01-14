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
      <h2 className="title">{title}</h2>
      <div className="details">
        <p className="time">{timeToRead} minute read</p>
        <p className="last-edit">Last edited: {lastEdited}</p>
        <p className="written">Written: {written}</p>
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}