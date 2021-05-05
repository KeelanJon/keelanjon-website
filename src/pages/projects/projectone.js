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
    "Built with ReactJS, ",
    "Optimised Images using GraphQL,",
    "Clean UI/UX,",
    "Responsive Design",
  ]

  return (
    <Layout>
      <Seo title="Project One" description="Project page one" />

      <PageHeader
        header="KeelanJon Portfolio Website Design & Development"
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
        description="A portfolio website created to demonstrate my skills and abilities as a design and developer, in addition to being my new home on the internet to post my thoughts and creative ideas.
Built with my preferred webstack utilising React and Gatsby for fast performance and optimisation, in addition to Styled Components to implement a component central styling system. Utilising a component based approach, creating a modular based design system for a simplified and organised design system."
        features={projectFeatures}
        buttonText="Github"
        buttonURL="https://github.com/KeelanJon/keelanjon-website"
        buttonText2="No live link,you're using it!"
      />
      <Contact />
    </Layout>
  )
}

export default ProjectOne

/*There is likely a way that instead of having a graphql query
in each project page, you could likely create some sort of custom hook
that lets you return data based on passed parameters.*/
//But for now...let's just do this quick job
//ALSO I notice we're querying all project data, seems the filter option
//isn't quite configured correctly?
export const ProjectData = graphql`
  query ProjectOneData {
    allProjectsJson(filter: { slug: { eq: "/projects/projectone/" } }) {
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
