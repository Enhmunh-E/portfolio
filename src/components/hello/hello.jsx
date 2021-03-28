import React, { useContext } from 'react'
import './hello.scss'
import chevron from './chevron.png'
import { Context } from '../../providers/provider'
export const Hello = () => {
    const { helloRef } = useContext(Context);
    return (
        <div className="hello vh-100 w-100" ref={helloRef}>
            <p className="c-tertiary fs-125 fw-900 ppl-30 ppt-30 ppl-30 hello-text">Hello I'm <p className="name">Enkhmunkh</p></p>
            <img src={chevron} width="50" height="50" className="chevron left-30 bottom-10"/>
        </div>
    );
}