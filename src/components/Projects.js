import React from 'react';
import Project from './Project';
import dominionDescription from '../text/dominionDescription';

const Projects = (props) => {

    const dominion = {
        name: "Dominion",
        image: "dominion.png",
        image2: "",
        description: dominionDescription
    }

    const trailblaze = {
        name: "Trailblaze",
        image: "trailblaze.png",
        image2: "trailblaze2.png",
        description: "Trail finding web application"
    }

    const spellingBee = {
        name: "Spelling Bee",
        image: "spellingbee.png",
        image2: "0",
        description: "A blatant ripoff of the New York Times' popular wordgame"
    }

    const wuht = {
        name: "wuht",
        image: "wuht.png",
        image2: "wuht2.png",
        description: "NPM package that enables you to search MDN JavaScript keyword documentation in the command line. Install: npm i wuht -g"
    }


    return (
        <div className="projects">
            <Project 
                name= {dominion.name} 
                image= {dominion.image} 
                image2= {dominion.image2}
                description= {dominion.description}
            />
            <Project 
                name= {trailblaze.name} 
                image= {trailblaze.image} 
                image2= {trailblaze.image2}
                description= {trailblaze.description}
            />
            <Project 
                name= {spellingBee.name} 
                image= {spellingBee.image} 
                image2= {spellingBee.image2}
                description= {spellingBee.description}
            />
            <Project 
                name= {wuht.name} 
                image= {wuht.image} 
                image2= {wuht.image2}
                description= {wuht.description}
            />
        </div>
    );
}

export default Projects;
