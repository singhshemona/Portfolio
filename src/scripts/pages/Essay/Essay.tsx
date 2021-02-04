import React, { useState, useEffect } from 'react'
import { Header } from '../../components/Header/Header'
import { EssayContainer } from '../../components/EssayContainer/EssayContainer'
import { Link } from "react-router-dom"
import db from '../../../firebase'
import './Essay.scss'

type Props = {
  match: any
}

export const Essay = ({ match }: Props) => {
  const slug = match.params.slug;
  const [ currentPost, setCurrentPost ] = useState<null | {title: string, content: string, timeToRead: number, lastEdited: string, published: string}>(null)

  useEffect(() => {
    db.ref()
      .child(`/${slug}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          setCurrentPost(snapshot.val())
        }  
      });
  }, [slug]);

  const postDoesNotExist = !currentPost;

  return (
    <div className="essay-page">
      <Header/>
      {postDoesNotExist ? 
        <h4>
          Looks like this page does not exist...
          <Link className="back-link" to="/">Head back to see which ones do!</Link>
        </h4>
        :
        <>
          <h4>
            <Link className="back-link" to="/">← BACK TO ALL ESSAYS</Link>
          </h4>
          <EssayContainer 
            title={currentPost ? currentPost.title : 'No Title'} 
            content={currentPost ? currentPost.content : 'No Content'} 
            timeToRead={currentPost ? currentPost.timeToRead : 0}
            lastEdited={currentPost ? currentPost.lastEdited : 'No Last Edited Date'}
            published={currentPost ? currentPost.published : 'No Last Published Date'}
          />
          <h4>
            <Link className="back-link" to="/">← BACK TO ALL ESSAYS</Link>
          </h4>
        </>
      }
    </div>
  );
}