import React from 'react';
import StyledFooter from '../styles/Footer';
import Button from '../styles/Button';

const Footer = ({ toggleShow }) => (
  <StyledFooter>
    <Button onClick={()=>toggleShow('uncompleted')}>Uncompleted</Button>
    <Button onClick={()=>toggleShow('completed')}>Completed</Button>
    <Button onClick={()=>toggleShow('')}>All</Button>
  </StyledFooter>
);

export default Footer;
