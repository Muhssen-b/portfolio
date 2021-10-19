import React from 'react';
import "./About.css"

 
export const About = () => {
  
 
  return(
  
      <div className = "description">
        <h1 className="description__title">A LITTLE BIT ABOUT ME</h1>

        <img src="../../Picture.png" alt="" />
        <h3 className="description__info"> 
             Hey My name is Muhssen I am a <span> graduate software engineer </span> from <span> Swinburne University </span>
             with a bachelors in Information Technology. I have a passion for coding, problem solving 
             and learning new technology. I aspire towards a career that would channel my creativity through efficient
             and asethetic software engaging experiences with fellow developers.

             
        </h3>
        <h3 className="description__info">
            When i'm not behind a computer i enjoy soccer(football), reading and chess
        </h3>
      </div>

  )
}
 
export default About;