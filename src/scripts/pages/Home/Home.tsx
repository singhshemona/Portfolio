import React from 'react'
import { Header } from '../../components/Header/Header'
import { OpeningText } from '../../components/OpeningText/OpeningText'
import Form from '../../components/Form'
import { AllEssays } from '../../components/AllEssays/AllEssays'
import { Projects } from '../../components/Projects/Projects'
import './Home.scss';

export const Home = () => {
  return (
    <div className="home-page">
      <Header/>
      <OpeningText />
      <div className="skeleton">
        <div className="left">
          <h2>Projects</h2>
          <Projects />
        </div>
        <div className="right">
          <h2>Writing</h2>
          <AllEssays />
          <Form />
        </div>
      </div>
    </div>
  );
}