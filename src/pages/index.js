import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/About'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Assesments from '../components/Assessments'

library.add(fab, faHeart, faUser, faEnvelope)

const IndexPage = () => (
  <Layout>
    <SEO title="Fred James" />
      <div>
        <Nav />
        <About />
        <Clients />
        <Resume />
        <Assesments />
        <Projects />
        <Contact />
        <Footer />
      </div>
  </Layout>
)

export default IndexPage
