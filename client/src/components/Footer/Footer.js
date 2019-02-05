import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <p><i className="fab fa-react react-icon"></i></p>
            <p>Medieval Zombies</p>
            <p><a id="github" href="https://github.com/kmstern4/medieval-zombies" target="blank"><i className="fab fa-github gh-icon"></i></a></p>
        </footer>
    )
}

export default Footer;