import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link, StaticQuery, graphql } from 'gatsby'

const Success = (props) => (
  <StaticQuery
    query={graphql`
      query SuccessQuery {
        file(relativePath: { eq: "images/joseph-barrientos-22900-unsplash.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Helmet>
          <title>Success Page</title>
          <meta name="description" content="Success Page" />
        </Helmet>

        <section className="jumbotron mt-5"
          style={{ backgroundImage: `url(${data.file.childImageSharp.fluid.src})`
        }}
          >
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12 col-sm-12 col-xs-12 mt-5">
                <h3>Thank you for your message.</h3>
                  <Link to="/" style={{marginRight:"auto", marginLeft:"auto"}}>
                    <button type="button" className="btn btn-dark btn-lg mt-5 mr-2">
                      &#171; Back
                    </button>
                  </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
)

export default Success
