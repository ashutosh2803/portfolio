import React from 'react'
import styles from "./BlogCard.module.css";

const BlogCard = ({imgUrl, title, description}) => {
    return (
        <div className={styles.blogCardWrapper}>
            <img className={styles.img} src={imgUrl} alt="blog_logo" />
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export { BlogCard };
