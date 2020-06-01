import React from 'react';
import './Button.scss';

type Props = {
  level: string,
  content: any,
  onClick?: () => (any),
}

export const Button = ({ level, content, onClick }: Props) =>
  <button type="button" className={ level } onClick={ onClick } aria-label={ content }>
    { content }
  </button>