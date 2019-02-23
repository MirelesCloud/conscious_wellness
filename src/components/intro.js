import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Intro= () => (
  <StaticQuery
    query={graphql`
      query IntroQuery {
        feature: file(relativePath: { eq: "images/home/heather-main.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        background: file(relativePath: { eq: "images/joseph-barrientos-22900-unsplash.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
      <section>
        <div className="feature">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">

                  <Img className="intro-image" fluid={data.feature.childImageSharp.fluid}/>

              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron intro" style={{
            backgroundImage: `url(${data.background.childImageSharp.fluid.src})`
          }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="greeting">Welcome!</p>
                <p className="lead">Conscious Wellness’ mission is to help heal clients and empower them to attain the optimal health they want and deserve.</p>
                  <hr className="my-4"/>
                <p>Conscious Wellness provides education and tools for you to achieve your optimal health. Humans are more than just a body part or a dis-ease. There is an interconnectedness of the body, mind and soul, and each are affected by the other. So our therapies work with the whole person.</p>
                <p className="lead">
                  <button type="button" className="btn btn-outline-light btn-lg">Learn More</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )}
    />
)

export default Intro
