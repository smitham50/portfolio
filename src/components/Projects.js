import React from 'react';
import Project from './Project';
import {
    dominion,
    trailblaze,
    spellingBee,
    wuht,
    yelpCamp
} from '../utils/projectInfo';

const Projects = (props) => {
    return (
        <div className="projects">
            <Project 
                name= {dominion.name} 
                image= {dominion.image} 
                image2= {dominion.image2}
                description= {dominion.description}
                builtWith={dominion.builtWith}
            />
            <Project 
                name= {trailblaze.name} 
                image= {trailblaze.image} 
                image2= {trailblaze.image2}
                description= {trailblaze.description}
                builtWith={trailblaze.builtWith}
            />
            <Project 
                name= {spellingBee.name} 
                image= {spellingBee.image} 
                image2= {spellingBee.image2}
                description= {spellingBee.description}
                builtWith={spellingBee.builtWith}
            />
            <Project 
                name= {wuht.name} 
                image= {wuht.image} 
                image2= {wuht.image2}
                description= {wuht.description}
                builtWith={wuht.builtWith}
            />
            <Project 
                name= {yelpCamp.name} 
                image= {yelpCamp.image} 
                image2= {yelpCamp.image2}
                description= {yelpCamp.description}
                builtWith={yelpCamp.builtWith}
            />
        </div>
    );
}

export default Projects;
