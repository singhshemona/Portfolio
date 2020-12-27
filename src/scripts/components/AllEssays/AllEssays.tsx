import React from 'react';
import { useDispatch } from 'react-redux'
import essays from './essays';
import './AllEssays.scss';
import { Link } from "react-router-dom";

export const AllEssays = () => {

  const dispatch = useDispatch()

  return (
    <div className='essays'>
      {essays.map((essay) => (
        <div key={essay.id} className='essay'>
          <h3>
            <Link 
              onClick={
                () => {
                  dispatch({
                  type: 'UPDATE_ESSAY',
                  payload: { essayId: essay.id }
                })}
              } 
              className="title-link" 
              to="/essay">
                {essay.title}
            </Link>
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
