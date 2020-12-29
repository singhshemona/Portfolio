import React from 'react'
import { Redirect } from "react-router-dom"
import { Header } from '../../components/Header/Header'
import { OpeningText } from '../../components/OpeningText/OpeningText'
import { EssayContainer } from '../../components/EssayContainer/EssayContainer'
import { Link } from "react-router-dom"
import essays from '../../essays'
import './Essay.scss'

type Props = {
  match: any
}

export const Essay = ({ match }: Props) => {
  const slug = match.params.slug;
  const postSlugs = ["liquid-thinking", "my-second-blog-post"];

  const postDoesNotExist = postSlugs.indexOf(slug) === -1;
  if (postDoesNotExist) {
    return <Redirect to="/" />;
  }

  return (
    <div className="essay-page">
      <Header/>
      <OpeningText />
      <h4>
        <Link className="back-link" to="/">← BACK TO ALL ESSAYS</Link>
      </h4>
      <EssayContainer 
        title={essays[2].title} 
        content={essays[2].blurb} 
        timeToRead={essays[2].timeToRead}
      />
    </div>
  );
}