import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import PageHeader from "../components/PageHeader"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import bannerImage from "../images/odd-folk-header.jpg"
import nftImage from "../images/OddFolk-KeelanJon.png"
import PrimaryButton from "../components/buttons/PrimaryButton"

function Oddfolk(props) {
  const { allOddfolkJson } = useStaticQuery(
    graphql`
      query {
        allOddfolkJson {
          edges {
            node {
              id
              name
              url
              image {
                id
                childImageSharp {
                  fluid(quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const oddFolks = allOddfolkJson.edges

  return (
    <Layout>
      <SEO
        title="KeelanJon Odd Folk NFT Collection"
        description="Odd Folk are an assortment of authentic characters created by Keelan Jon on the Blockchain."
      />

      <PageHeader
        header="Odd Folk NFT Collection"
        subheader="welcome to my art gallery"
        buttonURL="#nfts"
        description="These Odd Folk are an assortment of authentic characters created by Keelan Jon on the Blockchain. These represent different loves throughout Keelan’s life, from movies, games, inspirational people and more."
      />
      <CollectionGallery id="nfts">
        {oddFolks.map(function (folk) {
          return (
            <GalleryCard
              data-sal="slide-up"
              data-sal-delay="30"
              data-sal-easing="ease"
              data-sal-duration="1200"
            >
              <a href={folk.node.url}>
                <Img fluid={folk.node.image.childImageSharp.fluid} />
              </a>
              <CardInfo>
                <div>
                  <p className="platform">Open sea, available</p>
                </div>
                <div>
                  <h3 className="title">Odd Folk - {folk.node.name}</h3>
                </div>
              </CardInfo>
            </GalleryCard>
          )
        })}
      </CollectionGallery>
    </Layout>
  )
}

export default Oddfolk

const CollectionGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    grid-template-columns: 1fr;
  }
`

const GalleryCard = styled.div`
  position: relative;
  transition: 0.3s ease 0s !important;

  &:hover {
    transform: translateY(-5px);
  }
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;

  h3 {
    padding: 0rem 0;
    font-weight: 700;
  }

  p {
    padding: 1rem 0;
  }

  a {
    text-decoration: none;
  }

  .platform {
    opacity: 0.6;
  }

  .title {
    font-size: 1.5rem;
  }

  .link {
    font-size: 1.2rem;
  }
`
