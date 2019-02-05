import React from 'react'
import Layout from './layout'

const IntroTemplate = () => (
  <section>
  <div className="alert alert-dismissible theme-color text-center mt-5">
    <p className="alert-heading display-4 mt-3">Your resource for optimal health.</p>
    <hr className="theme-background mb-1"/>
  </div>
  <div className="jumbotron ">
    <h1 className="display-4">Welcome!</h1>
    <p className="lead">Thank you for visiting Conscious Wellness, located in rural Sonora California in the Sierra Foothills the gold country.</p>
      <hr className="my-4"/>
      <p>Conscious Wellness provides education and tools for you to achieve your optimal health. We believe that humans are more than just a body part or a dis-ease. There  is an interconnectedness of the body, mind and soul, and each are affected by the other.</p>
    <p className="lead">
      <button type="button" className="btn btn-primary theme-background btn-lg">Learn More</button>
    </p>
  </div>

  </section>

)

const Intro = () => (
  <Layout>
    <IntroTemplate/>
  </Layout>
)

export default Intro
