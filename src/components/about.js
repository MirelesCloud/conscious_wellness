import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Layout from './layout'

const AboutTemplate = () => (
  <div>
    <StaticQuery
      query={graphql`
        query AboutQuery {
          file(relativePath: { eq: "images/home/about.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <>
        <section className="about-section padd-1">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <figure style={{
                    maxWidth:"100%", height:"auto"
                  }}>
                  <Img fluid={data.file.childImageSharp.fluid}/>
                </figure>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div >
                  <div className="sec-title">
                      <h1>About <span className="theme-color">Heather</span></h1>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,</p>
                   <p className="style-2">Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo do consequat. Duis aute irure dolor in reprehenderit.</p>
                   <div className="link_btn">
                       <a href="about.html" className="btn-style">read more</a>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
      )}
    />
  </div>

)

const About = () => (
  <Layout>
    <AboutTemplate/>
  </Layout>
)

export default About
