import React from 'react';
import { Header } from '../ui/Header/Header';
import { OpeningText } from '../ui/OpeningText/OpeningText';
import Form from '../ui/Form';
import { Essays } from '../ui/Essays/Essays';
import { Projects } from '../ui/Projects/Projects';
import './Home.scss';

export const Home = () => {
  return (
    <div>
      <Header/>
      <OpeningText />
      <div className="skeleton">
        <div className="left">
          <h2>Projects</h2>
          <Projects />
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