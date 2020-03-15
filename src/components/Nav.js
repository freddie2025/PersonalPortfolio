import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pdf from '../documents/Frederick-James-Curriculum-Vitae.pdf';
import '../styles/nav.css'; 

const Nav = () => {

    const [isActive, setisActive] = React.useState(false);

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
                <a 
                    onClick={() => {
                        setisActive(!isActive);
                    }}
                    role="button" 
                    className={`navbar-burger burger ${isActive ? "is-active" : ""}`} 
                    aria-label="menu" 
                    href="#Nav" 
                    aria-expanded="false" 
                    data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navbarBasicExample" className={`navbar-menu nav-background ${isActive ? "is-active" : ""}`}>
                <div className="navbar-end">
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link" href="#Nav">Resume</a>
                    <div className="navbar-dropdown border-radius-override">
                        <a className="navbar-item" href="#experience">Work Experience</a>
                        <a className="navbar-item" href="#skills">Skills</a>
                        <a className="navbar-item" href="#assessments">Assessments</a>
                        <a className="navbar-item" href="#references">References</a>
                        <hr className="navbar-divider" />
                        <a className="navbar-item" href={pdf}>Download</a>
                    </div>
                </div>
                    <a className="navbar-item" href="https://medium.com/@freddie2025">Blog</a>
                    <a className="navbar-item" href="#anchor-projects">Projects</a>
                    <a className="navbar-item" href="#anchor-contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;