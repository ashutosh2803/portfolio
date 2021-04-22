import React from 'react';
import styles from "./Opening.module.css";
import {VscArrowDown} from "react-icons/vsc"
import { Link } from 'react-scroll';

const Opening = () => {
    return (
        <>
            <div id="home" className={styles.OpeningText}>
                <div>Hello, I'm <span style={{color: "#E5496E"}}>Ashutosh Kumar</span>.<br />I'm a full-stack web developer.</div>
                <Link to="about" smooth={true} activeClass="active">
                <div className={styles.viewWorkBtn}>
                    <div>View my work</div>
                    <div><VscArrowDown className={styles.arrowLeft} /></div>
                </div>
                </Link>
            </div>
            <img src="background.jpg" className={styles.background} alt="background_img" />
        </>
    )
}

export { Opening };
