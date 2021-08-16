import React, { useRef } from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
    display: block;
    margin: 1rem;
    background: #a5a5a514;
    border-radius: 10px;
    padding: 0 1rem;
    padding-bottom: 4rem;
    margin: 1rem;
    color: #3f3e42;
    line-height: 1.4rem;

    @media screen and (max-width: 1000px) {
        padding-bottom: 1rem;
        line-height: 1.8rem;
    }
`;

const Heading = styled.h1`
    letter-spacing: .1rem;
`;

const P = styled.p`
    color: #3f3e42;
`;

const About = () => {
    const aboutRef = useRef(null);

    return (
        <AboutContainer ref={aboutRef}>
            <Heading>
                About
            </Heading>
            <P>My route to becoming a programmer was an indirect one. My interests growing up were largely creative, and I studied music and literature in college but neither had a clear career path. For several years I tried different jobs and industries on for size. I taught English in Ukraine, worked in Washington, DC as a coffee roaster, and eventually moved back to Brooklyn where I started working at the food co-op my parents and some friends started in 1976.</P>
            <P>The co-op was my first workplace that had ample room for advancement and opportunities to connect with a larger industry. I moved from stocker, to buyer, department manager, and finally office administrator. For several years I grew tremendously and was truly proud of the changes my colleagues and I were able to implement, but I eventually felt I was learning less on a daily basis and started to imagine career paths where growth would be a constant.</P>
            <P>I started programming as a hobby and it didn't take me long to realize I'd found what I was looking for. I was managing the co-op's database in Microsoft Access at the time, and it was probably the first I'd ever thought about how databases are structured, what they even are, and, oh yeah, how do computers and the internet work?</P>
            <P>My first language was JavaScript and I took to it immediately. The first times I executed a loop or changed content on the DOM felt like complete magic to me. I began to study intensively, enrolled in a bootcamp at Flatiron School, and came out with a solid foundation and a glaring sense that I barely knew anything. Since then I've spent my time building projects, taking online courses, studying computer science fundamentals, and engaging with the development community at meetups and online, and I feel a sense of tangible growth every time I look back at code I wrote only months earlier and see how many problems it has. I couldn't be happier to have chosen a path that demands constant learning, improvisation and creative problem solving, and collaboration with talented peers.</P>
        </AboutContainer>
    );
}

export default About;
