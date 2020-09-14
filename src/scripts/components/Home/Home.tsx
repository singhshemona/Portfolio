import React from 'react';
import Header from '../ui/Header/Header';
import OpeningText from '../ui/OpeningText/OpeningText';
import {Essays} from '../ui/Essays/Essays';
import './Home.scss';

export const Home = () => {
  return (
    <div>
      <Header/>
      <div className="skeleton">
        <div className="left">
          <OpeningText />
        </div>
        <div className="right">
          <Essays />
        </div>
      </div>
    </div>
  );
}

export default Home