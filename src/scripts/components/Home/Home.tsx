import React from 'react';
import Header from '../ui/Header/Header';
import OpeningText from '../ui/OpeningText/OpeningText';
import ExternalLink from '../ui/ExternalLink/ExternalLink';
import Essays from '../ui/Essays/Essays';
import './Home.scss';

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="skeleton">
        <div className="left">
          <OpeningText />
          <p>When I'm not working, I enjoy:</p>
          <ul className="hobbies" title="hobbies">
              <li>
                <ExternalLink
                  link='https://www.notion.so/shemona/s-h-e-m-o-n-a-cb739b6a13ce490ba1d422f204397071'
                  content='Building a Second Brain'
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
                  content='Working towards solutions with other devs'
                />
              </li>
          </ul>
        </div>
        <div className="right">
          <Essays />
        </div>
      </div>
    </div>
  );
}

export default Home;
