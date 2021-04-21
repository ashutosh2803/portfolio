import React from 'react'
import styles from "./BlogCard.module.css";

const BlogCard = ({ imgUrl, title, description, url }) => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '__blank', 'noopener, norefferer')
        if (newWindow) newWindow.opener = null;
    }
    return (
        <div onClick={() => openInNewTab(url)} className={styles.blogCardWrapper}>
            <img className={styles.img} src={imgUrl} alt="blog_logo" />
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export { BlogCard };
