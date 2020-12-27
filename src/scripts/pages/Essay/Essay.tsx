import React from 'react';
import { useSelector } from 'react-redux'
import { Header } from '../../components/Header/Header';
import { OpeningText } from '../../components/OpeningText/OpeningText';
import { EssayContainer } from '../../components/EssayContainer/EssayContainer';
import { Link } from "react-router-dom";
import { reducer } from '../App/App';
import essays from './essays';
import './Essay.scss';

export const Essay = () => {

  const essayId = useSelector((state:ReturnType<typeof reducer>) => state.essayId.essayId);

  return (
    <div className="essay-page">
      <Header/>
      <OpeningText />
      <h4>
        <Link className="back-link" to="/">← BACK TO ALL ESSAYS</Link>
      </h4>
      <EssayContainer title={essays[essayId].title} content={essays[essayId].content} />
    </div>
  );
}