import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from './layout'

const CenterTemplate =(props) => (
  <section id='services'>
    <StaticQuery
      query={graphql`
        query CenterQuery {
          file(relativePath: {eq: "images/zen-background.jpg"}) {
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
          <div className="center-background my-4">
            <div className="row" style={{
                background: "rgba(57,84,166,1.0)",
                zIndex: "2",
                height: "100%",
                overflow: "hidden",
              }}>
              <div className="container text-center">
                <p className="header-style text-center pt-5">Your resource for optimal health</p>
              </div>
            </div>
          </div>
        </>
      )}
    />
  </section>
)

const Center = () => (
  <Layout>
    <CenterTemplate/>
  </Layout>
)

export default Center
