import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootswatch/dist/yeti/bootstrap.min.css'
import '../css/main.css'
import '../css/contact.css'
import '../css/responsive.css'

import Navigation from './navbar'
import Footer from './footer'
import SEO from './SEO.js'

const Layout = ({children}) => (

    <StaticQuery
      query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />

            {/*Icon Styles*/}
            <link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png"/>
            <link rel="manifest" href="/icons/manifest.json"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#ffffff"/>

            {/*Animation*/}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
          </Helmet>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          <SEO/>
          <Navigation/>
            <div>
              {children}
            </div>
          <Footer/>
        </>
      )}
    />
)

export default Layout
