import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css'



export const Home = () => {
  
 
  return (
  
  <div className="home">
    <div className="row">
        <div className="column">
          <div className="image">
      <img src="https://cdn.dribbble.com/users/2054264/screenshots/5953255/1.1integration__1_.png" alt="" className="image"/>

        </div>
      </div>
        <div className="column">
        <div className="home-introduction">
      <h1> HI, I'M MUHSSEN <span><i class="far fa-smile"></i></span></h1>
      <h2>Graduate Software Engineer</h2>
      <div className="home-contacts">
      <a onClick={event => window.location.href="https://www.linkedin.com/in/muhssen-benabdelouhed-079301158/?originalSubdomain=au"}><i className = "fab fa-linkedin fa-2x"></i></a>
      <a onClick={event =>  window.location.href='https://github.com/Muhssen-b'}><i className = "fab fa-github fa-2x"></i></a>
      <i className = "fab twitter fa-2x"></i>
           </div>
           </div>
          </div>
      
      </div>

    </div>
     

      



  )
}
 
export default Home