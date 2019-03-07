import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

export default function serviceTemplate({ data }) {
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
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
          </div>
          <button className="btn btn-primary btn-lg mt-3">
          <Link to="/" style={{color:"#fff"}}>&#171; Back</Link>
          </button>
        </div>
      </section>
    </Layout>
  )
}

export const serviceQuery = graphql`
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
