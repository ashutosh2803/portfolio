import React from 'react'
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ imgUrl, title, description, repoUrl, demoUrl, techStack }) => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '__blank', 'noopener, norefferer')
        if (newWindow) newWindow.opener = null;
    }
    return (
        <div className={styles.blogCardWrapper}>
            <img className={styles.img} src={imgUrl} alt="blog_logo" />
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.techStack}>
                {
                    techStack.map(logo => <img src={logo} alt="logo"/>)
                }
            </div>
            <div className={styles.btns}>
                <button onClick={() => openInNewTab(demoUrl)}>DEMO</button>
                <button onClick={() => openInNewTab(repoUrl)}>GITHUB</button>
            </div>
        </div>
    )
}

export { ProjectCard };
