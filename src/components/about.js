import React from 'react'
import Img from 'gatsby-image'
import { Link, StaticQuery, graphql } from 'gatsby'

const About = () => (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          file(relativePath: { eq: "images/home/heather-watson.jpg" }) {
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
                  <Img fluid={data.file.childImageSharp.fluid} />
                </figure>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div >
                  <div className="about-title">
                      <p>About <span className="theme-color">Heather</span></p>
                  </div>
                   <p className="style-2">
                     I am passionate about helping people improve their health. It is a privilege to work with each client. Each session is unique and different, based on what my client needs at the moment. I open my home office to you, which is set in a peaceful organic apple orchard in the middle of a forest near a running brook. The relaxing environment will aid in your healing experience.  Distance sessions are also available. My clients, who reside all over the United States, have found them to be very effective. Results do depend on the person, since, in many ways, they are the ones who are allowing and doing their own healing.  Feel free to contact me with any questions or concerns you might have. If you are reading this, there is a reason, and if you are ready to heal, please give me a call. I look forward to working with you!
                   </p>
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
