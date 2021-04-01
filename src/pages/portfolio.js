import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

function Portfolio({ data }) {
  const projects = data.allProjectsJson.edges

  return (
    <Layout>
      <div style={{ padding: "10rem 0rem" }}>
        <h1>Embracing a more minimal approach</h1>
        {projects.map(function (item, index) {
          return <p>{item.node.slug}</p>
        })}
        {console.log(projects)}
      </div>
    </Layout>
  )
}

export default Portfolio

export const pageQuery = graphql`
  query ProjectData {
    allProjectsJson {
      edges {
        node {
          slug
          id
          name
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
