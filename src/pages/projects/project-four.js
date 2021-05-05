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
    "Custom 3D Illustrions,",
    "24 3D Character Poses",
    "8 Object Assets",
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
      <ProjectDescription
        description="A 3D asset UI/UX design product utilising Blender for 3D illustrations and character design, through to exporting into Figma for mockup and protyping. 
        "
        features={projectFeatures}
        buttonText="Design Preview"
        buttonText2="Product Page"
        buttonURL="https://www.figma.com/file/lxkrFTodbckkOoZCBRvGJf/3D-Assets-Preview?node-id=0%3A1"
        buttonURL2="https://ui8.net/keelan-jon/products/3d-web-illustration---character-pack"
      />
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
