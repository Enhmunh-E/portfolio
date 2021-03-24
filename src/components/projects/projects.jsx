import React, { useState } from 'react'
import './projects.scss'
export const Projects = () => {
    const [more, setMore] = useState(false);
    const sliderInformation = [
        {
            name: "Instagram Copy",
            information: "This is the Instagram Copy that I made in a week. Some mini details like logout button might be not there. But almost all of the things work.",
            link: "https://instagram-bm.web.app",
        },{
            name: "Ten Mini Projects",
            information: "This is the mini collection of projects that I made after watching Florin Pop's video on Youtube",
            link: "https://ten-mini-projects.web.app/"
        },{
            name: "Boginoo",
            information: "This is a url shortener that has a history. And you have to login in order to short your url.",
            link: "https://boginoo-1.web.app/"
        }
    ];
    const moreInformation = [{
            name: "To Do App",
            information: "This is To Do App. But it doesn't have saving option so have to be aware of it if you don't wan't to lose your information that you saved.",
            link: "https://to-do-app-f1785.web.app/"
        },{
            name: "Posting App",
            information: "This is Posting App that you can post image or text and you can like them.",
            link: "https://postin-gapp.web.app/"
        }
    ]
    return (
        <div className="projects c-default fs-20 pl-30 lh-normal">
            <p className="fw-700 fs-35 py-20 mt-20">Projects</p>
            <p className="py-20">This is the projects that I made after learning React JS in last 4 months.</p>
            <div className="slider-container">
                {
                    sliderInformation.map(info => {
                        return (
                            <div className="slider-item br-default-2 p-20 br-10 my-20">
                                <p className="text-center fw-700">{info.name}</p>
                                <p>{info.information}</p>
                                <p className="text-center mt-10"><a href={info.link} className="br-10 br-default-2 py-5 link px-20 pointer">Visit</a></p>
                            </div>
                        );
                    })
                }
                {
                    more && (
                        moreInformation.map(info => {
                            return (
                                <div className="slider-item br-default-2 p-20 br-10 my-20">
                                    <p className="text-center fw-700">{info.name}</p>
                                    <p>{info.information}</p>
                                    <p className="text-center mt-10"><a href={info.link} className="br-10 br-default-2 py-5 link px-20 pointer">Visit</a></p>
                                </div>
                            );
                        })
                    )
                }
            </div>
            <div className="flex align-center justify-center"><p className="text-center more pointer br-tertiary-2 br-10" onClick={() => setMore(!more)}>More</p></div>
        </div>
    );
}