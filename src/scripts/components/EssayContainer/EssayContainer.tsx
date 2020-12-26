import React from 'react';
import './EssayContainer.scss';

type Props = {
  title: String,
  content: String
}

export const EssayContainer = ({ title, content }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      {content}
    </div>
  );
}