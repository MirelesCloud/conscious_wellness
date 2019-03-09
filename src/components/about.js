import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'

const About = () => (
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
                    maxWidth:"80%", height:"auto", marginLeft:"auto", marginRight:"auto"
                  }}>
                  <Img fluid={data.file.childImageSharp.fluid}/>
                </figure>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div >
                  <div className="about-title">
                      <p>About <span className="theme-color">Heather</span></p>
                  </div>
                   <p className="style-2">My passion is helping people improve their health. I feel that it is a privilege to work with each client. Each session is unique and different each time based on what my client needs. I open my home office to you which is set in a peaceful organic apple orchard in the middle of a forest and running brook. Please come visit and relax. Distance sessions are also availble and very effective. I have distance clients all over the country. Results do depend on the person since they are the ones who are actually doing the healing. Feel free to contact me with any questions or concerns you might have. If you are reading this there is a reason, and if you are ready to heal please give me a call. Looking forward to working with you!</p>
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
)

export default About
