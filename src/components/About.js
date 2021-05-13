import React, { useRef } from 'react';
import '../component-stylesheets/About.css';

const About = () => {
    const aboutRef = useRef(null);

    return (
        <div className="about" ref={aboutRef}>
            <h1>
                About
            </h1>
            <p>My route to becoming a programmer was an indirect one. I studied music and literature in college but neither had an obvious career path. I then spent a couple of years working in Washington, DC as a coffee roaster, which I'd originally picked up as a hobby and was very excited to do professionally.</p>
            <p>From there I moved back to Brooklyn and began working at the Food Co-op my father and some friends started in 1976. My first role was as a stocker and beer buyer, then as buyer for the bulk department, manager of the wellness department, and finally as an administrator in the store's office. I liked being a part of the community and initially found aspects of each role engaging and complex, but I would reach a point with each where I was learning significantly less and had effective systems in place that often required repetition to maintain.</p>
            <p>I started programming as a hobby while I was working as an office administrator. I was managing the store's database in Microsoft Access, and it was probably the first I'd ever started thinking about how databases are structured, what they even are, and, oh yeah, how do computers and the internet work?</p>
            <p>My first language was JavaScript and I took to it immediately. The first times I executed a loop and changed content on the DOM felt like complete magic to me. I began to study obsessively, decided I wanted to pursue programming as a career path, and enrolled in a bootcamp at Flatiron School. I came out with a solid foundation and a glaring sense that I barely knew anything. I've loved every minute of working on that.</p>
        </div>
    );
}

export default About;
