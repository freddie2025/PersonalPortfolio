import React, { Component } from 'react';
import mail from '../images/mail.gif';

class ThankYou extends Component { 
    render() {
        return (
            <section className="section is-medium">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <h1 className="title">Thanks!</h1>
                            <p className="subtitle">Looks like you've just sent me an email. That's awesome. Hold tight and I'll get back to you soon!</p>
                            <a className="button" href="https://www.fredjames.co.uk/">Home</a>
                        </div>
                        <div className="column has-text-centered is-hidden-mobile">
                            <img src={mail} />
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
}

export default ThankYou;