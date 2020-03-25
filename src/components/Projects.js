import React, { Component } from 'react';
import reactLogo from '../images/react.png';
import visualStudioLogo from '../images/visualstudio.png';
import freeCodeCampLogo from '../images/freecodecamp.png';
import exercism from '../images/exercism.png';
import docker from '../images/docker.png';
import weeklyChallenge from '../images/weeklychallenge.png';
import pepsi from '../images/pepsi.png';
import timCorey from '../images/timcorey.png';
import powerbi from '../images/powerbi.png';

class Projects extends Component { 
    render() {
        return (
            <div>
                <span id="anchor-projects" className="section-spacing-anchor" />
                <div id="projects" className="container">
                    <div className="tile is-12 is-ancestor tile-margin-override">
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
                                                        <span className="tag">React Hooks</span>
                                                        <span className="tag">Gatsby</span>
                                                        <span className="tag">GraphQL</span>
                                                        <span className="tag">Bulma</span>
                                                        <span className="tag">HTML</span>
                                                        <span className="tag">CSS</span>
                                                        <span className="tag">JavaScript</span>
                                                        <span className="tag">Netlify</span>
                                                        <span className="tag">NPM</span>
                                                        <span className="tag">Node.js</span>
                                                        <span className="tag">Serverless</span>
                                                        <span className="tag">reCaptcha v3</span>
                                                        <span className="tag">Git</span>
                                                        <span className="tag">CI/CD</span>
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
                                                <p className="subtitle"><span className="shadow-is-purple">Tournament Tracker</span></p>
                                                    <div className="tags are-small">
                                                    <span className="tag">C#</span>
                                                        <span className="tag">.NET Framework 4.8</span>
                                                        <span className="tag">Windows Form</span>
                                                        <span className="tag">SQL Server</span>
                                                        <span className="tag">ORM</span>
                                                        <span className="tag">Dapper</span>
                                                        <span className="tag">OOP</span>
                                                        <span className="tag">SOLID</span>
                                                        <span className="tag">IO</span>
                                                        <span className="tag">Text Files</span>
                                                        <span className="tag">Email</span>
                                                        <span className="tag">Git</span>
                                                        <span className="tag">GitHub</span>
                                                        <span className="tag">Project Planning</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a href="https://github.com/freddie2025/TournamentTracker" className="card-footer-item">Source Code</a>
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
                                                        <span className="tag">Express</span>
                                                        <span className="tag">Ajax</span>
                                                        <span className="tag">MongoDB</span>
                                                        <span className="tag">Mongoose</span>
                                                        <span className="tag">JSON</span>
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
                                                    <p className="subtitle"><span className="shadow-is-blue">Exercism.io</span></p>
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
                                                        <span className="tag">Math</span>
                                                        <span className="tag">Classes</span>
                                                        <span className="tag">Strings</span>
                                                        <span className="tag">Events</span>
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
                                                    <p className="subtitle"><span className="shadow-is-red">eShop on Containers</span></p>
                                                    <div className="tags are-small">
                                                        <span className="tag">Cosmos DB</span>
                                                        <span className="tag">Service Bus</span>
                                                        <span className="tag">Redis Cache</span>
                                                        <span className="tag">Docker</span>
                                                        <span className="tag">Azure</span>
                                                        <span className="tag">Key Vault</span>
                                                        <span className="tag">Kubernetes</span>
                                                        <span className="tag">Microservices</span>
                                                        <span className="tag">Blob Storage</span>
                                                        <span className="tag">RabbitMQ</span>
                                                        <span className="tag">Azure Pipelines</span>
                                                        <span className="tag">.NET Core</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <p className="card-footer-item">Coming Soon</p>
                                            </footer>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image">
                                                    <img src={weeklyChallenge} alt="Weekly Challange Logo" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="content">
                                                    <p className="subtitle"><span className="shadow-is-yellow">Weekly Challenge</span></p>
                                                    <div className="tags are-small">
                                                        <span className="tag">C#</span>
                                                        <span className="tag">.NET Core</span>
                                                        <span className="tag">.NET Core API</span>
                                                        <span className="tag">ASP.NET Core</span>
                                                        <span className="tag">Docker</span>
                                                        <span className="tag">.NET Core CLI</span>
                                                        <span className="tag">Unit Testing</span>
                                                        <span className="tag">Azure DevOps</span>
                                                        <span className="tag">MongoDB</span>
                                                        <span className="tag">WPF</span>
                                                        <span className="tag">LINQ</span>
                                                        <span className="tag">Razor Pages</span>
                                                        <span className="tag">Git</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a href="https://www.iamtimcorey.com/p/c-weekly-challenges" className="card-footer-item">More Info</a>
                                                <a href="https://github.com/freddie2025/WeeklyChallenge" className="card-footer-item">Source Code</a>
                                            </footer>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image">
                                                    <img src={pepsi} alt="Pepsi Logo" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="content">
                                                    <p className="subtitle"><span className="shadow-is-blue">Soda Machine</span></p>
                                                    <div className="tags are-small">
                                                        <span className="tag">C#</span>
                                                        <span className="tag">.NET Core</span>
                                                        <span className="tag">Console Application</span>
                                                        <span className="tag">Azure DevOps</span>
                                                        <span className="tag">IoC</span>
                                                        <span className="tag">Dependeny Injection</span>
                                                        <span className="tag">IO</span>
                                                        <span className="tag">DRY</span>
                                                        <span className="tag">Azure</span>
                                                        <span className="tag">Design Patterns</span>
                                                        <span className="tag">SOLID</span>   
                                                        <span className="tag">Unit-Testing</span>   
                                                        <span className="tag">TDD</span> 
                                                        <span className="tag">xUnit</span>   
                                                    </div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a href="https://github.com/freddie2025/SodaMachine" className="card-footer-item">Source Code</a>
                                            </footer>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image">
                                                    <img src={timCorey} alt="Tim Corey" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="content">
                                                    <p className="subtitle"><span className="shadow-is-blue">Fred Co Retail Manager</span></p>
                                                    <div className="tags are-small">
                                                        <span className="tag">C#</span>
                                                        <span className="tag">.NET Core</span>
                                                        <span className="tag">WPF</span>
                                                        <span className="tag">MVVM</span>
                                                        <span className="tag">SQL Server</span>
                                                        <span className="tag">EF Core</span>
                                                        <span className="tag">WebAPI</span>
                                                        <span className="tag">Azure DevOps</span>
                                                        <span className="tag">Azure</span>
                                                        <span className="tag">IoC</span>
                                                        <span className="tag">Authentication</span>
                                                        <span className="tag">Logging</span>
                                                        <span className="tag">Design Patterns</span>
                                                        <span className="tag">SOLID</span>   
                                                    </div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <a href="https://github.com/freddie2025/FredCoRetailManager" className="card-footer-item">Source Code</a>
                                            </footer>
                                        </div>
                                    </div>
                                    <div className="column">

                                    <div className="card">
                                            <div className="card-image">
                                                <figure className="image">
                                                    <img src={powerbi} alt="Power BI" />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <div className="content">
                                                    <p className="subtitle"><span className="shadow-is-yellow">World Wide Importers</span></p>
                                                    <div className="tags are-small">
                                                        <span className="tag">PowerBI</span> 
                                                        <span className="tag">SQL Server</span>
                                                        <span className="tag">SSAS</span>
                                                        <span className="tag">SSRS</span>
                                                        <span className="tag">SSIS</span> 
                                                        <span className="tag">KPIs</span>
                                                        <span className="tag">DAX</span>
                                                        <span className="tag">Data Warehouse</span>
                                                        <span className="tag">T-SQL</span>
                                                        <span className="tag">ETL</span>
                                                        <span className="tag">OLAP</span>
                                                        <span className="tag">Tabular</span>
                                                        <span className="tag">Data Modeling</span>
                                                        <span className="tag">Multi-Dimensional Models</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer className="card-footer">
                                                <p className="card-footer-item">Coming Soon</p>
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