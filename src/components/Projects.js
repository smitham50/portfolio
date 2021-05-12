import React from 'react';
import Project from './Project';
import projectInfo from '../utils/projectInfo';
import '../component-stylesheets/Projects.css';

const Projects = (props) => {

    const renderProjects = () => {
        return projectInfo.map((project, idx) => {
            const {
                name,
                image,
                image2,
                description,
                repo,
                builtWith,
                url
            } = project[Object.keys(project)];

            return (
                <Project
                    key={idx}
                    name={name}
                    image={image}
                    image2={image2}
                    description={description}
                    repo={repo}
                    builtWith={builtWith}
                    url={url}
                    gitHubIcon={idx % 2 === 0 ? "icons8-github.svg" : "icons8-github (1).svg"}
                    folderIcon={idx % 2 === 0 ? "icons8-folder.svg" : "icons8-folder (1).svg"}
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
