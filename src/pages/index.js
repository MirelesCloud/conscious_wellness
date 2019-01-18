import React from "react"
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '../css/contact.css'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Intro from '../components/intro'
import Center from '../components/center'
import Services from '../components/services'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

const TemplateWrapper = ({data}) => (
  <div>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Header/>
    <Center/>
    <Intro/>
    <Services/>
    <About/>
    <Contact/>
    <Footer/>
  </div>
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
