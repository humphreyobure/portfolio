import React from 'react';
import './Footer.css';
import emoji from 'react-easy-emoji';

function Footer() {
    return (
        <footer>
            <div className="inner">

                <div className="footer-content">
                    <p>{emoji("Make By Humphrey💙")}</p>
                    <p style={{marginTop: "15px"}}>Theme By <a href="https://github.com/humphreyobure">Obure</a></p>
                </div>

            </div>
        </footer>
    );
}
export default Footer;