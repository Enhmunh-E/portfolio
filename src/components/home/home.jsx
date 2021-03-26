import React from 'react'
import { Hello, Skills, About, Projects, Blog, Contact, Nav } from '../index'
import './home.scss'
export const Home = (props) => {
    const { nav, setNav } = props;
    return (
        <div className="home b-secondary vw-70 c-primary pr-100 relative absolute">
            <Nav nav={nav} setNav={setNav}/>
            <Hello />
            <About />
            <Skills />
            <Projects />
            <Blog />
            <Contact />
        </div>
    );
}