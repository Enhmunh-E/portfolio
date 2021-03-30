import React, { useContext, useState } from 'react'
import { Context } from '../../providers/provider';
import './blog.scss'
export const Blog = () => {
    const { blogRef } = useContext(Context);
    const blogs = [
        {
            title: "Test title",
            what: "React JS",
            time: "2021.3.26",
            about: "Blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde accusantium quae possimus ratione aliquam dolore deserunt magni alias error.",
            imgUrl: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },{
            title: "Test title",
            what: "React JS",
            time: "2021.3.26",
            about: "Blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde accusantium  or deserunt magni alias error.",
            imgUrl: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        }
        ,{
            title: "Test title",
            what: "React JS",
            time: "2021.3.26",
            about: "Blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde accusantium quae possimus ratione aliquam dolore deserunt magni alias error.",
            imgUrl: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        }
    ];
    const [more, setMore] = useState(false);
    return (
        <div className="blog c-default fs-20 pl-30 lh-normal my-50" ref={blogRef}>
            <div className="flex flex-row justify-between">
                <p className="fw-700 fs-35 py-20 mt-20">Blog</p>  
                <p className="text-center pointer fs-16 mb-20 mt-40 c-tertiary" onClick={() => setMore(!more)}>View All</p>
            </div>
            <div className="blog-container flex flex-col justify-evenly">
                {
                    blogs.map((blog) => {
                        return (
                            <>
                            <div className="w-100 flex flex-row my-10 blog-item">
                                <div className="pr-20">
                                    <img src={blog.imgUrl} alt={blog.title} height="180px" width="246px"/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="fw-700 fs-30 mb-10">{blog.title}</p>
                                    <div className="flex flex-row flex-wrap">
                                        <p className="b-tertiary wp-100 text-center br-16 hp-25 lh-none fs-18">{blog.time}</p>
                                        <p className="opacity-6 fs-20 hp-25 lh-none fw-400 ml-40">{blog.what}</p>
                                    </div>
                                    <p className="fs-16">{blog.about}</p>
                                </div>
                            </div>
                            <hr  className="br-primary-1 w-100"/>
                            </>
                        );
                    })
                }
            </div>
        </div>
    );
}