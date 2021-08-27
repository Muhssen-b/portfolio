import React from 'react'
import Home from '../Home/Home.js';
import {Link} from 'react-router-dom';



import {useState} from 'react';

import Content from '../Content/Content';

import './NavBar.css';

const NavBar = () => {
    const [navBar, setNavBar] = useState(true);

    const changeBackground  = () => {
      if(window.scrollY > 80) {
        setNavBar(false);
  
      } else {
        setNavBar(true);
      }
    }
  
    window.addEventListener("scroll", changeBackground); 
  

    return (
            <header> 
           
            <div>
              <ul className = "navBarActive">
              
              <Link to ="/" className="nav-link"> <li> Muhssen</li></Link>
              <Link to= "/About"> <li className="nav-links"> About</li> </Link>
              <Link to ='/Projects'> <li className="nav-links"> Projects</li></Link>
              <Link to = "/Resume" > <li className="nav-links"> Resume</li></Link>
              </ul>
              
               
            </div>
            
            </header>
          
            
    
       
    
      
            
    )
}

export default NavBar
