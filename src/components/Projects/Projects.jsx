import React from 'react'
import { ProjectCard } from './ProjectCard';
import styles from "./Projects.module.css";

const data = [
    {
        imageUrl: "",
        title: "",
        description: "",
        url: ""
    }
]

const Projects = () => {
    return (
        <div>
            {
                data.map(item => <ProjectCard key={item.title} {...item} />)
            }
        </div>
    )
}

export { Projects };
