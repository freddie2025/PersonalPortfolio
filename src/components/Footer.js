import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bulma from '../images/made-with-bulma.png';
import gatsby from '../images/made-with-gatsby.png';
import '../styles/footer.css'; 

class Footer extends Component { 
    render() {
        return (
            <footer className="footer footer-styles">
                <div className="content has-text-centered">
                    <br />
                    <div className="container">
                        <div className="content has-text-centered">
                            <div className="control level-item has-text-centered" />
                            <p className="is-size-6">
                                Handcrafted with <FontAwesomeIcon icon="heart" className="footer-red-heart" /> by myself. Copyright  © 2020
                                <br />
                                Built using
                                <br /> 
                            </p>
                            <div className="content has-text-centered">
                                <a href="https://www.netlify.com">
                                    <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg" className="logo-padding is-inline-block" alt="Deploys by Netlify" />
                                </a>
                                <a href="https://bulma.io">
                                    <img src={bulma} alt="Made with Bulma" className="logo-padding is-inline-block" width="192" height="36" />
                                </a>
                                <a href="https://www.gatsbyjs.org">
                                    <img src={gatsby} alt="Made with Gatsby" className="logo-padding is-inline-block" width="130" height="51" />
                                </a>  
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;