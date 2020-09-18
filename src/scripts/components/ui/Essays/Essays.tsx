import React from 'react';
import essays from './allEssays';
import ExternalLink from '../ExternalLink/ExternalLink';

const Essays = () => {
  return (
    <>
      {
        essays.map((essay) => (
          <div key={essay.id} className='essay'>
            <h3>
              <ExternalLink
                link={essay.link}
                content={essay.title}
              />
            </h3>
            <p className="date-time">{essay.date} - {essay.timeToRead} minute read</p>
            <p className='content'>{essay.content}</p> 
          </div>
        ))
      } 
    </>
  );
}

export default Essays;