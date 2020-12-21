import React from 'react';
import projects from './allProjects';
import './Projects.scss';
import { ExternalLink } from '../ExternalLink/ExternalLink';

export const Projects = () => {
  return (
    <>
      {
        projects.map((project) => (
          <div key={project.id} className='projects'>
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
              </div>
            </div>
            <p className="time">{project.pitch}</p>
          </div>
        ))
      }
    </>
  );
}
