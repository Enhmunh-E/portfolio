import React from 'react'
import { Hello, Skills, About, Projects, Blog, Contact } from '../index'
import './home.scss'
export const Home = () => {
    return (
        <div className="home b-secondary vw-70 c-primary pr-100">
            <Hello />
            <About />
            <Skills />
            <Projects />
            <Blog />
            <Contact />
        </div>
    );
}