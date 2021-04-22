import React from 'react'
import styles from "./Contact.module.css";
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrMedium } from "react-icons/gr";
import { FaHackerrank } from "react-icons/fa";
import * as emailjs from "emailjs-com";

const Contact = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '__blank', 'noopener, norefferer')
        if (newWindow) newWindow.opener = null;
    }
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_ovgt282', 'template_pav36pl', e.target, 'user_VC8tqJxTj2fk0geJdAXfi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <div id="contact" className={styles.contactWrapper}>
            <div className={styles.heading}>CONTACT</div>
            <div className={styles.underlineBold}></div>
            <p className={styles.question}>Have a question or want to work together?</p>
            <form onSubmit={sendEmail} className={styles.form}>
                <input name="user_name" type="text" placeholder="Name" />
                <input name="user_email" type="email" placeholder="Enter email" />
                <textarea name="message" placeholder="Your Message" />
                <input type="submit" value="SUBMIT" />
            </form>
            <div className={styles.footerWrapper}>
                <div className={styles.footerLogos}>
                    <div><GrLinkedinOption onClick={() => openInNewTab('https://www.linkedin.com/in/ashutoshkumar2803/')} /></div>
                    <div><GrGithub onClick={() => openInNewTab('https://github.com/ashutosh2803')}/></div>
                    <div><GrMedium onClick={() => openInNewTab('https://ashuisalive.medium.com/')}/></div>
                    <div><FaHackerrank onClick={() => openInNewTab('https://www.hackerrank.com/ashutosh2803')}/></div>
                </div>
                <div className="copyright">ASHUTOSH KUMAR <span style={{ color: "#E5496E" }}>&copy;2021</span></div>
            </div>
        </div>
    )
}

export { Contact };
