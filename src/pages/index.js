import React from "react"
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'
import { graphql } from 'gatsby'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootswatch/dist/yeti/bootstrap.min.css'
import '../css/main.css'
import '../css/contact.css'
import '../css/responsive.css'

import Home from './home/home.js'

const TemplateWrapper = ({data}) => (
  <div>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Home/>

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
