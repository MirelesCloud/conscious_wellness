import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from './layout'


const ContactTemplate = () => (
  <section>
    <StaticQuery
      query={graphql`
        query ContactQuery {
          file(relativePath: { eq: "images/zen-background.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <>
        <div className="contact contact-background" style={{
            backgroundImage: `url(${data.file.childImageSharp.fluid.src})`,

          }}>
            <div style={{
              background: "rgba(57,84,166,0.75)",
              zIndex: "2",
              height: "100%",
              overflow: "hidden",
              }}>
              <div className="container">
                <div className="text-center pt-5">
                    <h1 style={{color:"#fff"}}>Work with Me</h1>
                    <div>
                      <button type="button" className="btn btn-outline-light">Contact Me</button>
                    </div>
                </div>
              </div>
            </div>
        </div>
        </>
      )}
    />
  </section>
)

const Contact = () => (
  <Layout>
    <ContactTemplate/>
  </Layout>
)

export default Contact
