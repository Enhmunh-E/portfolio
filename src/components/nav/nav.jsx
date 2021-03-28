import React, { useContext } from "react";
import { Context } from "../../providers/provider";
import './nav.scss'
export const Nav = () => {
    const { nav, setNav } = useContext(Context);
    const aa = () => {
        setNav(nav => !nav);
        console.log(nav);
    }
    return (
        <div className="wp-40 hp-40 flex justify-center align-center flex-col absolute b-primary br-5 nav" onClick={() => aa()}>
            <div className={`line b-default ${nav ? "rotate-right" : ""}`}/>
            <div className={`line b-default ${nav ? "dissappear" : ""}`}/>
            <div className={`line b-default ${nav ? "rotate-left" : ""}`}/>
        </div>
    );
}