import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Layout from './layout'

const ServicesTemplate = (props) => (
  <section id='services'>
    <StaticQuery
      query={graphql`
        query ServiceQuery {
          file(relativePath: {eq: "images/amilcar-vanden-bouch-1189362-unsplash.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <>
        <div className="jumbotron services services-background" style={{
             backgroundImage: `url(${data.file.childImageSharp.fluid.src})`,
           }}>
             <h1 className="display-4" style={{color:"#fff"}}>My Work</h1>
             <p className="lead" style={{color:"#fff"}}>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
             <hr className="my-4" style={{backgroundColor:"#fff"}}/>
             <div className="row">
               <div className="col-sm-6 col-md-3">
                 <div className="card border-secondary mb-3" style={{maxWidth: "20rem"}}>
                   <div className="card-header">Allergy Treatment</div>
                     <div className="card-body">
                       <h4 className="card-title">Allergy Treatment</h4>
                       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <p className="card-text">More  <FontAwesomeIcon icon={faAngleRight} style={{verticalAlign:"middle"}}/></p>
                     </div>
                 </div>
               </div>
               <div className="col-sm-6 col-md-3">
                 <div className="card border-secondary mb-3" style={{maxWidth: "20rem"}}>
                   <div className="card-header">Reiki</div>
                     <div className="card-body">
                       <h4 className="card-title">Reiki</h4>
                       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <p className="card-text">More  <FontAwesomeIcon icon={faAngleRight} style={{verticalAlign:"middle"}}/></p>
                     </div>
                 </div>
               </div>
               <div className="col-sm-6 col-md-3">
                 <div className="card border-secondary mb-3" style={{maxWidth: "20rem"}}>
                   <div className="card-header">Intuitive Sessions</div>
                     <div className="card-body">
                       <h4 className="card-title">Intuitive Sessions</h4>
                       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <p className="card-text">More  <FontAwesomeIcon icon={faAngleRight} style={{verticalAlign:"middle"}}/></p>

                     </div>
                 </div>
               </div>
               <div className="col-sm-6 col-md-3">
                 <div className="card border-secondary mb-3" style={{maxWidth: "20rem"}}>
                   <div className="card-header">Quantum Touch</div>
                     <div className="card-body">
                       <h4 className="card-title">Quantum Touch</h4>
                       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <p className="card-text">More  <FontAwesomeIcon icon={faAngleRight} style={{verticalAlign:"middle"}}/></p>
                     </div>
                 </div>
               </div>
             </div>
           </div>
        </>
      )}
    />
  </section>
)

const Services = () => (
  <Layout>
    <ServicesTemplate/>
  </Layout>
)

export default Services
