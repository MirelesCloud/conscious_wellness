const path = require("path")

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions
  const servicePageTemplate = path.resolve(`src/templates/servicesTemplate.js`)

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
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.services.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: servicePageTemplate,
        contect: {},
      })
    })
  })
}
