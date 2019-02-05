import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
            <Img fluid={data.logo.childImageSharp.fluid} className="logo text-center"/>
            <figcaption className="logo-caption text-center">
              <p className="display-2">Heather Watson</p>
              <p>Conscious Wellness</p>
            </figcaption>
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
