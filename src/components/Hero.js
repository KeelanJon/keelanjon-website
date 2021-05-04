import React from "react"
import styled from "styled-components"
import PersonalImage from "../images/Keelan Jon - Website Image.png"
import PrimaryButton from "./buttons/PrimaryButton"
import SecondaryBtn from "./buttons/SecondaryButton"
import SocialBar from "./SocialBar"
import BGSphere from "./3DObjects/Sphere"

function Hero(props) {
  return (
    <HeroContainer>
      {/* <BGSphere top="-15%" left="0" height="100%" />
      <BGSphere top="50%" left="60%" height="50px" /> */}

      <ContentWrapper>
        <ButtonWrapper>
          <a href="#AboutMe">
            <PrimaryButton>Explore</PrimaryButton>
          </a>

          <a href="#projects">
            <SecondaryBtn>My Work</SecondaryBtn>
          </a>
        </ButtonWrapper>
      </ContentWrapper>

      <ImageColumn
        data-sal="slide-down"
        data-sal-delay="0"
        data-sal-easing="ease"
        data-sal-duration="600"
      >
        <img src={PersonalImage} />
      </ImageColumn>

      <SocialBar />
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  background: ${props => props.theme.dark.primaryColor};

  @media screen and (min-width: ${props =>
      props.theme.screenDimensions.desktop}) {
    height: 100vh;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    flex-direction: column;
  }
`

const ContentWrapper = styled.div`
  flex: 1;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    padding: 20% 0;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    padding: 20vh 0;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`

const ImageColumn = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  flex: 1;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0 0 0 200px;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    height: 50%;
    img {
      object-position: center;
    }

    @media screen and (max-width: ${props =>
        props.theme.screenDimensions.mobile}) {
    }
  }
`

const Title = styled.h1`
  color: ${props => props.theme.dark.secondaryColor};
  font-size: ${props => props.theme.fontSizes.large};

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    font-size: 1.8rem;
  }
`
