import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.css'; 

class Footer extends Component { 
    render() {
        return (
            <footer className="footer footer-styles">
                <div className="content has-text-centered">
                    <br />
                    <div className="container">
                        <div className="content has-text-centered">
                            <div className="control level-item" />
                            <p className="is-size-6">
                                Handcrafted with <FontAwesomeIcon icon="heart" className="footer-red-heart" /> by myself. Copyright © 2020<br />
                                Built with <a href="https://reactjs.org">React</a> + 
                                <a href="https://bulma.io"> Bulma</a> + 
                                <a href="https://www.gatsbyjs.org/"> Gatsby</a> 
                                <br />
                                Hosted on <a href="https://www.netlify.com/">Netlify</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;