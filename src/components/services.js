import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

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
          quantum: file(relativePath: {eq: "images/quantum-touch-square.jpg"}) {
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
          biofeedback: file(relativePath: {eq: "images/cristian-newman-141875-unsplash.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          classes: file(relativePath: {eq: "images/ben-white-132978-unsplash.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          events: file(relativePath: {eq: "images/ameen-fahmy-558595-unsplash.jpg"}) {
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
               <h3 className="title">My Services</h3>
               <hr className="mb-5"/>
               <div className="row ">
                 <div className="col-md-4 col-sm-12 col-xs-12 text-center mb-5">
                   <Link to="/reiki" className="service-container">
                     <figure className="service-item">
                       <Img fluid={data.reiki.childImageSharp.fluid}/>
                     </figure>
                     <div className="service-description">
                       <h3>Reiki</h3>
                     </div>
                   </Link>
                 </div>
                 <div className="col-md-4 col-sm-12 col-xs-12 text-center mb-5">
                   <Link to="/quantumtouch" className="service-container">
                     <figure className="service-item">
                       <Img fluid={data.quantum.childImageSharp.fluid}/>
                     </figure>
                     <div className="service-description">
                       <h3>Quantum Touch</h3>
                     </div>
                   </Link>
                 </div>
                 <div className="col-md-4 col-sm-12 col-xs-12 text-center mb-5" >
                   <Link to="/allergy" className="service-container">
                     <figure className="service-item">
                       <Img fluid={data.allergy.childImageSharp.fluid} />
                     </figure>
                     <div className="service-description">
                       <h3>Allergy Treatment</h3>
                     </div>
                   </Link>
                 </div>
                 <div className="col-md-4 col-sm-12 col-xs-12 text-center mb-5">
                   <Link to="/intuitive" className="service-container">
                     <figure className="service-item">
                       <Img fluid={data.intuitive.childImageSharp.fluid}/>
                     </figure>
                     <div className="service-description">
                       <h3>Intuitive Sessions</h3>
                     </div>
                   </Link>
                 </div>
                 <div className="col-md-4 col-sm-12 col-xs-12 text-center mb-5">
                   <Link to="/biofeedback" className="service-container">
                     <figure className="service-item">
                       <Img fluid={data.biofeedback.childImageSharp.fluid}/>
                     </figure>
                     <div className="service-description">
                       <h3>Biofeedback</h3>
                     </div>
                   </Link>
                 </div>
                 <div className="col-md-4 col-sm-12 col-xs-12 text-center mb-5">
                   <Link to="/events" className="service-container">
                     <figure className="service-item">
                       <Img fluid={data.events.childImageSharp.fluid}/>
                     </figure>
                     <div className="service-description">
                       <h3>Events</h3>
                     </div>
                   </Link>
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
