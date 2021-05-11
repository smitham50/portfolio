import React from 'react';
import Project from './Project';
import projectInfo from '../utils/projectInfo';
import '../component-stylesheets/Projects.css';

const Projects = (props) => {

    const renderProjects = () => {
        return projectInfo.map(project => {
            const {
                name,
                image,
                image2,
                description,
                builtWith
            } = project[Object.keys(project)];

            return (
                <Project
                    name={name}
                    image={image}
                    image2={image2}
                    description={description}
                    builtWith={builtWith}
                />
            )
        });
    }

    return (
        <div className="projects">
            {renderProjects()}
        </div>
    );
}

export default Projects;
