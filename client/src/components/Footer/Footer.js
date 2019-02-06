import React from "react";
import "./Footer.scss";
import raygun from '../../assets/images/icon-ray.png';
function Footer() {
    return (
        <footer className="footer">
            <p><a id="phaser" href="http://phaser.io/" target="blank"> <img src={raygun} className="icon-ray-pulse" alt="raygun"></img></a></p>
            <p >Medieval Zombies</p>
            <p><a id="github" href="https://github.com/kmstern4/medieval-zombies" target="blank"><i className="fab fa-github gh-icon-pulse"></i></a></p>
        </footer>
    )
}

export default Footer;