import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";

const links = [
    {
        to: "/",
        title: "HOME"
    },
    {
        to: "/about",
        title: "ABOUT"
    },
    {
        to: "/portfolio",
        title: "PORTFOLIO"
    },
    {
        to: "/blogs",
        title: "BLOGS"
    },
    {
        to: "/contact",
        title: "CONTACT"
    }
]

const Navbar = () => {
    return (
        <div className={styles.navbarWrapper}>
            {
                links.map(link => <NavLink className={styles.navlink} to={link.to} activeStyle={{color: "#C84065"}}>{link.title}</NavLink> )
            }
        </div>
    )
}

export { Navbar };
