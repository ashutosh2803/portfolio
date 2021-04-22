import React from 'react'
import styles from "./Blog.module.css";
import { BlogCard } from './BlogCard';

const data = [
    {
        imgUrl: "https://user-images.githubusercontent.com/40117155/100494281-58224c00-3166-11eb-9ad9-9bfaee9c5641.png",
        title: "How we build the monday.com website clone",
        url: "https://ashuisalive.medium.com/how-we-build-the-monday-com-website-clone-b43bc054b94f",
        description: "We, team Silicon at Masai School developed the clone on monday.com in just 3 days as a part of our curriculum’s Module 1 project evaluation."
    },
    {
        imgUrl: "https://user-images.githubusercontent.com/40117155/103502830-83d8d600-4e78-11eb-9783-d981bd922bba.png",
        title: "How we build the hellobonsai.com from scratch",
        url: "https://ashuisalive.medium.com/how-we-build-hellobonsai-com-from-scratch-16a6183acee9",
        description: "We team of 3 members at Masai School to developed the clone of hellobonsai.com in 4 days as a part of our curriculum’s Unit 2 Build Week evaluation."
    },
    {
        imgUrl: "https://user-images.githubusercontent.com/40117155/111150810-911aeb00-85b4-11eb-95a5-63b0661b7e15.png",
        title: "Building the Hindu website Clone using React",
        url: "https://ashuisalive.medium.com/building-the-hindu-website-clone-using-react-890e42e08066",
        description: "In this blog, i would like to share with you how we came up with the project and implemented it from scratch along with 3 of my teammates."
    }
]

const Blog = () => {
    return (
        <div id="blogs" className={styles.blogWrapper}>
            <div className={styles.heading1}>BLOGS</div>
            <div className={styles.underlineBold1}></div>
            <div style={{display: "flex", flexDirection: "row", margin: "1%"}}>
                {
                    data.map(item => <BlogCard {...item} key={item.title}/>)
                }
            </div>
        </div>
    )
}

export { Blog };
