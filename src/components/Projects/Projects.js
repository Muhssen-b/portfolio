import React from 'react';
import "./Projects.css"
 
export const Projects = () => {
  
 
  return (
  <div>
  <div className="flex-container">
    <img className="project" src ="https://www.dignited.com/wp-content/uploads/2020/03/Bitcoin.jpeg" onClick={event =>  window.location.href="https://descriptive-quilt.surge.sh"}  alt="" />
 
     <img className="project" src="https://miro.medium.com/max/1000/1*INahMpURVXDrpbLIwmVXhA.gif" onClick={event => window.location.href="https://tough-park.surge.sh/"} alt="" />
  
     <img className="project" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c48be530971807.563b2b13efcae.gif" onClick={event => window.location.href="https://woozy-glass.surge.sh"} alt="" />
 
     </div>
  <div className="caption">
  <div>API Cryptocurrency live prices </div>
  <div>Material UI utilization of homepage</div>
  <div>Weather API website</div> 
  </div>
  </div>
  
  )
}
 
export default Projects