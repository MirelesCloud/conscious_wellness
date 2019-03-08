import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, pathname, image, siteLogo, siteIconSmall, siteIconLarge }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          siteUrl,
          defaultImage,
          defaultSiteIconSmall,
          defaultSiteIconLarge
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
        siteIconSmall: `${siteUrl}${siteIconSmall || defaultSiteIconSmall}`,
        siteIconLarge: `${siteUrl}${siteIconLarge || defaultSiteIconLarge}`
      }
      return (
        <Helmet title={seo.title}>
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          <meta name="siteIconSmall" content={seo.siteIconSmall}/>
          <meta name="siteIconlarge" content={seo.siteIconLarge}/>
          {seo.url && <meta property="og:url" content={seo.url} />}
          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}
          {seo.image && <meta property="og:image" content={seo.image} />}
          {seo.siteIconSmall && <meta property="og:sitIconSmall" content={seo.siteIconSmall}/>}
          {seo.siteIconLarge && <meta property="og:sitIconLarge" content={seo.siteIconLarge}/>}
        </Helmet>
      )
    }}
  />
)

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        deaultImage: image
      }
    }
  }`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  siteUrl: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  siteUrl: null,
}
