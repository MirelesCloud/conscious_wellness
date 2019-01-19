import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Layout from './layout'

const ServicesTemplate = (props) => (
  <section id='services'>
    <StaticQuery
      query={graphql`
        query ServiceQuery {
          file(relativePath: {eq: "images/ripple-background.jpg"}) {
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
        <div>
         <div className="services services-background" style={{
              backgroundImage: `url(${data.file.childImageSharp.fluid.src})`
            }}>
            <div className="row" style={{
                background: "rgba(57,84,166,0.75)",
                zIndex: "2",
                height: "100%",
                overflow: "hidden",
              }}>
                    <div className="container text-center pt-5">
                      <div className="header-style">
                        <p style={{color:"#fff"}}>Our Work</p>
                      </div>
                      <hr/>
                      <div className="row service-list">
                        <div className="col-md-6 col-sm-12">
                          <ul >
                            <li><FontAwesomeIcon icon={faAngleRight} />  Allergy Treatment</li>
                            <li><FontAwesomeIcon icon={faAngleRight}/> Intuitive Sessions</li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <ul >
                            <li><FontAwesomeIcon icon={faAngleRight} /> Quantum Touch</li>
                            <li><FontAwesomeIcon icon={faAngleRight} /> Reiki</li>
                          </ul>
                        </div>
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

const Services = () => (
  <Layout>
    <ServicesTemplate/>
  </Layout>
)

export default Services
