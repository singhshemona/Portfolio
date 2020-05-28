import React from 'react';
import Header from '../ui/Header/Header';
import Subtext from '../ui/Subtext/Subtext';
import { ExternalLink } from '../ui/ExternalLink/ExternalLink';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Subtext />
      <ExternalLink
        link="mailto:singhshemona@gmail.com"
        content="Let's Collaborate"
      />
    </div>
  );
}

export default App;
