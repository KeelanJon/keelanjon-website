import { graphql, useStaticQuery } from "gatsby"

function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query siteMetadata {
      site {
        siteMetadata {
          author
          description
        }
      }
    }
  `)

  return site.siteMetadata
}

export default useSiteMetadata
