import React from "react"
import styled from "styled-components"
import PersonalImage from "../images/Keelan Jon - Website Image.png"
import PrimaryButton from "./buttons/PrimaryButton"
import SecondaryBtn from "./buttons/SecondaryButton"
import SocialBar from "./SocialBar"

function NewHero(props) {
  return (
    <HeroContainer>
      <ContentWrapper>
        <h4>Striving for Artistic creativity</h4>
        <Title>Keelan Jonathan Design & Developer</Title>

        <p>My name is Keelan. I am a Design, Developer and 3D Illustrator.</p>
        <PrimaryButton>Explore</PrimaryButton>
        <SecondaryBtn>My Experience</SecondaryBtn>
      </ContentWrapper>
      <ImageColumn background={PersonalImage}>image</ImageColumn>
      <SocialBar />
    </HeroContainer>
  )
}

export default NewHero

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  padding: 0 10%;
  display: flex;
  align-items: center;
  background: ${props => props.theme.dark.primaryColor};
`

const ContentWrapper = styled.div`
  flex: 1;
`

const ImageColumn = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;

  background-image: ${props => `url(${props.background})`};
  background: blue;
  background-size: cover;
`

const Title = styled.h1`
  color: ${props => props.theme.dark.secondaryColor};
  font-size: ${props => props.theme.fontSizes.large};
`
