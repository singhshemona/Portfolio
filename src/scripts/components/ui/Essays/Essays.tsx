import React from 'react';
import { Link } from 'react-router-dom';
import essays from './allEssays';
import './Essays.scss';

const Essays = () => {
  return (
    <>
      {
        essays.map((essay) => (
          <div className='essay'>
            <h3><Link to={essay.link}>{essay.title}</Link></h3>
            <div>
              {essay.date}
              {essay.timeToRead}
            </div>
            <p className='content'>{essay.content.substring(0, 50)}</p> 
          </div>
        ))
      } 
    </>
  );
}

export default Essays;