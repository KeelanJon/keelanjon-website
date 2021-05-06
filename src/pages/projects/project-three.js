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
    "ReactJS,",
    "CRUD,",
    "UseState",
    "useEffect",
    "Local Storage",
    "Bootstrap",
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
        description="A personal task app developed to keep track of projects 
        and daily tasks. Build with ReactJS utilising a combination of
        useState and useEffect hooks to create, update, read and delete data, in  addition 
        to using local storage to keep track of tasks after exiting a 
        browser session. Styles implemented using Bootstrap css library."
        features={projectFeatures}
        buttonText="Github"
        buttonURL="https://github.com/KeelanJon/keelanjon-taskapp"
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
