import React from 'react'
import './side.scss'
export const Side = () => {
    return (
        <div className="home b-primary vw-30 c-default fs-20">
            <p className="flex w-100 align-center justify-center p-50 fw-700">
                <p className="c-tertiary py-5">pageNumber</p>
                /
                <p className="py-5">PageNumber</p>
            </p>
            <p className="text-center text-underline letter-spacing-2 fw-700">Enkhmunkh</p>
            <ul className="things">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}