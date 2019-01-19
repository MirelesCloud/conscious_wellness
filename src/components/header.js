import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import Layout from './layout'
import Navbar from './navbar'

const Banner = () => (
  <div>
    <StaticQuery
      query={graphql`
        query BannerImage {
          banner: file(relativePath: { eq: "images/home/heather-banner.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          logo: file(relativePath: { eq: "images/icon/conscious-wellness-logo-white-18px-05.png"}) {
            childImageSharp {
              fluid(maxWidth: 350, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
        <section className="hero-image" style={{
            backgroundImage: `url(${data.banner.childImageSharp.fluid.src})`,
          }}>
          <Navbar/>
          <figure>
            <Fade left>
              <Img fluid={data.logo.childImageSharp.fluid} className="logo text-center"/>
            </Fade>
            <Fade right>
              <figcaption className="logo-caption text-center">Conscious Wellness</figcaption>
            </Fade>


          </figure>
        </section>
        </>
      )}
      />
  </div>
)

const Header = () => (
  <Layout>
    <Banner/>
  </Layout>
)

export default Header
