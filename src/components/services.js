import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

const Services = (props) => (
  <section id='services'>
    <StaticQuery
      query={graphql`
        query ServiceQuery {
          service: file(relativePath: {eq: "images/scott-webb-186137-unsplash.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          logo: file(relativePath: {eq: "images/icon/conscious-wellness-logo-white-18px-05.png"}) {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          allergy: file(relativePath: {eq: "images/lukasz-szmigiel-413-unsplash.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          reiki: file(relativePath: {eq: "images/reiki.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          intuitive: file(relativePath: {eq: "images/dingzeyu-li-773-unsplash.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          quantum: file(relativePath: {eq: "images/cristian-newman-141875-unsplash.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <>
        <section className="services">
           <div className="jumbotron">
             <div className="container">
               <h1 className="title">My Services</h1>
               <hr className="mb-5"/>
               <div className="row ">
                 <div className="col-md-6 col-sm-12 col-xs-12 text-center mb-5" >
                   <div className="service-container">
                     <figure className="service-item">
                       <Img fluid={data.allergy.childImageSharp.fluid} />

                     </figure>
                     <div className="service-description">
                       <h1>Allergy Treatment</h1>
                     </div>
                   </div>

                 </div>
                 <div className="col-md-6 col-sm-12 col-xs-12 text-center mb-5">
                   <div className="service-container">
                     <figure className="service-item">
                       <Img fluid={data.reiki.childImageSharp.fluid}/>
                     </figure>
                     <div className="service-description">
                       <h1>Reiki</h1>
                     </div>
                   </div>

                 </div>
                 <div className="col-md-6 col-sm-12 col-xs-12 text-center mb-5">
                   <div className="service-container">
                     <figure className="service-item">
                       <Img fluid={data.quantum.childImageSharp.fluid}/>
                     </figure>
                     <div className="service-description">
                       <h1>Quantum Biofeedback</h1>
                     </div>
                   </div>

                 </div>
                 <div className="col-md-6 col-sm-12 col-xs-12 text-center mb-5">
                   <div className="service-container">
                     <figure className="service-item">
                       <Img fluid={data.intuitive.childImageSharp.fluid}/>
                     </figure>
                     <div className="service-description">
                       <h1>Intuitive Sessions</h1>
                     </div>
                   </div>

                 </div>
               </div>
             </div>
           </div>

        </section>

        </>
      )}
    />
  </section>
)

export default Services
