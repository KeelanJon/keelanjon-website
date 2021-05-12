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
    "Open Weather API,",
    "Google Geocoding API",
    "Dark Mode Toggle",
    "SASS Styling",
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
        description="A weather app project programmed 
        using HTML5, CSS3, SASS and JavaScript. 
        Utilising both an Open weather API, in 
        combination with the Google Geocoding API. 
        This app allows the user to enter any location 
        which is then translated into longitude and 
        latitude data via geocoding, prior to fetching 
        data from the open weather api and receiving a 
        7 day forecast. 
        This app also features a simple dark mode theme 
        implementation that can be toggled.
        "
        features={projectFeatures}
        buttonText="GITHUB"
        buttonURL="https://github.com/KeelanJon/keelanjon-weatherapp"
      />
      <Contact />
    </Layout>
  )
}

export default ProjectFour

export const ProjectData = graphql`
  query ProjectFiveData {
    allProjectsJson(filter: { slug: { eq: "/projects/project-five/" } }) {
      edges {
        node {
          id
          title
          author
          category
          date
          description
          technology
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
