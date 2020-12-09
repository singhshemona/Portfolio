import React from 'react';
import Header from '../ui/Header/Header';
import OpeningText from '../ui/OpeningText/OpeningText';
import ExternalLink from '../ui/ExternalLink/ExternalLink';
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
          <p>I also enjoy:</p>
          <ul className="hobbies" title="hobbies">
              <li>
                <ExternalLink
                  link='https://github.com/singhshemona'
                  content='Building solutions for various facets of life'
                />
              </li>
              <li>
                <ExternalLink
                  link='https://dev.to/singhshemona'
                  content='Writing about technical discoveries'
                />
              </li>
              <li>
                <ExternalLink
                  link='https://forum.freecodecamp.org/u/singhshemona/summary'
                  content='Working towards answers'
                />
              </li>
          </ul>
          <Form />
        </div>
        <div className="right">
          <Essays />
        </div>
      </div>
    </div>
  );
}

export default Home;
