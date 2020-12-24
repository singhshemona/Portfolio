import React from 'react';
import projects from './allProjects';
import './Projects.scss';
import { ExternalLink } from '../ExternalLink/ExternalLink';

export const Projects = () => {
  return (
    <div className='projects'>
    {projects.map((project, i) => (
      <div key={i} className='project'>
        <div className="heading">
          <img alt="placeholder" src="https://via.placeholder.com/100" />
          <div>
            <h3>
              <ExternalLink
                link={'test'}
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
