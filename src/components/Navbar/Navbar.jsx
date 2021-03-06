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
        <div id="navbar" className={styles.navbarWrapper}>
            {
                links.map(link => <div className={styles.navlink}><Link to={link.to} smooth={true} duration={300} activeClass="active" activeStyle={{color: "#C84065"}}>{link.title}</Link></div> )
            }
        </div>
    )
}

export { Navbar };
