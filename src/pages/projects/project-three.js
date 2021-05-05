import React from "react"
import Layout from "../../components/Layout"
import PageHeader from "../../components/PageHeader"
import ProjectInfoSection from "../../components/ProjectInfoSection"
import FeaturedImage from "../../components/ProjectComponents/FeaturedImage"
import { graphql } from "gatsby"
import ProjectDescription from "../../components/ProjectComponents/ProjectDescription"
import Contact from "../../components/Contact"
import Seo from "../../components/seo"

function ProjectThree({ data }) {
  const projectInfo = data.allProjectsJson.edges[0].node
  const projectFeatures = [
    "Built with ReactJS,",
    "Utilises CRUD,",
    "Modular Styles",
  ]

  return (
    <Layout>
      <Seo title="Project Three" description="Project page three" />
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
        description="A mobile first personal productivity app, firstly designed and prototyped in Figma, before development in ReactJS for a quick and responsive user experience. Currently in version 1.0 with additional features planned in future updates."
        features={projectFeatures}
        buttonText="Github"
        buttonURL="https://github.com/KeelanJon/keelanjon-taskapp"
        buttonText2="Design Preview"
        buttonURL2="https://www.figma.com/file/mzgPRReYSnAvb3XoStwJU5/Task-App-Simple-Prototype?node-id=0%3A1"
      />
      <Contact />
    </Layout>
  )
}

export default ProjectThree

export const ProjectData = graphql`
  query ProjectThreeData {
    allProjectsJson(filter: { slug: { eq: "/projects/project-three/" } }) {
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
