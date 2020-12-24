import React from 'react';
import './Button.scss';

type Props = {
  content: any,
  onClick?: () => (any),
}

export const Button = ({ content, onClick }: Props) =>
  <button type="button" className='button' onClick={ onClick } aria-label={ content }>
    { content }
  </button>
