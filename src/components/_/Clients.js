import React, { Component } from 'react';
import '../styles/clients.css'; 
import accenture from '../images/accenture.svg';
import aquascutum from '../images/aquascutum.svg';
import jaeger from '../images/jaeger.svg';
import kpmg from '../images/kpmg.svg';
import tafensw from '../images/tafensw.svg';
import tribal from '../images/tribal.svg';

class Clients extends Component { 
    render() {
        return (
            <div>
                <span id="anchor-clients" className="section-spacing-anchor" />
                <div id="clients" className="container">
                    <div className="tile is-ancestor tile-margin-override">
                        <div className="tile is-child box border-radius-override">
                            {/* Title */}
                            <div className="content has-text-centered">
                                <h1 className="title"><span className="shadow-is-blue">Clients</span></h1>
                            </div>
                            {/* Clients */}
                            <hr />
                            <div className="container">
                                <div className="clients">
                                    <div className="client">
                                        <img src={jaeger} alt="Jaeger Logo" />
                                    </div>
                                    <div className="client">
                                        <img src={aquascutum} alt="Aquascutum Logo"/>
                                    </div>
                                    <div className="client">
                                        <img src={tribal} alt="Tribal Logo" />
                                    </div>
                                    <div className="client">
                                        <img src={accenture} alt="Accenture Logo" />
                                    </div>
                                    <div className="client">
                                        <img src={tafensw} alt="TAFE NSW Logo" />
                                    </div>
                                    <div className="client">
                                        <img src={kpmg} alt="KPMG Logo" />
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

export default Clients;