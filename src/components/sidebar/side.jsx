import React, { useContext } from 'react'
import { Context } from '../../providers/provider';
import './side.scss'
export const Side = () => {
    const { nav } = useContext(Context);
    return (
        <div className={`side b-primary vw-30 c-default fs-20 ${nav ? "" : "zero"}`}>
            <p className="flex w-100 align-center justify-center p-50 fw-700">
                <p className="c-tertiary py-5">0</p>
                /
                <p className="py-5">0</p>
            </p>
            <p className="text-center text-underline letter-spacing-2 fw-700 w-100">Enkhmunkh</p>
            <ul className="things">
                <li className="pointer">Home</li>
                <li className="pointer">About</li>
                <li className="pointer">Skills</li>
                <li className="pointer">Projects</li>
                <li className="pointer">Blog</li>
                <li className="pointer">Contact</li>
            </ul>
        </div>
    );
}