import React from "react"
import Layout from "../../components/Layout"
import PageHeader from "../../components/PageHeader"
import ProjectInfoSection from "../../components/ProjectInfoSection"
import FeaturedImage from "../../components/ProjectComponents/FeaturedImage"
import { graphql } from "gatsby"
import ProjectDescription from "../../components/ProjectComponents/ProjectDescription"
import Contact from "../../components/Contact"
import Seo from "../../components/seo"

function ProjectFour({ data }) {
  const projectInfo = data.allProjectsJson.edges[0].node
  const projectFeatures = [
    "Built with ReactJS,",
    "Utilises CRUD,",
    "Modular Styles",
  ]

  return (
    <Layout>
      <Seo title="Project Four" description="Project page four" />
      <PageHeader
        header={projectInfo.title}
        subheader={projectInfo.category}
        buttonURL="#projectInfo"
      />
      <ProjectInfoSection
        author={projectInfo.author}
        date={projectInfo.date}
        category={projectInfo.category}
        technology={projectInfo.technology}
      />
      <FeaturedImage image={projectInfo.featuredImage.childImageSharp.fluid} />
      <ProjectDescription description="" features={projectFeatures} />
      <Contact />
    </Layout>
  )
}

export default ProjectFour

export const ProjectData = graphql`
  query ProjectFourData {
    allProjectsJson(filter: { slug: { eq: "/projects/project-four/" } }) {
      edges {
        node {
          id
          title
          author
          category
          date
          description
          technology
          galleryImages {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
