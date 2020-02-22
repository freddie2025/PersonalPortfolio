import React, { Component } from 'react';
import pdf from '../documents/Frederick-James-Curriculum-Vitae.pdf';
import '../styles/resume.css'; 
import pluralsightmvc5 from '../images/pluralsightmvc5.png';
import pluralsightcsharp from '../images/pluralsightcsharp.png';
import pluralsighttsql from '../images/pluralsighttsql.png';

class Resume extends Component { 
    render() {
        return (
            <div>
                <span id="anchor-resume" className="section-spacing-anchor" />
                    <div id="resume" className="container">
                        <div className="tile is-ancestor tile-margin-override">
                            <div className="tile is-child box border-radius-override">
                                <div className="content has-text-centered">
                                    <h1 className="title"><span className="shadow-is-turquoise">Resume</span></h1>
                                </div>
                                <hr />
                                <div id="experience" className="container container-padding">
                                    <div className="columns is-desktop">
                                        <div className="column is-one-fifths-desktop ">
                                            <h1 className="title"><span className="shadow-is-turquoise">Work Experience</span></h1>
                                        </div>
                                        <div className="column is-four-fifths-desktop ">
                                            <div className="content">
                                                <div className="columns">
                                                    <div className="column">
                                                        <h3 className="title margin-bottom-override"><span className="shadow-is-turquoise">Senior Software Developer</span></h3>
                                                        <p>Spark! Data Systems, Bristol United Kingdom</p>
                                                    </div>
                                                    <div className="column is-hidden-mobile">
                                                        <p className="margin-bottom-override right-readable-text"><span className="shadow-is-turquoise">May 2019 - Current</span></p>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li>Utilising SignalR and SendGrid I created a real-time messaging service managing all tasks of our application.</li>
                                                    <li>Built and automated, via Windows Service and SSIS, a suite of ETLs underpinning Shipowner&#39;s core fiscal reporting.</li>
                                                    <li>Designed the underlying class structure for the Claim Management module of Tindall Riley&#39;s maritime underwriting system.</li>
                                                </ul>
                                                <br />
                                                <div className="tags are-medium">
                                                    <span className="tag bg-is-blue">ASP.NET</span>
                                                    <span className="tag bg-is-blue">Web API</span>
                                                    <span className="tag bg-is-blue">SignalR</span>
                                                    <span className="tag bg-is-blue">SQL Server</span>
                                                    <span className="tag bg-is-blue">ADO.NET</span>
                                                    <span className="tag bg-is-blue">Azure</span>
                                                    <span className="tag bg-is-blue">xUnit</span>
                                                    <span className="tag bg-is-blue">Azure DevOps</span>
                                                    <span className="tag bg-is-blue">CI/CD</span>
                                                    <span className="tag bg-is-blue">Mentoring</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="content">
                                                <div className="columns">
                                                    <div className="column">
                                                        <h3 className="title margin-bottom-override"><span className="shadow-is-red">Contracting and Studying</span></h3>
                                                        <p>Remote, Stockholm Sweden</p>
                                                    </div>
                                                    <div className="column is-hidden-mobile">
                                                        <p className="margin-bottom-override right-readable-text"><span className="shadow-is-red">Oct 2017 - May 2019</span></p>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li>Migrated data and query logic from several legacy applications into standalone instances of SQL Server. </li>
                                                    <li>Ported a suite of desktop applications written in FoxPro over to C# and WPF.</li>
                                                    <li>In-between contracting I took the opportunity to modernise my skillset with the latest Microsoft stack.</li>
                                                </ul>
                                                <br />
                                                <div className="tags are-medium">
                                                    <span className="tag bg-is-blue">C# 8.0</span>
                                                    <span className="tag bg-is-blue">Azure</span>
                                                    <span className="tag bg-is-blue">.NET Core</span>
                                                    <span className="tag bg-is-blue">ASP.NET MVC</span>
                                                    <span className="tag bg-is-blue">ASP.NET Core</span>
                                                    <span className="tag bg-is-blue">Web API</span>
                                                    <span className="tag bg-is-blue">EF 6</span>
                                                    <span className="tag bg-is-blue">EF Core</span>
                                                    <span className="tag bg-is-blue">React</span>
                                                    <span className="tag bg-is-blue">Redux</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="content">
                                                <div className="columns">
                                                    <div className="column">
                                                        <h3 className="title margin-bottom-override"><span className="shadow-is-yellow">Professional Services Consultant</span></h3>
                                                        <p>Tribal Group, Sydney Australia </p>
                                                    </div>
                                                    <div className="column is-hidden-mobile">
                                                        <p className="margin-bottom-override right-readable-text"><span className="shadow-is-yellow">May 2015 - Oct 2017</span></p>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li>Migrated $500m worth of student loans across 11 institutes from the customers legacy system to our new infrastructure.</li>
                                                    <li>Fulfilled the ETL requirement of quarterly reporting of vital financial statistics to central government ministers.</li>
                                                    <li>Reconciled $100m of discrepancies in TAFE's 14/15 accountants. Passing KPMG's internal audit and crucially returning TAFE to financial compliance.</li>
                                                </ul>
                                                <br />
                                                <div className="tags are-medium">
                                                    <span className="tag bg-is-blue">SQL Server</span>
                                                    <span className="tag bg-is-blue">Power BI</span>
                                                    <span className="tag bg-is-blue">Powershell</span>
                                                    <span className="tag bg-is-blue">SSIS</span>
                                                    <span className="tag bg-is-blue">SSRS</span>
                                                    <span className="tag bg-is-blue">SSAS</span>
                                                    <span className="tag bg-is-blue">DAX</span>
                                                    <span className="tag bg-is-blue">ETL</span>
                                                    <span className="tag bg-is-blue">Oracle 12c</span>
                                                    <span className="tag bg-is-blue">Git</span>
                                                    <span className="tag bg-is-blue">Customer Facing</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="content">
                                                <div className="columns">
                                                    <div className="column">
                                                        <h3 className="title margin-bottom-override"><span className="shadow-is-purple">IT Support Consultant</span></h3>
                                                        <p>Tribal Group, Sydney Australia </p>
                                                    </div>
                                                    <div className="column is-hidden-mobile">
                                                        <p className="margin-bottom-override right-readable-text"><span className="shadow-is-purple">Aug 2013 - May 2015</span></p>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li>Provided product training to the level 1-2 help desks.</li>
                                                    <li>Helped troubleshoot the integration of Tribal's messaging service to the customer's Tibco based middleware.</li>
                                                    <li>Assisted the configuration and deployment of our software on the customer's infrastructure.</li>
                                                    <li>Managed the escalation of level 3 support tickets with the UK based development teams.</li>
                                                </ul>
                                                <br />
                                                <div className="tags are-medium">
                                                    <span className="tag bg-is-blue">SQL Server</span>
                                                    <span className="tag bg-is-blue">Oracle 12c</span>
                                                    <span className="tag bg-is-blue">Windows Server</span>
                                                    <span className="tag bg-is-blue">Splunk</span>
                                                    <span className="tag bg-is-blue">Customer Facing</span>
                                                    <span className="tag bg-is-blue">Help Desk</span>
                                                    <span className="tag bg-is-blue">Documentation</span>
                                                    <span className="tag bg-is-blue">Training</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="content">
                                                <div className="columns">
                                                    <div className="column">
                                                        <h3 className="title margin-bottom-override"><span className="shadow-is-blue">IT Developer</span></h3>
                                                        <p> Tribal Group, Norwich United Kingdom</p>
                                                    </div>
                                                    <div className="column is-hidden-mobile">
                                                        <p className="margin-bottom-override right-readable-text"><span className="shadow-is-blue">Sep 2010 - Aug 2013</span></p>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li>Re-styled several legacy sites. Introducing Bootstrap front-end framework for a more responsive, mobile-friendly UX.</li>
                                                    <li>Wrote clean, clear, efficient, well-tested and maintainable code.</li>
                                                    <li>Worked on over 30 software projects across multiple agile development teams utilising the latest technologies.</li>
                                                </ul>
                                                <br />
                                                <div className="tags are-medium">
                                                    <span className="tag bg-is-blue">C#</span>
                                                    <span className="tag bg-is-blue">WPF</span>
                                                    <span className="tag bg-is-blue">WCF</span>
                                                    <span className="tag bg-is-blue">MVVM</span>
                                                    <span className="tag bg-is-blue">Silverlight</span>
                                                    <span className="tag bg-is-blue">ASP.NET</span>  
                                                    <span className="tag bg-is-blue">LINQ</span>
                                                    <span className="tag bg-is-blue">Agile</span>
                                                    <span className="tag bg-is-blue">Scrum</span>
                                                    <span className="tag bg-is-blue">SQL Server</span>
                                                    <span className="tag bg-is-blue">jQuery</span>
                                                    <span className="tag bg-is-blue">Bootstrap</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="content">
                                                <div className="columns">
                                                    <div className="column">
                                                    <h3 className="title margin-bottom-override"><span className="shadow-is-turquoise">IT Developer</span></h3>
                                                        <p> Jaeger Ltd, King's Lynn United Kingdom</p>
                                                    </div>
                                                    <div className="column is-hidden-mobile">
                                                        <p className="margin-bottom-override right-readable-text"><span className="shadow-is-turquoise">Oct 2007 - Sep 2010</span></p>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li>Responsible for implementing the software behind our pick, pack and deploy of Jaeger's new e-commerce site.</li>
                                                    <li>Responsible for a suite of till-based e-commerce applications used by 200+ stores worldwide.</li>
                                                    <li>Developed a stock-taking system utilising mobile technology to overhaul the efficiency of the existing system.</li>
                                                </ul>
                                                <br />
                                                <div className="tags are-medium">
                                                    <span className="tag bg-is-blue">VB.NET</span>
                                                    <span className="tag bg-is-blue">WinForms</span> 
                                                    <span className="tag bg-is-blue">WebForms</span> 
                                                    <span className="tag bg-is-blue">ASP.NET</span>
                                                    <span className="tag bg-is-blue">Layered Architecture</span>
                                                    <span className="tag bg-is-blue">SQL Server</span> 
                                                    <span className="tag bg-is-blue">JavaScript</span>
                                                    <span className="tag bg-is-blue">HTML</span>
                                                    <span className="tag bg-is-blue">CSS</span>
                                                    <span className="tag bg-is-blue">TFS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                {/*
                                <div id="education" className="container container-padding">
                                    <div className="columns is-desktop">
                                        <div className="column is-one-fifths-desktop ">
                                            <h1 className="title"><span className="shadow-is-yellow">Education</span></h1>
                                        </div>
                                        <div className="column is-four-fifths-desktop ">
                                            <div className="content">
                                                <div className="columns">
                                                    <div className="column">
                                                        <h3 className="title margin-bottom-override"><span className="shadow-is-yellow">A Levels</span></h3>
                                                        <p>Dereham 6th Form College, Dereham United Kingdom</p>
                                                    </div>
                                                    <div className="column is-hidden-mobile">
                                                        <p className="margin-bottom-override right-readable-text"><span className="shadow-is-yellow">Sep 2006 - Sep 2007</span></p>
                                                    </div>
                                                </div>
                                                <p>Although I never finished my final year at Sixth Form, I thoroughly enjoyed the experience. If I had not been offered the placement at Jaeger I would have gone on to university to study Computer Science. Predicted grades below:</p>
                                                <br />
                                                <div className="columns">
                                                    <div className="column">
                                                        <span className="tag is-medium bg-is-blue">Graphic Design - A</span>
                                                    </div>
                                                    <div className="column">
                                                        <span className="tag is-medium bg-is-turquoise">Business Studies - B</span>
                                                    </div>
                                                    <div className="column">
                                                        <span className="tag is-medium bg-is-yellow">English Lanaguage - B</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                */}
                                <div id="skills" className="container container-padding">
                                    <div className="columns is-desktop">
                                        <div className="column is-one-fifths-desktop">
                                            <h1 className="title"><span className="shadow-is-purple">Skills</span></h1>
                                        </div>
                                        <div className="column is-four-fifths-desktop">
                                            <div className="content">
                                                <div className="columns is-centered">
                                                    <div className="column">
                                                        <h1 className="title is-size-4 is-spaced"><span className="shadow-is-purple">Web Design</span></h1>
                                                    {/* <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                                                        <p className="list-title has-text-weight-normal"><span className="shadow-is-purple">Things I enjoy designing</span></p> */}
                                                        <div className="tags are-small">
                                                            <span className="tag bg-is-blue">UX</span>
                                                            <span className="tag bg-is-blue">UI</span>
                                                            <span className="tag bg-is-blue">Web</span>
                                                            <span className="tag bg-is-blue">Mobile</span>
                                                            <span className="tag bg-is-blue">Apps</span>
                                                            <span className="tag bg-is-blue">Logos</span>
                                                        </div>
                                                        <p className="list-title has-text-weight-normal"><span className="shadow-is-purple">Design Skills</span></p>
                                                        <ul className="list-style-override">
                                                            <li>JavaScript</li>
                                                            <li>Blazor</li>
                                                            <li>React/Redux</li>
                                                            <li>HTML/CSS</li>
                                                            <li>Bootstrap/Bulma</li>
                                                            <li>Photoshop/Illustrator</li>
                                                        </ul>
                                                    </div>
                                                    <div className="column">
                                                        <h1 className="title is-size-4 is-spaced"><span className="shadow-is-turquoise">Development</span></h1>
                                                    {/* <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                                                        <p className="list-title has-text-weight-normal"><span className="shadow-is-turquoise">Development Principles</span></p> */}
                                                        <div className="tags are-small">
                                                            <span className="tag bg-is-blue">OOP</span>
                                                            <span className="tag bg-is-blue">SOLID</span>
                                                            <span className="tag bg-is-blue">TDD</span>
                                                            <span className="tag bg-is-blue">CI/CD</span>
                                                            <span className="tag bg-is-blue">Agile</span>
                                                            <span className="tag bg-is-blue">Scrum</span>
                                                        </div>
                                                        <p className="list-title has-text-weight-normal"><span className="shadow-is-turquoise">Coding Tools</span></p>
                                                        <ul className="list-style-override">
                                                            <li>C#</li>
                                                            <li>ASP.NET MVC</li>
                                                            <li>Web API</li>
                                                            <li>Entity Framework</li>
                                                            <li>Azure</li>
                                                            <li>Azure DevOps</li>
                                                        </ul>
                                                    </div>
                                                    <div className="column">
                                                        <h1 className="title is-size-4 is-spaced"><span className="shadow-is-red">Data Analysis</span></h1>
                                                    {/* <p>I genuinely care about the end user, and love helping them make sense of their data.</p>
                                                        <p className="list-title has-text-weight-normal"><span className="shadow-is-red">What I can do with your data</span></p> */}
                                                        <div className="tags are-small">
                                                            <span className="tag bg-is-blue">ETL</span>
                                                            <span className="tag bg-is-blue">Dashboarding</span>
                                                            <span className="tag bg-is-blue">Modelling</span>
                                                            <span className="tag bg-is-blue">Cleansing</span>
                                                        </div>
                                                        <p className="list-title has-text-weight-normal"><span className="shadow-is-red">Data Tools</span></p>
                                                        <ul className="list-style-override">
                                                            <li>SQL Server</li>
                                                            <li>Oracle</li>
                                                            <li>PowerShell</li>
                                                            <li>Power BI</li>
                                                            <li>DAX</li>
                                                            <li>SQL Server Data Tools</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div id="assessments" className="container container-padding">
                                    <div className="columns is-desktop">
                                        <div className="column is-one-fifths-desktop">
                                            <h1 className="title"><span className="shadow-is-blue">Assessments</span></h1>
                                        </div>
                                        <div className="column is-four-fifths-desktop">
                                            <div className="content">
                                                <div className="columns is-centered">
                                                    <div className="column">
                                                        <a class="brightness" href="https://app.pluralsight.com/profile/freddie2025">
                                                            <img src={pluralsightcsharp} alt="Pluralsight C Sharp" />
                                                        </a>
                                                    </div>
                                                    <div className="column">
                                                        <a class="brightness" href="https://app.pluralsight.com/profile/freddie2025">
                                                            <img src={pluralsightmvc5} alt="Pluralsight Mvc 5" />
                                                        </a>
                                                    </div>
                                                    <div className="column">
                                                        <a class="brightness" href="https://app.pluralsight.com/profile/freddie2025">
                                                            <img src={pluralsighttsql} alt="Pluralsight T Sql" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div id="references" className="container container-padding">
                                    <div className="columns is-desktop">
                                        <div className="column is-one-fifths-desktop">
                                            <h1 className="title"><span className="shadow-is-turquoise">References</span></h1>
                                        </div>
                                        <div className="column is-four-fifths-desktop">
                                        <div className="content">
                                            <div className="columns">
                                                <div className="column">
                                                    <h3 className="title margin-bottom-override"><span className="shadow-is-turquoise">Jan Kennedy</span></h3>
                                                    <p>Senior Business Analyst - TAFE Business Analytics - Sydney, Australia</p>
                                                </div>
                                            </div>
                                            <article className="message is-primary">
                                                <div className="message-body is-size-5">
                                                    <p>"...Fred is a tireless professional with prodigious output and I am sure he will value-add to any organisation."</p>
                                                </div>
                                            </article>
                                            <hr />
                                            <div className="columns">
                                                <div className="column">
                                                    <h3 className="title margin-bottom-override"><span className="shadow-is-turquoise">Brett Farrell</span></h3>
                                                    <p>Lead Consultant - Tribal Group - Sydney, Australia</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="columns">
                                                <div className="column">
                                                    <h3 className="title margin-bottom-override"><span className="shadow-is-turquoise">Lee Fedder</span></h3>
                                                    <p>Director - Spark! Data - Bristol, England</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <p className="buttons is-centered">
                                <a href={pdf} className="button is-primary border-radius-override">Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;