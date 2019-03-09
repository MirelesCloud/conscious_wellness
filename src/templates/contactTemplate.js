import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import ContactForm from '../components/contact-form'

export default function contactTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
      <section className="jumbotron">
        <div className="container">
          <h1 className="my-5">{ frontmatter.title }</h1>
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12 my-3">
              <Img fluid={frontmatter.image.childImageSharp.fluid}/>
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12 my-3 text-center">
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
              <h3 className="my-5">Or send me a message</h3>
              <ContactForm/>
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
