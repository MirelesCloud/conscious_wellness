import React from "react"
import { StaticQuery, graphql } from 'gatsby'




const Banner = (props) => (
  <div>
    <StaticQuery
      query={graphql`
        query BannerImage {
          banner: file(relativePath: { eq: "images/joseph-barrientos-22900-unsplash.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
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
          heather: file(relativePath: { eq: "images/home/heather-square.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <>
        <section className="jumbotron hero-image" style={{
            backgroundImage: `url(${data.banner.childImageSharp.fluid.src})`,
          }}>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 col-sm-12 col-xs-12" >
                <div className="header-container" >
                  <p className="title">
                    Heather Watson
                  </p>
                  <p style={{
                      fontSize:"1.3rem",
                      fontWeight:"100",
                    }}>Holistic Health Practioner - Wellness Educator</p>
                  <hr />
                  <p style={{fontSize:"1.8rem"}}>Conscious Wellness</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        </>
      )}
      />
  </div>
)

export default Banner
