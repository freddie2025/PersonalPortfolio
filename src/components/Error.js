import React, { Component } from 'react';
import robot from '../images/404.gif';

class Error extends Component { 
    render() {
        return (
            <section className="section is-medium">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <h1 className="title">Oh no! Something Broke...</h1>
                            <p className="subtitle">Have no fear Freddie is here. I'll try and fix this, in the mean time get on out of here.</p>
                            <a className="button" href="https://www.fredjames.co.uk/">Home</a>
                        </div>
                        <div className="column has-text-centered is-hidden-mobile">
                            <img src={robot} alt="Robot" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    componentDidMount() {
        document.body.style.backgroundColor = "white";
    }
    componentWillUnmount() {
        document.body.style.backgroundColor = "rgb(204, 246, 240)";
    }
};



export default Error;