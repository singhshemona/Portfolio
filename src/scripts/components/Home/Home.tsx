import React from 'react';
import Header from '../ui/Header/Header';
import OpeningText from '../ui/OpeningText/OpeningText';
import essays from '../../essays';
import './Home.scss';

export const Home = () => {
  return (
    <div>
      <Header/>
      <div className="skeleton">
        <div>
          <OpeningText />
        </div>
        <div>
          {essays.map((essay, index) => (
            <div key={index}>
              <h3>{essay.title}</h3>
              <p>{essay.date}</p>
              <p>{essay.content.substring(0, 50)}</p> 
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}
