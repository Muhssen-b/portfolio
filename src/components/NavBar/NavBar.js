import React from 'react'
import Home from '../Home/Home.js';



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
           
            <div className = {navBar ? "navBar" : "navBarActive"}>
               <div className= "Mike"> Muhssen</div>
               <div className="tab"> Home </div>
               <div className="tab"> Projects</div> 
               <div className="tab">Contact</div>
               <div className="tab">Resume</div>
            
            </div>
            
            </header>
          
            
    
       
    
      
            
    )
}

export default NavBar
