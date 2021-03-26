import React from "react";
import './nav.scss'
export const Nav = (props) => {
    const { setNav, nav } = props;
    return (
        <div className="wp-40 hp-40 flex justify-center align-center flex-col absolute b-primary br-5 nav" onClick={() => setNav(!nav)}>
            <div className={`line b-default ${nav ? "rotate-right" : ""}`}/>
            <div className={`line b-default ${nav ? "dissappear" : ""}`}/>
            <div className={`line b-default ${nav ? "rotate-left" : ""}`}/>
        </div>
    );
}