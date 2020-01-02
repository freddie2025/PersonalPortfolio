import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Footer"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
      <section className="section is-medium">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h1 className="title">Oh nej! Something Broke...</h1>
              <p className="subtitle">Have no fear Freddie Beers is here. I'll try and fix this, in the mean time get on out of here.</p>
            </div>
            <div className="column has-text-centered is-hidden-mobile">
              <img src="https://www.eastfieldcollege.edu/PublishingImages/Pages/PageNotFoundError/404-robot.gif" />
            </div>
          </div>
        </div>
      </section>
    <Footer/>
  </Layout>
)

export default NotFoundPage
