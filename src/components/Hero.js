import React from "react"
import styled from "styled-components"
import PersonalImage from "../images/Keelan Jon - Website Image.png"
import PrimaryButton from "./buttons/PrimaryButton"
import SecondaryBtn from "./buttons/SecondaryButton"
import SocialBar from "./SocialBar"
import SlideInText from "./SlideInText"
import BGSphere from "./3DObjects/Sphere"

function Hero(props) {
  return (
    <HeroContainer>
      {/* <BGSphere top="-15%" left="0" height="100%" />
      <BGSphere top="50%" left="60%" height="50px" /> */}

      <ContentWrapper>
        <SlideInText>
          <h4>Striving for Artistic creativity</h4>
        </SlideInText>
        <SlideInText>
          <Title>Keelan Jonathan</Title>
        </SlideInText>
        <SlideInText>
          <Title>Design & Developer</Title>
        </SlideInText>
        <SlideInText>
          <p style={{ fontSize: "1rem" }}>
            My name is Keelan. I am a Design, Developer and 3D Illustrator.
          </p>
        </SlideInText>
        <div>
          <a href="#AboutMe">
            <PrimaryButton>Explore</PrimaryButton>
          </a>

          <SecondaryBtn>My Experience</SecondaryBtn>
        </div>
      </ContentWrapper>

      <ImageColumn>
        <img src={PersonalImage} />
      </ImageColumn>

      <SocialBar />
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${props => props.theme.dark.primaryColor};

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    flex-direction: column;
    height: 100vh;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    height: 100%;
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
  }
`

const Title = styled.h1`
  color: ${props => props.theme.dark.secondaryColor};
  font-size: ${props => props.theme.fontSizes.large};
`
