import { graphql, useStaticQuery } from "gatsby"

function useBlogData() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query allBlogData {
      allMarkdownRemark {
        nodes {
          frontmatter {
            date
            title
          }
          rawMarkdownBody
        }
      }
    }
  `)

  return allMarkdownRemark.nodes
}

export default useBlogData
