import React from 'react';
import { Link } from "react-router-dom";

const portfolioPage = () => (
    <div>
        <h1>My Projects</h1>
        <ol>
            <li><Link to='1'>Item One</Link></li>
            <li><Link to='2'>Item Two</Link></li>
        </ol>
    </div>
);

export default portfolioPage;