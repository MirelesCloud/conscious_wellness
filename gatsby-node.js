const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const aboutPageTemplate = path.resolve(`src/templates/aboutTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark {
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

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: aboutPageTemplate,
        context: {},
      })
    })
  })
}
