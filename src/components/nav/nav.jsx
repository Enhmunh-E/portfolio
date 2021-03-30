import React, { useContext } from "react";
import { Context } from "../../providers/provider";
import './nav.scss'
export const Nav = () => {
    const { nav, setNav } = useContext(Context);
    return (
        <div className="wp-40 hp-40 flex justify-center align-center flex-col absolute b-primary br-5 nav" onClick={() => setNav(!nav)}>
            <div className={`line b-default ${nav ? "rotate-right" : ""}`}/>
            <div className={`line b-default ${nav ? "dissappear" : ""}`}/>
            <div className={`line b-default ${nav ? "rotate-left" : ""}`}/>
        </div>
    );
}