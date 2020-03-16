import React, { Component } from 'react';
import '../styles/clients.css'; 
import accenture from '../images/accenture.svg';
import aquascutum from '../images/aquascutum.svg';
import jaeger from '../images/jaeger.svg';
import kpmg from '../images/kpmg.svg';
import tafensw from '../images/tafensw.svg';
import tribal from '../images/tribal.svg';
import lloyds from '../images/lloyds.png';
import halifax from '../images/halifax.png';
import royalbankofscotland from '../images/royalbankofscotland.png';
import shipowners from '../images/shipowners.png';
import tindallriley from '../images/tindallriley.png';
import scotishwidows from '../images/scotishwidows.svg';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
                                <Carousel
                                    slidesPerPage={6}
                                    autoPlay={3000}
                                    animationSpeed={1500}
                                    infinite
                                    breakpoints={{
                                        1200: { 
                                            slidesPerPage: 5,
                                        },
                                        1000: {
                                            slidesPerPage: 4,
                                        },
                                        800: {
                                            slidesPerPage: 3,
                                        },
                                        600: {
                                            slidesPerPage: 2,
                                        },
                                        400: {
                                            slidesPerPage: 1,
                                        },
                                    }}
                                >
                                    <div className="client">
                                        <a href="https://www.jaeger.co.uk/">
                                            <img src={jaeger} alt="Jaeger Logo" />
                                        </a>
                                    </div>
                                    <div className="client">
                                        <a href="https://www.aquascutum.com/">
                                            <img src={aquascutum} alt="Aquascutum Logo"/>
                                        </a>
                                    </div>
                                    <div className="client">
                                        <a href="https://www.tribalgroup.com/">
                                            <img src={tribal} alt="Tribal Logo" />
                                        </a>
                                    </div>
                                    <div className="client">
                                        <a href="https://www.accenture.com/">
                                            <img src={accenture} alt="Accenture Logo" />
                                        </a>
                                    </div>
                                    <div className="client">
                                        <a href="https://www.tafensw.edu.au/">
                                            <img src={tafensw} alt="TAFE NSW Logo" />
                                        </a>
                                    </div>
                                    <div className="client">
                                        <a href="https://home.kpmg/xx/en/home.html">
                                            <img src={kpmg} alt="KPMG Logo" />
                                        </a>
                                    </div>
                                    <div className="client">
                                        <a href="https://www.shipownersclub.com/">
                                            <img src={shipowners} height="200" width="200" alt="Shipowners Logo" />
                                        </a>
                                    </div>
                                    <div className="client">
                                        <a href="https://tindallriley.co.uk/">
                                            <img src={tindallriley} height="175" width="175" alt="Tindall Riley Logo" />
                                        </a>
                                    </div>
                                    <div className="client">
                                        <a href="https://www.lloydsbank.com/">
                                            <img src={lloyds} height="175" width="175" alt="Lloyds Banking Group Logo" />
                                        </a>
                                    </div>
                                    <div className="client">
                                        <a href="https://www.halifax.co.uk/">
                                            <img src={halifax} height="112" width="150" alt="Halifax Logo" />
                                        </a>
                                    </div>
                                    <div className="client">
                                        <a href="https://personal.rbs.co.uk/">
                                            <img src={royalbankofscotland} height="200" width="200" alt="Royal Bank of Scotland Logo" />
                                        </a>
                                    </div>
                                    <div className="client">
                                        <a href="https://www.scottishwidows.co.uk/index.html">
                                            <img src={scotishwidows} alt="Scotish Widows Logo" />
                                        </a>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
}

export default Clients;