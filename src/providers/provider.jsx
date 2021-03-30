import React, { createContext, useState, useRef } from 'react';

export const Context = createContext({
    pageNumber: 0,
    helloRef: null,
    aboutRef: null, 
    skillsRef: null,
    projectsRef: null,
    blogRef: null,
    contactRef: null,
    nav: true,
    setPageNumber: () => {},
    setNav: () => {}
})
export const Provider = ({ children }) => {
    const [nav, setNav] = useState(true);
    const [pageNumber, setPageNumber] = useState(0);
    const helloRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const blogRef = useRef(null);
    const contactRef = useRef(null);  
    return (
        <Context.Provider value={{ pageNumber, setPageNumber, helloRef, aboutRef, skillsRef, projectsRef, blogRef, contactRef, nav, setNav }}>
            { children }
        </Context.Provider>
    );
}