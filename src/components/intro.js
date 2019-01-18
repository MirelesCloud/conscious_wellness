import React from 'react'
import Layout from './layout'

const IntroTemplate = () => (
  <section>
      <div className="bg-light pt-3 mb-5">
        <div className="container text-justify">
          <div className="row">
            <div className="col-md col-sm ">
                <p>Thank you for visiting Conscious Wellness, located in rural Sonora California in the Sierra Foothills the gold country. Conscious Wellness provides education and tools for you to achieve your optimal health. We believe that humans are more than just a body part or a dis-ease. There  is an interconnectedness of the body, mind and soul, and each are affected by the other.</p>
            </div>
          </div>
        </div>
      </div>
  </section>

)

const Intro = () => (
  <Layout>
    <IntroTemplate/>
  </Layout>
)

export default Intro
