import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection"
import NewAboutSection from "../components/NewAboutSection"
import SectionWrapper from "../components/SectionWrapper"
import WorkGallery from "../components/WorkGallery"
import Contact from "../components/Contact"
import NewHero from "../components/NewHero"

function IndexPage({ data }) {
  //Stores the project object data returned from graphql query
  const { title, description } = data.site.siteMetadata
  let projectData = data.allProjectsJson.nodes
  let projects = []
  let postData = data.allMarkdownRemark.nodes
  // console.log(projects)

  projectData.map(function (item, index) {
    projects.push(item)
  })

  // console.log(postData)

  return (
    <Layout>
      <SEO title="Home" />
      {/* <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/Blog/">BLOG</Link> */}
      <NewHero />
      <NewAboutSection />

      {/* <Hero /> */}
      <Link to="/portfolio">blog</Link>
      <WorkGallery projectData={postData} />
      {/* <div>
        <h2>Blog</h2>
        {postData.map(function (item, index) {
          return (
            <div key={index} style={{ padding: "1rem" }}>
              <img
                src={item.frontmatter.banner.childImageSharp.fluid.src}
              ></img>
              <p>{item.frontmatter.date}</p>
              <h3>{item.frontmatter.title}</h3>
              <p>{item.excerpt}</p>
              <Link to={item.fields.slug}>Read More</Link>
            </div>
          )
        })}
      </div> */}
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
        description
        name
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
