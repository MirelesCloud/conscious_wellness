const path = require("path")

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions
  const servicePageTemplate = path.resolve(`src/templates/servicesTemplate.js`)
  const aboutPageTemplate = path.resolve(`src/templates/aboutTemplate.js`)
  const testimonialsPageTemplate = path.resolve(`src/templates/testimonialsTemplate.js`)
  const contactPageTemplate = path.resolve(`src/templates/contactTemplate.js`)

  return graphql(`
    {
      services: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/services/*md"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      about: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/about/*md"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      testimonials: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/testimonials/*md"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      contact: allMarkdownRemark(
        filter: {fileAbsolutePath: { glob: "**/src/pages/contact/*md"}}
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.services.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: servicePageTemplate,
        context: {},
      })
    }),

    result.data.about.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: aboutPageTemplate,
        context: {},

      })
    }),

    result.data.testimonials.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: testimonialsPageTemplate,
        context: {},

      })
    }),

    result.data.contact.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: contactPageTemplate,
        context: {},

      })
    })
  })
}
