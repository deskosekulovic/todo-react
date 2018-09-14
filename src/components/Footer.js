import React from 'react';

const Footer = ({ toggleShow }) => (
  <div className="footer">
    <button onClick={()=>toggleShow('uncompleted')}>Uncompleted</button>
    <button onClick={()=>toggleShow('completed')}>Completed</button>
    <button onClick={()=>toggleShow('')}>All</button>
  </div>
);

export default Footer;
