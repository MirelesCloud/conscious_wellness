import React from 'react'

import Layout from '../../components/layout'
import Banner from '../../components/header'
import Intro from '../../components/intro'
import Services from '../../components/services'
import About from '../../components/about'
import Contact from '../../components/contact'

const Home = () => (
 <Layout>
   <Banner/>
   <Intro/>
   <Services/>
   <About/>
   <Contact/>
 </Layout>
)

export default Home
