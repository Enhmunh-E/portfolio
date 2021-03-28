import React from 'react'
import './skills.scss'
export const Skills = ({ ref }) => {
    const skills = [
        {
            name: "React JS",
            skillPercent: 85,
        },{
            name: "HTML",
            skillPercent: 90,
        },{
            name: "CSS",
            skillPercent: 85,
        },{
            name: "JS",
            skillPercent: 85,
        },{
            name: "C++",
            skillPercent: 80,
        },{
            name: "Python",
            skillPercent: 70,
        },{
            name: "NPM",
            skillPercent: 85,
        },{
            name: "Firebase",
            skillPercent: 85,
        },
    ]
    return (
        <div className="skills c-default fs-20 pl-30 lh-normal my-50" ref={ref}>
            <p className="fw-700 fs-35 py-20">Skills</p>
            <p className="py-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit aperiam, ab cum et dolore libero. </p>
            <div className="skill-container">
                {
                    skills.map((skill) => {
                        return (
                            <div className="skill">
                                <p className="fw-700">{skill.name}</p>
                                <div className="flex flex-row skillp br-default-2 fs-16 lh-none">
                                    <p className={`percent w-${skill.skillPercent} b-tertiary text-center`}>{skill.skillPercent}%</p>
                                    <p className={`percent w-${100-skill.skillPercent} b-primary text-center`}>{100-skill.skillPercent}%</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}