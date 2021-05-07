import React, { useRef } from 'react';

const About = () => {
    const aboutRef = useRef(null);

    return (
        <div className="about" ref={aboutRef}>
            <p>
                Hi, my name is Aaron and I'm a full stack web developer specializing in 
                MERN stack and Ruby on Rails. I started learning to program as a hobby 
                a little over three years ago while I was working in retail.
            </p>
            <p>I loved it immediately.</p>
            <p>
                At the time I felt like I wasn't growing in my job and programming offered 
                the perfect antidote: it's a subject where you have to grow contantly. I 
                enrolled in a bootcamp at the Flatiron School and by the time I graduated was certain I'd chosen the right career path.
            </p>
            <p>Here's some of what I've been up to since then.</p>
        </div>
    );
}

export default About;
