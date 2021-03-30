import React, { useRef, useEffect, useContext } from 'react'
import {useOnScreen } from '../../hooks/useOnScreen';
import { Context } from '../../providers/provider';
import { Hello, Skills, About, Projects, Blog, Contact } from '../index'
import './home.scss'
export const Home = () => {
    const { setPageNumber, helloRef, aboutRef, skillsRef, projectsRef, blogRef, contactRef } = useContext(Context);
    const helloOnScreen = useOnScreen(helloRef);
    const aboutOnScreen = useOnScreen(aboutRef);
    const skillsOnScreen = useOnScreen(skillsRef);
    const projectsOnScreen = useOnScreen(projectsRef);
    const blogOnScreen = useOnScreen(blogRef);
    const contactOnScreen = useOnScreen(contactRef);
    const scrolling = () => {
        if (helloOnScreen) {
            setPageNumber(1);
        }else if (aboutOnScreen) {
            setPageNumber(2);
        }else if (skillsOnScreen) {
            setPageNumber(3);
        }else if (projectsOnScreen) {
            setPageNumber(4);
        }else if (blogOnScreen) {
            setPageNumber(5);
        }else if (contactOnScreen) {
            setPageNumber(6);
        }
    }
    return (
        <div className="home b-secondary vw-70 c-primary pr-100" onScroll={scrolling}>
            <Hello ref={helloRef}/>
            <About ref={aboutRef}/>
            <Skills ref={skillsRef}/>
            <Projects ref={projectsRef}/>
            <Blog ref={blogRef}/>
            <Contact ref={contactRef}/>
        </div>
    );
}