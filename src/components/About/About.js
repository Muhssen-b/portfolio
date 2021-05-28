import React from 'react';
import "./About.css"
 
function About() {
  
 
  return(
  
      <div className = "description">
        <h1 className="description__title">A LITTLE BIT ABOUT ME</h1>

        <img src="../../Picture.png" alt="" />
        <h3 className="description__info"> 
             Hey My name is Muhssen I am a <span> graduate software engineer </span> from <span> Swinburne University </span>
             with a bachelors in Information Technology. I have a passion for coding, problem solving 
             and also web design. I aspire towards a career that would channel my creativity through efficient
             and asethetic software and engaging experiences with fellow developers.
        </h3>
        <h3 className="description__title2">
            When i'm not behind a computer i enjoy soccer(football), reading and chess
        </h3>
        <div className="description__info2">
        <div className="description__title3">
            SELF PROCLOMATIONS
        </div>
        <div className = "description__hobbies">
        <img src="https://images.vexels.com/media/users/3/218082/isolated/preview/9871b275991ebb5704bf6fd6bff81c1a-male-soccer-player-passing-ball-by-vexels.png" alt="" />
        <img src="https://img.freepik.com/free-vector/virtual-sitter-online-babysitting-service-remote-teaching-concept_73948-170.jpg?size=626&ext=jpg" alt="" />
        <img src="https://cdn2.iconfinder.com/data/icons/sports-i-color/300/15-512.png" alt="" />
        </div>
        </div>
      </div>

  )
}
 
export default About;