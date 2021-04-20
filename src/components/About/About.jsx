import React from 'react'
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.heading1}>ABOUT</div>
            <div className={styles.underlineBold1}></div>
            <div >
                <div>
                    <p>Hello, I'M ASHUTOSH KUMAR</p>
                    <p>Full Stack Developer</p>
                    <p>A passionate aspiring Full Stack Developer skilled in MERN stack,<br /> moulded and shaped by Masai School's numerous trainings.Actively<br /> ready to join in great living team of a good start-up to adapt me in any<br /> situation and environment with ease and perform the best.</p>
                    <div>
                        <button>My Resume</button>
                    </div>
                    <div>
                        <p>Patna, India +91 8578062955 || ashuisalive@gmail.com</p>
                    </div>
                </div>
                <div>
                    <img src="./profile.jpg" alt="profile_pic"/>
                </div>
            </div>
        </div>
    )
}

export { About };
