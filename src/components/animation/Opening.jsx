import React from 'react';
import { TsParticles } from './TsParticles';
import styles from "./Opening.module.css";
import {VscArrowRight} from "react-icons/vsc"

const Opening = () => {
    return (
        <div>
            <div className={styles.OpeningText}>
                <div>Hello, I'm <span style={{color: "#E5496E"}}>Ashutosh Kumar</span>.<br />I'm a full-stack web developer.</div>
                <div className={styles.viewWorkBtn}>View my work <span className={styles.arrowRight}><VscArrowRight/></span></div>
            </div>
            <TsParticles />
        </div>
    )
}

export { Opening };
