import React from 'react';
import projects from './allProjects';
import './Projects.scss';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import podcast from '../../../images/podcast.svg';
import animations from '../../../images/animations.svg';
import homegrade from '../../../images/homegrade.svg';
import makerpaper from '../../../images/makerpaper.svg';
import recommend from '../../../images/recommend.svg';
import capsule from '../../../images/capsule.svg';

export const Projects = () => {
  return (
    <div className='projects'>
    {projects.map((project, i) => (
      <div key={i} className='project'>
        <div className="heading">
          <img alt="placeholder" src={
            project.image === 'recommend' ? recommend : 
            project.image === 'capsule' ? capsule :
            project.image === 'podcast' ? podcast :
            project.image === 'animations' ? animations :
            project.image === 'homegrade' ? homegrade :
            project.image === 'makerpaper' ? makerpaper : ''
          } />
          <div>
            <h3>
              <ExternalLink
                link={project.link}
                content={project.title}
              />
            </h3>
            <p className="tags">{project.tags.join(', ')}</p>
            <p className="timeline">{project.timeline}</p>
          </div>
        </div>
        <p className="pitch">{project.pitch}</p>
      </div>
    ))}
    </div> 
  );
}
