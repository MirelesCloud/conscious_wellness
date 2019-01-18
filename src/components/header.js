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
          logo: file(relativePath: { eq: "images/icon/conscious-wellness-logo-white-12px-03.png"}) {
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
        <section className="text-center hero-image" style={{
            backgroundImage: `url(${data.banner.childImageSharp.fluid.src})`,


          }}>
          <Navbar/>
          <div className="logo-container">
            <Img fluid={data.logo.childImageSharp.fluid} style={{width: "200px", }}/>
            <br/>
            <h2 style={{color:"#fff", fontSize:"4vw"}}>Conscious Wellness</h2>
          </div>

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
