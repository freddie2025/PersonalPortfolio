import React, { Component } from 'react';
import pluralsightmvc5 from '../images/pluralsightmvc5.png';
import pluralsightcsharp from '../images/pluralsightcsharp.png';
import pluralsighttsql from '../images/pluralsighttsql.png';

class Assesments extends Component { 
    render() {
        return (
            <div>
                <span id="anchor-clients" className="section-spacing-anchor" />
                <div id="clients" className="container">
                    <div className="tile is-ancestor tile-margin-override">
                        <div className="tile is-child box border-radius-override">
                            {/* Title */}
                            <div id="assessments" className="content has-text-centered">
                                <h1 className="title"><span className="shadow-is-red">Assesments</span></h1>
                            </div>
                            {/* Assesments */}
                            <hr />
                            <div className="container container-padding">
                                <div className="content">
                                    <div className="columns is-centered">
                                        <div className="column">
                                            <a className="brightness" href="https://app.pluralsight.com/profile/freddie2025">
                                                <img src={pluralsightcsharp} alt="Pluralsight C Sharp" />
                                            </a>
                                        </div>
                                        <div className="column">
                                            <a className="brightness" href="https://app.pluralsight.com/profile/freddie2025">
                                                <img src={pluralsightmvc5} alt="Pluralsight Mvc 5" />
                                            </a>
                                        </div>
                                        <div className="column">
                                            <a className="brightness" href="https://app.pluralsight.com/profile/freddie2025">
                                                <img src={pluralsighttsql} alt="Pluralsight T Sql" />
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