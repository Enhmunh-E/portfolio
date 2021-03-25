import React, { useState } from 'react'
import './contact.scss'
export const Contact = () => {
    const [inputs, setInputs] = useState({});
    const handler = (e) => {
        setInputs({ ...inputs, [e.target.id]: e.target.value });
        console.log(inputs);
    }
    return (
        <div className="c-default fs-20 pl-30 lh-normal flex flex-col">
            <p className="">Contact me</p>
            <div className="flex flex-row">
                <input className="my-10 br-none b-primary raleway w-50 mr-10" type="text" id="name" placeholder="Your Name" onChange={(e) => handler(e)}/>
                <input className="my-10 br-none b-primary raleway w-50 ml-10" type="email" id="email" placeholder="Your Email" onChange={(e) => handler(e)}/>
            </div>
            <div className="flex flex-col">
                {/* <input className="my-10 br-none b-primary raleway" type="text" placeholder="Your Subject" id="subject" onChange={(e) => handler(e)}/> */}
                <textarea className="my-10 br-none b-primary raleway message" type="text" placeholder="Your Subject" id="text" onChange={(e) => handler(e)}/>
            </div>
        </div>
    );
}