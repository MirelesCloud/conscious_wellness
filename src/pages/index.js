import React from "react"
import { graphql } from 'gatsby'
import ScrollToTop from 'react-scroll-up'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

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
      <ScrollToTop showUnder={160} className="scroll-top" style={{
          background:"rgba(39,62,84)",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
        }}
        >
        <FontAwesomeIcon icon={faAngleUp} className="fa-2x ml-3 mt-2 " style={{color:"#fff"}}/>
      </ScrollToTop>
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
