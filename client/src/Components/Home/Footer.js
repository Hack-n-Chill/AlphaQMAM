import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="page-footer grey darken-4">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="Title">Codemon</h5>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <ul>
                            <li className="text">Github</li>
                            <li className="text">Facebook</li>
                            <li className="text">LinkedIn</li>
                            <li className="text">Instagram</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container center">
                    © 2020 Copyright Text
                </div>
            </div>
        </footer>
    );
};

export default Footer;