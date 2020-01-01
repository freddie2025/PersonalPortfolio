import React, { Component } from 'react';
import '../styles/about.css'; 
import avatar from '../images/avatar.png';

class About extends Component { 
    render() {
        return (
            <div id="about" className="container">
                <div className="tile is-ancestor section-spacing-parent tile-margin-override">
                    <div className="tile is-child box border-radius-override">
                        <div className="container container-padding">
                            <div>
                                <img alt="Avatar" src={avatar} className="avatar" />
                            </div>
                            <div className="columns is-desktop section-spacing-avatar">
                                <div className="column is-one-fifth-desktop ">
                                    <h1 className="title"><span className="shadow-is-red">About Me</span></h1>
                                </div>
                                <div className="column is-four-fifths-desktop">
                                    <content>
                                        <h1 className="title">Hi! I'm Fred James, <span className="shadow-is-turquoise">Senior .NET Developer</span> currently based in <span className="shadow-is-purple">Bristol</span>.</h1>
                                        <p>I take great pride in what I do. I deliver code with integrity. I believe programming is a craft that takes a lifetime to master. I look to the sages of our industry for guidance and try to learn from their ideas. Programming is a passion; I feel privileged to have found my career and not my 9-5.</p>
                                        <br />
                                        <p>I've been working in development for over 12 years. In this time, I have worked in all facets of software delivery. I have a wealth of experience in multiple markets and regions across the globe. I specialise in all things Azure,  .NET and SQL Server.</p>
                                        <br />
                                        <p>If you're looking for an experienced, passionate developer who craves the complex challenges of our industry, please get in touch.</p>
                                        <div className="tags are-large skill-tags-section">
                                            <span className="tag is-medium bg-is-blue">Azure</span>
                                            <span className="tag is-medium bg-is-turquoise">SQL Server</span>
                                            <span className="tag is-medium bg-is-yellow">C#</span>
                                            <span className="tag is-medium bg-is-red">.NET</span>
                                            <span className="tag is-medium bg-is-blue">React</span>
                                            <span className="tag is-medium bg-is-purple">Redux</span>
                                            <span className="tag is-medium">Clean Code</span>
                                            <span className="tag is-medium bg-is-turquoise">S.O.L.I.D</span>
                                            <span className="tag is-medium bg-is-red">TDD</span>
                                            <span className="tag is-medium">Entity Framework</span>
                                            <span className="tag is-medium bg-is-purple">Agile</span>
                                            <span className="tag is-medium bg-is-blue">Scrum</span>
                                        </div>
                                        {/* Scroll */}
                                        <a href="#anchor-clients" address="true">
                                            <svg width={32} height={32} className="scroll-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                <path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z" />
                                            </svg>
                                        </a>
                                    </content>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;