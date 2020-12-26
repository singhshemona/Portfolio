import React, { useContext } from 'react';
import { Header } from '../../components/Header/Header';
import { OpeningText } from '../../components/OpeningText/OpeningText';
import { EssayContainer } from '../../components/EssayContainer/EssayContainer';
import { Link } from "react-router-dom";
import ID from '../App/App'
import essays from './essays';
import './Essay.scss';

export const Essay = () => {
  // const id = useContext(ID);
  const id = 3;

  return (
    <div className="essay-page">
      <Header/>
      <OpeningText />
      <h4>
        <Link className="back-link" to="/">← BACK TO ALL ESSAYS</Link>
      </h4>
      <EssayContainer title={essays[id].title} content={essays[id].content} />
    </div>
  );
}