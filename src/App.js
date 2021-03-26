import React, { useState } from 'react';
import './App.scss'
import { Home, Side } from './components/index'
const App = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="container flex flex-row h-100 w-100">
      <Home nav={nav} setNav={setNav}/>
      <Side nav={nav}/>
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