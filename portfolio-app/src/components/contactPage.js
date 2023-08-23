import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => (
    <div>
        <h1>Contact</h1>
        <ol>
            <li>Email: gianpaolostasi@gmail.com</li>
            <li>Phone: 954-830-5868</li>
            <li><Link to="https://www.linkedin.com/in/gianpaolostasi/" target="_blank">LinkedIn</Link></li>
        </ol>
    </div>
);

export default ContactPage;