import React, { useEffect, useContext } from 'react';
import './App.scss'
import { Home, Side, Nav } from './components/index'
import { Context, Provider } from './providers/provider';
const App = () => {
  const { setNav } = useContext(Context);
  useEffect(() => {
    var w = window.innerWidth;
    if (w > 1000) {
      setNav(true);
    }
  }, []);
  return (
    <Provider>
      <div className="container flex flex-row h-100 w-100 relative">
        <Nav />
        <Home />
        <Side />
      </div>
    </Provider>
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