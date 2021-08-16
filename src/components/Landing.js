import React from 'react';
import { 
   LandingContainer, 
   Introduction, 
   Name, 
   Title 
} from '../styled/LandingStyled';

const Landing = () => {
   return (
      <LandingContainer>
         <Introduction>
            <Name>Hi, I'm Aaron!</Name>
            <Title>Full Stack Web Developer, React, Ruby on Rails, NodeJS</Title>
         </Introduction>
      </LandingContainer>
   );
}

export default Landing;
