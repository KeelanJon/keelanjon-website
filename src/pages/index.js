import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import NewAboutSection from "../components/NewAboutSection"
import Contact from "../components/Contact"
import PersonalProjects from "../components/PersonalProjects"
import HeroNew from "../components/HeroNew"
import PortfolioGrid from "../components/PortfolioGrid"

function IndexPage({ data }) {
  //Stores the project object data returned from graphql query
  const { title, description } = data.site.siteMetadata
  let projectData = data.allProjectsJson.nodes
  let projects = []
  let postData = data.allMarkdownRemark.nodes

  projectData.map(function (item, index) {
    projects.push(item)
  })

  return (
    <Layout>
      <SEO
        title="Designer and Front End Developer"
        description="Hi I'm Keelan, a Designer and Front End Developer. 
        I also like creating 3D illustrations, art and drinking lots of coffee."
      />
      <HeroNew />
      <NewAboutSection />
      <PortfolioGrid projectData={projects} />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }

    allProjectsJson {
      nodes {
        id
        author
        title
        category
        slug
        technology
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          date
          title
          author
          category
          paragraphOne
          paragraphTwo
          banner {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`
