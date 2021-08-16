import React from 'react';
import {
   ContactContainer,
   Portrait,
   ContactLink,
   ContactIcon
} from '../styled/ContactStyled';

const Contact = () => {
   return (
      <ContactContainer>
         <Portrait src={process.env.PUBLIC_URL + "Profile.jpg"} alt="" />
         <h2>Aaron Smith</h2>
         <ContactLink href="https://www.linkedin.com/in/aaron-smith-830254192/">
            <ContactIcon src={process.env.PUBLIC_URL + "icons8-linkedin.svg"} alt="" />
         </ContactLink>
         <ContactLink href="https://github.com/smitham50">
            <ContactIcon src={process.env.PUBLIC_URL + "icons8-github.svg"} alt="" />
         </ContactLink>
         <ContactLink href="https://smitham50.medium.com/">
            <ContactIcon src={process.env.PUBLIC_URL + "icons8-medium-monogram.svg"} alt="" />
         </ContactLink>
         <ContactLink href="mailto: smitham50@gmail.com">
            <ContactIcon src={process.env.PUBLIC_URL + "icons8-gmail.svg"} alt="" />
         </ContactLink>
      </ContactContainer>
   );
}

export default Contact;
