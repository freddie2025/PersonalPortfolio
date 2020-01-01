import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pdf from '../documents/Frederick-James-Curriculum-Vitae.pdf';
import '../styles/nav.css'; 

if (typeof document !== 'undefined') {
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
})
};

class Nav extends Component { 
    render() {
        return (
            <nav id="Nav" className="navbar is-white transparent-background" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a href="https://twitter.com/freddie2025" className="navbar-item">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                    <a href="https://github.com/freddie2025" className="navbar-item">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    <a href="https://www.linkedin.com/in/freddie2025" className="navbar-item">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                    </a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" href="#Nav" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu nav-background">
                    <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="#Nav">Resume</a>
                        <div className="navbar-dropdown border-radius-override">
                            <a className="navbar-item" href="#experience">Work Experience</a>
                            <a className="navbar-item" href="#education">Eductaion</a>
                            <a className="navbar-item" href="#skills">Skills</a>
                            <a className="navbar-item" href="#references">References</a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item" href={pdf}>Download</a>
                        </div>
                    </div>
                        <a className="navbar-item" href="#anchor-projects">Projects</a>
                        <a className="navbar-item" href="#anchor-contact">Contact</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;