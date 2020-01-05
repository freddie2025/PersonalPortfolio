import React, { Component } from 'react';
import { navigate } from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/contact.css';
import ReCAPTCHA from "react-google-recaptcha";

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

export default function Contact() {
    const [state, setState] = React.useState({})
  
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }

    return (
        <div>
            <span id="anchor-contact" className="section-spacing-anchor" />
            <div id="contact" className="container">
                <div className="tile is-ancestor tile-margin-override">
                    <div className="tile is-child box border-radius-override">
                        <div className="content has-text-centered">
                            <h1 className="title"><span className="shadow-is-yellow">Contact</span></h1>
                        </div>
                        <hr />
                        <div className="container container-padding">
                            <div className="columns">
                                <div className="column is-two-thirds">
                                    <form name="contact" method="post" action="/thanks" data-netlify="true" data-netlify-recaptcha="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} >
                                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                        <input type="hidden" name="form-name" value="contact" />
                                        <div className="field is-horizontal">
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input aria-label="Name" className="input border-radius-override" id="Name" name="Name" placeholder="Name" type="text" onChange={handleChange} required />
                                                        <span className="icon is-small is-left">
                                                            <FontAwesomeIcon icon="user" />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="field">
                                                    <p className="control has-icons-left has-icons-right">
                                                        <input asp-for="Email" aria-label="Email" className="input border-radius-override" id="Email" name="Email" placeholder="Email" type="text" onChange={handleChange} required />
                                                        <span className="icon is-small is-left">
                                                            <FontAwesomeIcon icon="envelope" />
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field is-horizontal">
                                            <div className="field-body">
                                                <div className="field">
                                                    <div className="control">
                                                        <textarea aria-label="Message" className="textarea border-radius-override" rows={6} cols={20} id="Message" name="Message" placeholder="Message" defaultValue={""} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field is-horizontal">
                                            <div className="field-body">
                                                <div className="field">
                                                    <ReCAPTCHA sitekey={process.env.SITE_RECAPTCHA_KEY} />
                                                    <div className="control">
                                                        <input type="submit" defaultValue="Send" name="submit" className="button is-primary border-radius-override" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* Social -*/}
                                <div className="column is-one-third">
                                    <div className="content has-text-centered">
                                        <h1 className="title"><span className="shadow-is-red">Let's Get Social</span></h1>
                                        <div className="buttons social is-centered">
                                            <a href="https://twitter.com/freddie2025" className="button is-outlined social-button-twitter border-radius-override">
                                                <span><FontAwesomeIcon icon={['fab', 'twitter']} />&nbsp; Twitter</span>
                                            </a>
                                            <a href="https://github.com/freddie2025" className="button social-button-github border-radius-override">
                                                <span><FontAwesomeIcon icon={['fab', 'github']} />&nbsp; GitHub</span>
                                            </a>
                                            <a href="https://www.linkedin.com/in/freddie2025" className="button social-button-linkedin border-radius-override">
                                                <span><FontAwesomeIcon icon={['fab', 'linkedin-in']} />&nbsp; Linkedin</span>
                                            </a>
                                        </div>
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