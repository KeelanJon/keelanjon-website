import React from "react"
import styled from "styled-components"
import Layout from "../../components/Layout"
import { Link, graphql } from "gatsby"

//image Imports
import HeaderImage from "../../data/project-images/letstalk-featured-image.png"

function letstalkProject({ data }) {
  return (
    <Layout>
      <Header>
        <h1>Lets Talk Mens Mental Health</h1>
        <Link to="#overview">Discover</Link>
      </Header>
      <DetailsSection id="overview">
        <DetailCard>
          <h3>Author</h3>
          <p>Keelan Jonathan</p>
        </DetailCard>
        <DetailCard>
          <h3>Date</h3>
          <p>06 Apr 2021</p>
        </DetailCard>
        <DetailCard>
          <h3>Category</h3>
          <p>Design, WordPress</p>
        </DetailCard>
        <DetailCard>
          <h3>Technology</h3>
          <p>WordPress, Divi Theme</p>
        </DetailCard>
      </DetailsSection>
      <FeaturedImage>
        <img src={HeaderImage} />
      </FeaturedImage>
      <TextArea>
        <div>
          <h4>01/ How it started</h4>
        </div>
        <div>
          <p>
            <h2>The Challenge</h2>
            Let’s Talk Mens Mental health are a non for profit community
            interest organisation established to make a difference in the stigma
            around mens mental health. They approached me to help design and
            develop a modern website for their organisation, provide an online
            store platform that links with Printful for dynamic purchase and
            shipping, and with their integrate their podcast stream.
          </p>
        </div>
      </TextArea>
    </Layout>
  )
}

export default letstalkProject

//Graphql queries here!

//Styled components begin here!

const Header = styled.section`
  padding: 30vh 0;

  h1 {
    font-size: 6vw;
    max-width: 800px;
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 300;

    margin: 1rem 0;
    transition: 0.3s ease 0s;
    &:hover {
      padding-left: 1rem;
    }
  }
`
const DetailsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5vh 0;
`
const DetailCard = styled.div`
  padding-right: 5rem;

  h3 {
    font-size: 2.5rem;
  }
  p {
    padding: 0.5rem 0;
  }
`
const FeaturedImage = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`
const TextArea = styled.div`
  display: flex;

  padding: 10vh 0;
  text-align: justify;

  h2 {
    font-size: ${props => props.theme.fontSizes.medium};
    padding-bottom: 1rem;
  }

  div {
    flex: 1;
  }
`
const FullWidthImage = styled.div``
