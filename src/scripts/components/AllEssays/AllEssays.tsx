import React, { useState, useEffect } from 'react'
import './AllEssays.scss'
import { Link } from "react-router-dom"
import db from '../../../firebase'

export const AllEssays = () => {

  const [essays, setEssays] = useState({});
  
  useEffect(() => {
    db.ref('/').on('value', (querySnapShot:any) => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let allEssays = {...data};
      setEssays(allEssays)
    });
  }, [])
  

  return (
    <div className='essays'>
      {Object.values(essays).map((essay:any, id:number) => (
        <div key={id} className='essay'>
          <h3>
            <Link className="title-link" to={`/${essay.slug}`}>
                {essay.title}
            </Link>
          </h3>
          <p className="time">{essay.timeToRead} minute read</p>
          <p className='content'>{essay.blurb}</p>
        </div>
      ))}
    </div>
  );
}
