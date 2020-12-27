import React from 'react';
import './EssayContainer.scss';

type Props = {
  title: String,
  content: string
}

export const EssayContainer = ({ title, content }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  );
}