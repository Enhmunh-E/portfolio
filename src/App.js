import React, { useState, useEffect, useRef } from 'react';
import './App.scss'
import { Home, Side, Nav } from './components/index'
const App = () => {
  const [nav, setNav] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const helloRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const blogRef = useRef();
  const contactRef = useRef();  
  useEffect(() => {
    var w = window.innerWidth;
    if (w > 1000) {
      setNav(true);
    }
  }, []);
  return (
    <div className="container flex flex-row h-100 w-100 relative">
      <Nav nav={nav} setNav={setNav} />
      <Home nav={nav} setNav={setNav} setPageNumber={setPageNumber} helloRef={helloRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} blogRef={blogRef} contactRef={contactRef}/>
      <Side nav={nav} pageNumber={pageNumber} />
    </div>
  ); 
}
export default App;
// Only Home Side 2 baina

/*
  Requirements: 
    About Me
    Skill ( React, Html, Css, Scss, Js );
    Blogs ( Blogs )
    Projects
    (Firebase)
    Github-connection
    Footer
    Header
    Animation
  Bannable things: 
    Don't get free code from webs
*/