import React from 'react'
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

const links = [
    {
        to: "home",
        title: "HOME"
    },
    {
        to: "about",
        title: "ABOUT"
    },
    {
        to: "portfolio",
        title: "PORTFOLIO"
    },
    {
        to: "blogs",
        title: "BLOGS"
    },
    {
        to: "contact",
        title: "CONTACT"
    }
]

const Navbar = () => {
    return (
        <div className={styles.navbarWrapper}>
            {
                links.map(link => <Link className={styles.navlink} to={link.to} smooth={true} activeClass="active" activeStyle={{color: "#C84065"}}>{link.title}</Link> )
            }
        </div>
    )
}

export { Navbar };
