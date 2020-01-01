import React, { Component } from 'react';
import reactLogo from '../images/react.png';
import visualStudioLogo from '../images/visualstudio.png';
import freeCodeCampLogo from '../images/freecodecamp.png';
import exercism from '../images/exercism.png';
import docker from '../images/docker.png';
import blazor from '../images/blazor.png';

class Projects extends Component { 
    render() {
        return (
            <div>
                <span id="anchor-projects" className="section-spacing-anchor" />
                <div id="projects" className="container">
                    <div className="tile is-ancestor tile-margin-override">
                        <div className="tile is-child box border-radius-override">
                            {/* Title */}
                            <div className="content has-text-centered">
                                <h1 className="title"><span className="shadow-is-purple">Projects</span></h1>
                            </div>
                            {/* Projects */}
                            <hr />
                            <div className="container container-padding">
                                <div className="columns">
                                    <div className="column">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image">
                                                    <img src={reactLogo} alt="React Logo" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="content">
                                                    <p className="subtitle"><span className="shadow-is-blue">Curriculum Viate</span></p>
                                                    <div className="tags are-small">
                                                        <span className="tag">React</span>
                                                        <span className="tag">Gatsby</span>
                                                        <span className="tag">GraphQL</span>
                                                        <span className="tag">Bulma</span>
                                                        <span className="tag">HTML</span>
                                                        <span className="tag">CSS</span>
                                                        <span className="tag">JavaScript</span>
                                                        <span className="tag">Netlify</span>
                                                        <span className="tag">NPM</span>
                                                        <span className="tag">Node</span>
                                                        <span className="tag">Serverless</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a href="https://fredjames.co.uk/" className="card-footer-item">Preview</a>
                                                <a href="https://github.com/freddie2025/PersonalPortfolioGatsby" className="card-footer-item">Source Code</a>
                                            </footer>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="card">
                                            <div className="card-image">
                                            <figure className="image">
                                                <img src={visualStudioLogo} alt="Visual Studio Logo" />
                                            </figure>
                                            </div>
                                            <div className="card-content">
                                            <div className="content">
                                                <p className="subtitle"><span className="shadow-is-red">Wedding Invite</span></p>
                                                    <div className="tags are-small">
                                                        <span className="tag">C#</span>
                                                        <span className="tag">ASP.NET MVC</span>
                                                        <span className="tag">Azure</span>
                                                        <span className="tag">HTML</span>
                                                        <span className="tag">CSS</span>
                                                        <span className="tag">Bulma</span>
                                                        <span className="tag">JavaScript</span>
                                                        <span className="tag">jQuery</span>
                                                        <span className="tag">Google-Maps API</span>
                                                        <span className="tag">PayPal API</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a href="https://frandreaswedding.azurewebsites.net/" className="card-footer-item">Preview</a>
                                                <a href="https://github.com/freddie2025/wedding-e-invite" className="card-footer-item">Source Code</a>
                                            </footer>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image">
                                                    <img src={freeCodeCampLogo} alt="freeCodeCamp Logo" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="content">
                                                    <p className="subtitle"><span className="shadow-is-turquoise">freeCodeCamp</span></p>
                                                    <div className="tags are-small">
                                                        <span className="tag">HTML</span>
                                                        <span className="tag">CSS</span>
                                                        <span className="tag">JavaScript</span>
                                                        <span className="tag">Bootstrap</span>
                                                        <span className="tag">jQuery</span>
                                                        <span className="tag">Sass</span>
                                                        <span className="tag">React</span>
                                                        <span className="tag">Redux</span>
                                                        <span className="tag">D3.js</span>
                                                        <span className="tag">NPM</span>
                                                        <span className="tag">Node.js</span>
                                                        <span className="tag">MongoDB</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a href="https://www.freecodecamp.org/freddie2025" className="card-footer-item">Portfolio</a>
                                                <a href="https://github.com/freddie2025/FreeCodeCamp" className="card-footer-item">Source Code</a>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image">
                                                    <img src={exercism} alt="Exercism Logo" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="content">
                                                    <p className="subtitle"><span className="shadow-is-purple">Exercism.io</span></p>
                                                    <div className="tags are-small">
                                                        <span className="tag">Parallelism</span>
                                                        <span className="tag">Bitwise</span>
                                                        <span className="tag">Recursion</span>
                                                        <span className="tag">Sorting</span>
                                                        <span className="tag">Algorithms</span>
                                                        <span className="tag">Parsing</span>
                                                        <span className="tag">Searching</span>
                                                        <span className="tag">Concurrency</span>
                                                        <span className="tag">Cryptography</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a href="https://exercism.io/profiles/freddie2025/" className="card-footer-item">Portfolio</a>
                                            </footer>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image">
                                                    <img src={docker} alt="Docker Logo" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="content">
                                                    <p className="subtitle"><span className="shadow-is-yellow">eShop on Containers</span></p>
                                                    <div className="tags are-small">
                                                        <span className="tag">.NET Core 2.2</span>
                                                        <span className="tag">C#</span>
                                                        <span className="tag">Angular</span>
                                                        <span className="tag">Typescript</span>
                                                        <span className="tag">SASS</span>
                                                        <span className="tag">Docker</span>
                                                        <span className="tag">kubernetes</span>
                                                        <span className="tag">Microservices</span>
                                                        <span className="tag">SPA</span>
                                                        <span className="tag">AWS</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a className="card-footer-item">Coming Soon</a>
                                                <a href="https://github.com/freddie2025/eShopOnContainers" className="card-footer-item">Source Code</a>
                                            </footer>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image">
                                                    <img src={blazor} alt="Blazor Logo" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="content">
                                                    <p className="subtitle"><span className="shadow-is-blue">Worldwide Importers</span></p>
                                                    <div className="tags are-small">
                                                        <span className="tag">Blazor</span>
                                                        <span className="tag">C#</span>
                                                        <span className="tag">.Net Core 3.0</span>
                                                        <span className="tag">Azure</span>
                                                        <span className="tag">Bootstrap</span>
                                                        <span className="tag">Web Assembly</span>
                                                        <span className="tag">SQL Server</span>
                                                        <span className="tag">Entity Framework Core</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a className="card-footer-item">Coming Soon</a>
                                                <a href="https://github.com/freddie2025/30DaysOfCode" className="card-footer-item">Source Code</a>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;