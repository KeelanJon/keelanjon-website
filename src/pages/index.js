import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

import AboutSection from "../components/AboutSection"
import NewAboutSection from "../components/NewAboutSection"
import SectionWrapper from "../components/SectionWrapper"
import WorkGallery from "../components/WorkGallery"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import SlideInText from "../components/SlideInText"
import ChoiceSection from "../components/ChoiceSection"
import ClientsSection from "../components/ClientsSection"
import Services from "../components/Services"

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
      <SEO title="Home" />
      <Hero />
      <NewAboutSection />

      <Services />
      <WorkGallery projectData={projects} />
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
      }
    }

    allProjectsJson {
      nodes {
        id
        author
        title
        category
        slug
        image {
          childImageSharp {
            fluid {
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
              fluid(maxWidth: 1920) {
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
