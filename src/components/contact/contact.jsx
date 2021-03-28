import React, { useState } from 'react'
import './contact.scss'
import sendimg from './send.png'
export const Contact = ({ ref }) => {
    const [inputs, setInputs] = useState({});
    const handler = (e) => {
        setInputs({ ...inputs, [e.target.id]: e.target.value });
        console.log(inputs);
    }
    const send = () => {

    }
    return (
        <div className="c-default fs-20 pl-30 lh-normal flex flex-col my-50" ref={ref}>
            <p className="fw-700 fs-35 py-20">Contact me</p>
            <div className="flex flex-row">
                <input className="my-10 br-none b-primary raleway w-50 mr-10 fs-20" type="text" id="name" placeholder="Your Name" onChange={(e) => handler(e)}/>
                <input className="my-10 br-none b-primary raleway w-50 ml-10 fs-20" type="email" id="email" placeholder="Your Email" onChange={(e) => handler(e)}/>
            </div>
            <div className="flex flex-col">
                {/* <input className="my-10 br-none b-primary raleway" type="text" placeholder="Your Subject" id="subject" onChange={(e) => handler(e)}/> */}
                <textarea className="my-10 br-none b-primary raleway message fs-20" type="text" placeholder="Your Message" id="text" onChange={(e) => handler(e)}/>
            </div>
            <div>
                <button onClick={send} className="send b-primary raleway flex align-center justify-center fw-400 pointer">Send<img src={sendimg} width="20spx" className="ml-5"/></button> 
            </div>
        </div>
    );
}