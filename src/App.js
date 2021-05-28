
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {useState, useEffect} from 'react';
import NavBar from './components/NavBar/NavBar.js'
import HashLoader from "react-spinners/HashLoader";
import Home from "./components/Home/Home";
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js' ;
import Projects from './components/Projects/Projects.js';


function App() {
 const [loading, setLoading] = useState(false);
 const [navBar, setNavBar] = useState(false);

 const changeBackground  = () => {
   if(window.scrollY > 80) {
     setNavBar(true);

   } else {
     setNavBar(false);
   }
 }

 window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, []);

  return (
    <div className="App">
    {
      loading ? <div className="loading"> <HashLoader  color={'36D7B7'} loading={loading} size={150} /> </div> :
      <div>
      <div className="overall">
        <NavBar/>
           <Router>
            
            </Router>
            
           
            
            <Home />

            <About />
           
            
            
            </div>
           
            
      </div>
      
     
      
     
     
    }

    </div>
    
    
    


  );
}

export default App;
