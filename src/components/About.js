import React from "react";

const About = (props) => {
  return (
    <div className="about">
      <h3>about memory card</h3>
      <p>You are shown twelve cards at a time, each time you select a card you will be shown a new assortment of cards. Try and select all twenty-two cards without selecting the same card twice!</p>
      <div className="about-footer">
        <div className="about-card">
          <div className="card-container">  
            <div id="twentyone" onClick={props.toggleMode} className="card"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 