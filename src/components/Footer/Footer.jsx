import React from 'react'
import { Contact } from '../Contact/Contact';
import styles from "./Footer.module.css";
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrMedium } from "react-icons/gr";
import { FaQuora } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <Contact /> 
            <div className={styles.footerWrapper}>
                <div className={styles.footerLogos}>
                    <div><GrLinkedinOption /></div>
                    <div><GrGithub/></div>
                    <div><GrMedium/></div>
                    <div><FaQuora/></div>
                </div>
                <div className="copyright">ASHUTOSH KUMAR <span style={{ color: "#E5496E" }}>&copy;2021</span></div>
            </div>
        </>
    )
}

export { Footer };
