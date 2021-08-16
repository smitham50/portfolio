import React from 'react';
import About from './About';
import Contact from './Contact';
import { InfoContainer } from '../styled/InfoBarStyled';

const InfoBar = () => {
   return (
      <InfoContainer>
         <Contact />
         <About />
      </InfoContainer>
   );
}

export default InfoBar;
