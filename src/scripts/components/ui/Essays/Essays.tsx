import React from 'react';
import essays from './allEssays';
import './Essays.scss';
import { ExternalLink } from '../ExternalLink/ExternalLink';

export const Essays = () => {
  return (
    <div className='essays'>
      {essays.map((essay) => (
          <div key={essay.id} className='essay'>
            <h3>
              <ExternalLink
                link={essay.link}
                content={essay.title}
              />
            </h3>
            <p className="time">{essay.timeToRead} minute read</p>
            <p className='content'>{essay.content}</p> 
            <h4>
              <ExternalLink
                link={essay.link}
                content={'Read More →'}
              />
            </h4>
          </div>
      ))}
    </div>
  );
}
