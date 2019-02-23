import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'

const Contact = () => (
  <section>
    <StaticQuery
      query={graphql`
        query ContactQuery {
          file(relativePath: { eq: "images/joseph-barrientos-22900-unsplash.jpg" }) {
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
        <div className="jumbotron contact-background" style={{
            backgroundImage: `url(${data.file.childImageSharp.fluid.src})`,

          }}>

              <div className="container">
                <div className="text-center pt-5">
                    <h1 className="display-1 contact-header text-capitalize" style={{color:"#fff"}}>Work with Me</h1>
                    <br/>
                      <button type="button" className="btn btn-outline-dark btn-lg">
                        <ScrollAnimation delay={1000}
                          animateIn='tada'
                          initiallyVisible={true}>
                          Contact Me
                        </ScrollAnimation>
                      </button>
                </div>
              </div>

        </div>
        </>
      )}
    />
  </section>
)

export default Contact
