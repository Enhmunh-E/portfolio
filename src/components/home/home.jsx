import React, { useRef, useEffect, useContext, useState } from 'react'
import {useOnScreen } from '../../hooks/useOnScreen';
import { Context } from '../../providers/provider';
import { Hello, Skills, About, Projects, Blog, Contact } from '../index'
import './home.scss'
export const Home = () => {
    const { setPageNumber, helloRef, aboutRef, skillsRef, projectsRef, blogRef, contactRef } = useContext(Context);
    const [isLoaded, setIsLoaded] = useState(false);
    // const helloOnScreen = useOnScreen(helloRef);
    // const aboutOnScreen = useOnScreen(aboutRef);
    // const skillsOnScreen = useOnScreen(skillsRef);
    // const projectsOnScreen = useOnScreen(projectsRef);
    // const blogOnScreen = useOnScreen(blogRef);
    // const contactOnScreen = useOnScreen(contactRef);
    const scrolling = () => {
        if (isLoaded) {
            if (isInViewport(helloRef)) {
                setPageNumber(1);
            }else if (isInViewport(aboutRef)) {
                setPageNumber(2);
            }else if (isInViewport(skillsRef)) {
                setPageNumber(3);
            }else if (isInViewport(projectsRef)) {
                setPageNumber(4);
            }else if (isInViewport(blogRef)) {
                setPageNumber(5);
            }else if (isInViewport(contactRef)) {
                setPageNumber(6);
            }
        }
    }
    const isInViewport = (ref) => {
        if (isLoaded) {
            const rect = ref.current.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }
    useEffect(() => {
        if (!isLoaded) setIsLoaded(true);
    }, [])
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