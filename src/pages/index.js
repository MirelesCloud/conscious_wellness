import React from "react"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Banner from '../components/header'
import Intro from '../components/intro'
import Services from '../components/services'
import About from '../components/about'
import Contact from '../components/contact'

const TemplateWrapper = ({data}) => (
  <Layout>
    <Banner/>
    <Intro/>
    <Services/>
    <About/>
    <Contact/>
  </Layout>
)

export default TemplateWrapper

export const pageQuery = graphql`
  query testQuery {
    imageHair: file(relativePath: {eq: "images/hair9.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageGallery: allFile(filter: {absolutePath: {regex: "\/images/gallery/"}}) {
      edges {
        node {
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
