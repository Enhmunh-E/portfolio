import React, { useRef, useEffect, useContext } from 'react'
import { Context } from '../../providers/provider';
import { Hello, Skills, About, Projects, Blog, Contact } from '../index'
import './home.scss'
export const Home = () => {
    const { setPageNumber, helloRef, aboutRef, skillsRef, projectsRef, blogRef, contactRef } = useContext(Context);
    const containerRef = useRef(null);
    const scrolling = () => {
        console.log(containerRef.current.clientHeight);
        // var bottom_of_screen = containerRef.current.scrollTop + containerRef.current.clientHeight;
        // var top_of_screen = containerRef.current.scrollTop;
        // console.log(bottom_of_screen, top_of_screen)
        // changePage( helloRef, bottom_of_screen, top_of_screen, 1 );
        // changePage( aboutRef, bottom_of_screen, top_of_screen, 2 );
        // changePage( skillsRef, bottom_of_screen, top_of_screen, 3 );
        // changePage( projectsRef, bottom_of_screen, top_of_screen, 4 );
        // changePage( blogRef, bottom_of_screen, top_of_screen, 5 );
        // changePage( contactRef, bottom_of_screen, top_of_screen, 6 );
    }
    const changePage = ( reference, bottom_of_screen, top_of_screen, id ) => {
        var top_of_element = reference.current.offset.top;
        var bottom_of_element = reference.current.offset.top + reference.current.outerHeight;
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            setPageNumber(id);
            console.log(id);
        }
    }
    return (
        <div className="home b-secondary vw-70 c-primary pr-100" ref={containerRef} onScroll={scrolling}>
            <Hello ref={helloRef}/>
            <About ref={aboutRef}/>
            <Skills ref={skillsRef}/>
            <Projects ref={projectsRef}/>
            <Blog ref={blogRef}/>
            <Contact ref={contactRef}/>
        </div>
    );
}