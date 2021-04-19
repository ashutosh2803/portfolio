import React from 'react'
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contactWrapper">
            <div className="heading">CONTACT</div>
            <div className="underlineBold"></div>
            <p className="question">Have a question or want to work together?</p>
            <form className="form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Enter email" />
                <textarea placeholder="Your Message" />
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export { Contact };
