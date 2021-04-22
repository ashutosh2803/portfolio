import React from 'react'
import styles from "./About.module.css";
import { FaHackerrank } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

const About = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '__blank', 'noopener, norefferer')
        if (newWindow) newWindow.opener = null;
    }
    return (
        <div className={styles.aboutWrapper}>
            <div id="about" className={styles.heading1}>ABOUT</div>
            <div className={styles.underlineBold1}></div>
            <div className={styles.aboutContentWrapper}>
                <div className={styles.aboutContent}>
                    <p>Hello, I'M ASHUTOSH KUMAR</p>
                    <p>Full Stack Developer</p>
                    <p>A passionate aspiring Full Stack Developer skilled in MERN stack,<br /> moulded and shaped by Masai School's numerous trainings.Actively<br /> ready to join in great living team of a good start-up to adapt me in any<br /> situation and environment with ease and perform the best.</p>
                    <div className={styles.aboutOption}>
                        <GrLinkedinOption onClick={() => openInNewTab('https://www.linkedin.com/in/ashutoshkumar2803/')} className={styles.option} />
                        <GrGithub onClick={() => openInNewTab('https://github.com/ashutosh2803')} className={styles.option}/>
                        <FaHackerrank onClick={() => openInNewTab('https://www.hackerrank.com/ashutosh2803')} className={styles.option}/>
                        <button onClick={() => openInNewTab('https://drive.google.com/file/d/1BZLk19KTAanVs7EPJj8ekuM0tafB62wM/view?usp=sharing')} className={styles.myResumeBtn}>My Resume</button>
                    </div>
                    <div>
                        <p>Patna, India <strong>+91 8578062955</strong> || <strong>ashuisalive@gmail.com</strong></p>
                    </div>
                </div>
                <div>
                    <img className={styles.profileImg}  src="https://avatars.githubusercontent.com/u/40117155?v=4" alt="profile_pic"/>
                </div>
            </div>
            <div id="portfolio" className={styles.techStackWrapper}>
                <p className={styles.heading1}>Tech Stack</p>
                <p className={styles.underlineBold1}></p>
                <div className={styles.techStackImgWrapper}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="stack_logo" />
                    <img src="https://p.kindpng.com/picc/s/128-1280187_github-logo-png-github-transparent-png.png" alt="stack_logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="stack_logo" />
                    <img src="data:image/png;base64,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" alt="stack_logo" />
                    <img src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png" alt="stack_logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="stack_logo" />
                    <img src="data:image/png;base64,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" alt="stack_logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="stack_logo" />
                    <img style={{width: "30%"}} src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=775" alt="stack_logo" />
                </div>
            </div>
            <div>
                <p className={styles.heading1}>My Proficiency</p>
                <p className={styles.underlineBold1}></p>
                <div className={styles.proficiencyImgWrapper}>
                    <div>
                        <img src="https://aayushah711.github.io/resources/proficiencies/react.png" alt="proficiency_logo" />
                        <p>React Apps</p>
                        <p>React, Redux, Hooks API, React Router DOM, Material UI</p>
                    </div>
                    <div style={{marginBottom: "6%"}}>
                        <img src="https://aayushah711.github.io/resources/proficiencies/frontend.png" alt="proficiency_logo" />
                        <p>Front End</p>
                        <p>HTML, CSS, Javascript, Bootstrap</p>
                    </div>
                    <div>
                        <img src="https://aayushah711.github.io/resources/proficiencies/backend.png" alt="proficiency_logo" />
                        <p>Back End</p>
                        <p>Node, Express, MongoDB</p>
                    </div>
                    <div style={{marginBottom: "6%"}}>
                        <img src="https://santhisrikh.github.io/images/data.png" alt="proficiency_logo" />
                        <p>Data Structures</p>
                        <p>Arrays,Stacks and Queues, Linked Lists, Algorithms</p>
                    </div>
                </div>
            </div>
            <div>
                <p className={styles.heading1}>I have Completed</p>
                <p className={styles.underlineBold1}></p>
                <div className={styles.completedWrapper}>
                    <div>
                        <div><div>1000+</div></div>
                        <p>Hours of Coding</p>
                    </div>
                    <div>
                        <div><div>200+</div></div>
                        <p>Online Judge Problems</p>
                    </div>
                    <div>
                        <div><div>300+</div></div>
                        <p>Git Commits</p>
                    </div>
                    <div>
                        <div><div>4+</div></div>
                        <p>Projects</p>
                    </div>
                </div>
            </div>
            <div className={styles.githubWrapper}>
                <p className={styles.heading1}>Github</p>
                <p className={styles.underlineBold1}></p>
                <div className={styles.calendarWrapper}>
                    <div  onClick={() => openInNewTab('https://github.com/ashutosh2803')} className={styles.calendarHeading}>@ashutosh2803 on Github</div>
                    <div className={styles.calendar}>
                        <img src="Contributions.png" alt="contributions_pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { About };
