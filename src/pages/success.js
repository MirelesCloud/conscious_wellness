import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Success = (props) => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>
    <section className="jumbotron">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 col-sm-12 col-xs-12 mt-5">
            <h3>Thank you for your message.</h3>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Success
