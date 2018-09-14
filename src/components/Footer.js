import React from 'react';

const Footer = ({ showUncompleted, showCompleted, showAll }) => (
  <div className="footer">
    <button onClick={showUncompleted}>Uncompleted</button>{" "}
    <button onClick={showCompleted}>Completed</button>{" "}
    <button onClick={showAll}>All</button>
  </div>
);

export default Footer;
