import React from 'react';
import { Link } from 'react-router-dom';
import essays from './allEssays';
import './Essays.scss';

const Essays = () => {
  return (
    <div className='essays'>
      {
        essays.map((essay) => (
          <div className='essay'>
            <h3><Link to={essay.link}>{essay.title}</Link></h3>
            {essay.date}
            <p className='content'>{essay.content.substring(0, 50)}</p> 
          </div>
        ))
      } 
    </div>
  );
}

export default Essays;