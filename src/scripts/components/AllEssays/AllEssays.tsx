import React, { useContext } from 'react';
import essays from './essays';
import './AllEssays.scss';
import ID from '../../pages/App/App' 
import { Link } from "react-router-dom";

export const AllEssays = () => {

  // const { number, setNumber } = useContext(ID);

  const essayUpdate = (id: Number) => {
    // setNumber(id);
  }

  return (
    <div className='essays'>
      {essays.map((essay) => (
        <div key={essay.id} className='essay'>
          <h3>
            <Link onClick={() => essayUpdate(essay.id)} className="title-link" to="/essay">{essay.title}</Link>
          </h3>
          <p className="time">{essay.timeToRead} minute read</p>
          <p className='content'>{essay.content}</p>
          <h4>
            <Link className="read-more-link" to="/essay">Read More →</Link>
          </h4>
        </div>
      ))}
    </div>
  );
}
