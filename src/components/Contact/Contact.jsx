import React from 'react'
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={styles.contactWrapper}>
            <div className={styles.heading}>CONTACT</div>
            <div className={styles.underlineBold}></div>
            <p className={styles.question}>Have a question or want to work together?</p>
            <form className={styles.form}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Enter email" />
                <textarea placeholder="Your Message" />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export { Contact };
