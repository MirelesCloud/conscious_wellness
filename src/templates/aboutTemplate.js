import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from './../components/layout'

export default function About({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.date}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: html }}
                />
              <Link to="/" type="button" className="btn btn-outline-dark btn-lg">Back
              </Link>
            </div>
            <div className="col">
              <Img fluid={ frontmatter.image.childImageSharp.fluid } style={{maxWidth:"75%", height:"auto"}}/>
            </div>
          </div>

        </div>
      </div>

    </Layout>
  )
}

export const aboutQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
