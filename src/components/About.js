import React, { useRef } from 'react';

const About = () => {
    const aboutRef = useRef(null);

    return (
        <div className="about" ref={aboutRef}>
            <h1>
                Fullstack web developer, MERN and Ruby on Rails
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem sapiente temporibus libero pariatur porro harum iusto tempore, architecto quasi dolores quisquam recusandae totam fugit tenetur, similique non! Eaque, consequatur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem sapiente temporibus libero pariatur porro harum iusto tempore, architecto quasi dolores quisquam recusandae totam fugit tenetur, similique non! Eaque, consequatur.</p>
        </div>
    );
}

export default About;
