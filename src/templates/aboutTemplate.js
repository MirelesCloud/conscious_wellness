import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

import ScrollAnimation from 'react-animate-on-scroll'

export default function aboutTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <section className="jumbotron">
        <div className="container">
          <h1 className="my-5">{ frontmatter.title }</h1>
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <Img fluid={frontmatter.image.childImageSharp.fluid}/>
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div
                  dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center" >
              <Link to="/" style={{marginRight:"auto", marginLeft:"auto"}}>
                <button type="button" className="btn btn-dark btn-lg mt-5 mr-2">
                <ScrollAnimation
                  delay={300}
                  animateIn='bounceInRight'
                  animateOut="bounceOutLeft"
                  >
                  &#171; Back
                </ScrollAnimation>
                </button>
              </Link>
              <Link to="/contact">
                <button type="button" className="btn btn-dark btn-lg mt-5" >
                  <ScrollAnimation
                    delay={600}
                    animateIn='bounceInRight'
                    animateOut="bounceOutLeft"
                    >
                    Contact Me
                  </ScrollAnimation>
                </button>
              </Link>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <a target="_top" style={{
                backgroundColor: "#371797",
                color: "white",
                height: "40px",
                textTransform: "uppercase",
                fontFamily: "'Square Market', 'helvetica neue', helvetica, arial, sans-serif",
                letterSpacing: "1px",
                lineHeight: "38px",
                padding: "0 28px",
                borderRadius: "3px",
                fontWeight: "500",
                fontSize: "14px",
                cursor: "pointer",
                display: "inline-block"
                }}
                href="https://squareup.com/appointments/book/FTJHJJCD1JZEZ/heather-watson-conscious-wellness-sonora-ca" rel="nofollow">Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const contactQuery = graphql`
query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      path
      title
      image {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
}
`
