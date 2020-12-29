import React from 'react';
import './EssayContainer.scss';

type Props = {
  title: String,
  content: String,
  timeToRead: Number
}

export const EssayContainer = ({ title, content, timeToRead }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{timeToRead} minute read</h3>
      {/* <p dangerouslySetInnerHTML={{ __html: content }}></p> */}
      <p>{content}</p>
    </div>
  );
}