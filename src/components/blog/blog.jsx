import React from 'react'
import './blog.scss'
export const Blog = () => {
    const blogs = [
        {
            title: "Test title",
            about: "Blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde accusantium quae possimus ratione aliquam dolore deserunt magni alias error.",
            imgUrl: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },{
            title: "Test title",
            about: "Blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde accusantium quae possimus ratione aliquam dolore deserunt magni alias error.",
            imgUrl: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        },{
            title: "Test title",
            about: "Blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde accusantium quae possimus ratione aliquam dolore deserunt magni alias error.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde accusantium quae possimus ratione aliquam dolore deserunt magni alias error.",
            imgUrl: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        }
    ]
    return (
        <div className="blog c-default fs-20 pl-30 lh-normal">
            <p className="fw-700 fs-35 py-20 mt-20">Blog</p>
            <div className="blog-container flex flex-col justify-evenly">
                {
                    blogs.map((blog) => {
                        return (
                            <div className="w-100 flex flex-row br-default-2 br-10 p-20 my-10   ">
                                <div className="flex align-center justify-center p-10 pr-20">
                                    <img src={blog.imgUrl} alt={blog.title} height="150px"/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="fw-700 text-center">{blog.title}</p>
                                    <p>{blog.about}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="flex align-center justify-center"><p className="text-center more pointer br-tertiary-2 br-10">More</p></div>
        </div>
    );
}