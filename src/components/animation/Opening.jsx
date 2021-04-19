import React from 'react'
import styled from 'styled-components';
import { TsParticles } from './TsParticles';
import "./Opening.css";
import {VscArrowRight} from "react-icons/vsc"

const Opening = () => {
    return (
        <div>
            <div className="OpeningText">
                <div>Hello, I'm <span style={{color: "#E5496E"}}>Ashutosh Kumar</span>.<br />I'm a full-stack web developer.</div>
                <div className="viewWorkBtn">View my work <span className="arrowRight"><VscArrowRight/></span></div>
            </div>
            <TsParticles />
        </div>
    )
}

export { Opening };
