import React, { Component } from 'react';
import visualstudio from '../images/pluralsight-visualstudio.png';
import aspnetmvc5 from '../images/pluralsight-aspnetmvc5.png';
import csharp from '../images/pluralsight-csharp.png';
import tsql from '../images/pluralsight-tsql.png';
import javascript from '../images/pluralsight-javascript.png';

class Assesments extends Component { 
    render() {
        return (
            <div>
                <span id="anchor-assessments" className="section-spacing-anchor" />
                <div id="assessments" className="container">
                    <div className="tile is-12 is-ancestor tile-margin-override">
                        <div className="tile is-child box border-radius-override">
                            {/* Title */}
                            <div className="content has-text-centered">
                                <h1 className="title"><span className="shadow-is-yellow">Assesments</span></h1>
                            </div>
                            {/* Assesments */}
                            <hr />
                            <div className="container container-padding">
                                <div className="content">
                                    <div className="columns has-text-centered">
                                        <div className="column">
                                            <a className="brightness" href="https://app.pluralsight.com/profile/freddie2025">
                                                <img src={csharp} alt="Pluralsight C Sharp" />
                                            </a>
                                        </div>
                                        <div className="column">
                                            <a className="brightness" href="https://app.pluralsight.com/profile/freddie2025">
                                                <img src={aspnetmvc5} alt="Pluralsight MVC 5" />
                                            </a>
                                        </div>
                                        <div className="column">
                                            <a className="brightness" href="https://app.pluralsight.com/profile/freddie2025">
                                                <img src={visualstudio} alt="Pluralsight Visual Studio" />
                                            </a>
                                        </div>
                                        <div className="column">
                                            <a className="brightness" href="https://app.pluralsight.com/profile/freddie2025">
                                                <img src={tsql} alt="Pluralsight T SQL" />
                                            </a>
                                        </div>
                                        <div className="column">
                                            <a className="brightness" href="https://app.pluralsight.com/profile/freddie2025">
                                                <img src={javascript} alt="Pluralsight JavaScript" />
                                            </a>
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
};

export default Assesments;