import React from 'react';
import './components.css';

const Footer = () => (
    <footer className='footer'>
        <div className="flex">
            <ul className="flex-item" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li><h3 style={{ textDecoration: 'underline'}}>Contact Us</h3></li>
                <li><strong>Phone:</strong> +1 234 567 890</li>
                <li><strong>Email:</strong> <a href="mailto:contact@techtimes.com">contact@techtimes.com</a></li>
                <li><strong>Address:</strong> Area 52, Nevada, 89418 (37.6250° N, 115.0000° W)</li>
            </ul>
            <div className='flex-item center-item'>
                <h2>TechTimes</h2>
                <p>Copyright © 2032 Ultron, Inc. All rights reserved.<br />
                    <a href='' target="_blank" rel="noopener noreferrer"> Terms of Use</a> | <a href='' target="_blank" rel="noopener noreferrer">Privacy Policy</a></p>
            </div>
            <div><img src="../../public/puter.gif" className='pac flex-item'></img></div>
        </div>
    </footer>
);

export default Footer;