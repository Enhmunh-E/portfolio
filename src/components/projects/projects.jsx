import React, { useState } from 'react'
import './projects.scss'
import chain from './chain.png'
export const Projects = ({ ref }) => {
    const [more, setMore] = useState(false);
    const sliderInformation = [
        {
            name: "Instagram Copy",
            date: "2021.3.26",
            whatUsed: "React JS",
            information: "This is the Instagram Copy that I made in a week. Some mini details like logout button might be not there. But almost all of the things work.",
            link: "https://instagram-bm.web.app",
        },{
            name: "Ten Mini Projects",
            date: "2021.3.26",
            whatUsed: "React JS",
            information: "This is the mini collection of projects that I made after watching Florin Pop's video on Youtube.",
            link: "https://ten-mini-projects.web.app/"
        }
        // ,{
        //     name: "Boginoo",
        //     information: "This is a url shortener that has a history. And you have to login in order to short your url.",
        //     link: "https://boginoo-1.web.app/"
        // }
    ];
    // const moreInformation = [{
    //         name: "To Do App",
    //         information: "This is To Do App. But it doesn't have saving option so have to be aware of it if you don't wan't to lose your information that you saved.",
    //         link: "https://to-do-app-f1785.web.app/"
    //     },{
    //         name: "Posting App",
    //         information: "This is Posting App that you can post image or text and you can like them.",
    //         link: "https://postin-gapp.web.app/"
    //     }
    // ]
    return (
        <div className="projects c-default fs-20 pl-30 lh-normal my-50" ref={ref}>
            <div className="flex flex-row justify-between">
                <p className="fw-700 fs-35 py-20 mt-20">Projects</p>  
                <p className="text-center pointer fs-16 mb-20 mt-40 c-tertiary" onClick={() => setMore(!more)}>View All</p>
            </div>
            <p className="py-20">This is the projects that I made after learning React JS in last 4 months.</p>
            <div className="slider-container flex flex-row justify-between">
                {
                    sliderInformation.map(info => {
                        return (
                            <div className="slider-item p-20 br-5 my-20 w-45 flex flex-col b-primary h-auto">
                                <a className="fw-700 pointer c-default mb-20 fs-26" href={info.link}>{info.name}<img src={chain} width="13px" className="ml-10"/></a>
                                <div className="flex flex-row fs-18 mb-20 flex-wrap">
                                    <p className="pr-20 border-right-1">{info.date}</p>
                                    <p className="ml-20">{info.whatUsed}</p>
                                </div>
                                <p className="fs-16">{info.information}</p>   
                                {/* <p className="text-center mt-10"><a href={info.link} className="br-10 br-default-2 py-5 link px-20 pointer">Visit</a></p> */}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}