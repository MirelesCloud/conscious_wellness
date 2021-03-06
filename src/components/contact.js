import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
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
        <section className="contact">
          <div className="jumbotron" style={{
              backgroundImage: `url(${data.file.childImageSharp.fluid.src})`,

            }}>
          <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                  <div className="contact-container ">
                    <p className="contact-header text-uppercase" style={{color:"#fff"}}>Work with Me</p>
                    <Link to="/contact">
                      <button type="button" className="btn btn-dark btn-lg mt-5 mr-2">
                        <ScrollAnimation delay={1000}
                          animateIn='tada'
                          initiallyVisible={true}>
                          Contact Me
                        </ScrollAnimation>
                      </button>
                    </Link>

                    <button type="button" className="btn btn-dark btn-lg mt-5">
                      <a target="_top" style={{color:"#fff"}}
                        href="https://squareup.com/appointments/book/FTJHJJCD1JZEZ/heather-watson-conscious-wellness-sonora-ca" rel="nofollow">
                        <ScrollAnimation delay={1000}
                          animateIn='tada'
                          initiallyVisible={true}>
                          Book an Appointment
                        </ScrollAnimation>
                      </a>
                    </button>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        </>
      )}
    />
  </section>
)

export default Contact
