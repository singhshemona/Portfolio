import React from 'react';
import essays from './essays';
import './AllEssays.scss';
import { Link } from "react-router-dom";

export const AllEssays = () => {
  return (
    <div className='essays'>
      {essays.map((essay) => (
        <div key={essay.id} className='essay'>
          <Link className="title-link" to="/essay">
            <h3>{essay.title}</h3>
          </Link>
          <p className="time">{essay.timeToRead} minute read</p>
          <p className='content'>{essay.content}</p>
          <Link className="read-more-link" to="/essay">
            <h4>Read More →</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}
