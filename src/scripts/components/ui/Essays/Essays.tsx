import React from 'react';
import { Link } from 'react-router-dom';
import essays from './allEssays';
import './Essays.scss';

const Essays = () => {
  return (
    <>
      {
        essays.map((essay) => (
          <div key={essay.id} className='essay'>
            <h3><Link to={essay.link}>{essay.title}</Link></h3>
            <div className="date-time">
              <p className="date">{essay.date}</p>
              <p className="time">{essay.timeToRead} minute read</p>
            </div>
            <p className='content'>{essay.content}</p> 
          </div>
        ))
      } 
    </>
  );
}

export default Essays;