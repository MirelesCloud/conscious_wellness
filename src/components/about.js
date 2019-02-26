import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'

const About = () => (
  <div>
    <StaticQuery
      query={graphql`
        query AboutQuery {
          file(relativePath: { eq: "images/home/heather-square.jpg" }) {
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
                    maxWidth:"80%", height:"auto"
                  }}>
                  <Img fluid={data.file.childImageSharp.fluid}/>
                </figure>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div >
                  <div className="about-title">
                      <p>About <span className="theme-color">Heather</span></p>
                  </div>
                   <p className="style-2">As a wellness educator since 2000, Heather Watson is passionate about helping people to improve their health. Over the years, she has worked with several hospitals to create wellness programs, plan and coordinate health conferences and produce a medical talk radio show.  In 2005, Heather created Conscious Wellness with the mission to help heal her clients and empower them to attain the optimal health they want and deserve.</p>
                   <div className="link_btn">
                       <Link to="/about" className="btn btn-outline-dark btn-lg">Read More</Link>
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

export default About
