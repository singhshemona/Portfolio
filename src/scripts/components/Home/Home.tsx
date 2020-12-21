import React from 'react';
import Header from '../ui/Header/Header';
import OpeningText from '../ui/OpeningText/OpeningText';
import Form from '../ui/Form';
import Essays from '../ui/Essays/Essays';
import './Home.scss';

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="skeleton">
        <div className="left">
          <OpeningText />
        </div>
        <div className="right">
          <h2>Writing</h2>
          <Essays />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Home;
