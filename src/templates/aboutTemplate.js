import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

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
              <div className="text-center">
                <Link to="/contact">
                    <button type="button" className="btn btn-outline-dark btn-lg mt-5">
                        Contact Me
                    </button>
                  </Link>
              </div>
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
