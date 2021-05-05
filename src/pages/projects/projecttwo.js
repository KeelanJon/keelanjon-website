import React from "react"
import Layout from "../../components/Layout"
import PageHeader from "../../components/PageHeader"
import ProjectInfoSection from "../../components/ProjectInfoSection"
import FeaturedImage from "../../components/ProjectComponents/FeaturedImage"
import { graphql } from "gatsby"
import ProjectDescription from "../../components/ProjectComponents/ProjectDescription"
import Contact from "../../components/Contact"
import Seo from "../../components/seo"

function ProjectOne({ data }) {
  const projectInfo = data.allProjectsJson.edges[0].node
  const projectFeatures = [
    "Built with Vanilla JavaScript,",
    "Utilises Local Storage,",
    "DOM Manipulation,",
    "HTML5/CSS3",
  ]

  return (
    <Layout>
      <Seo title="Project Two" description="Project page two" />
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
        description="This is a project developed utilising core JavaScript concepts including DOM manipulation for displaying questions and variables, imports and exports for loading external data and local storage functionality for saving user scores to the host device. Try this short quiz and see how well you know JavaScript."
        features={projectFeatures}
        buttonURL="https://keelanjon.github.io/javascript-quizapp/"
        buttonURL2="https://github.com/KeelanJon/javascript-quizapp"
        buttonText="Take the Quiz"
        buttonText2="Github"
      />
      <Contact />
    </Layout>
  )
}

export default ProjectOne

export const ProjectData = graphql`
  query ProjectTwoData {
    allProjectsJson(filter: { slug: { eq: "/projects/projecttwo/" } }) {
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
