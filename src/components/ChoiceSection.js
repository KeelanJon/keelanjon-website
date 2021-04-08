import React from "react"
import styled from "styled-components"
import { BsArrowRightShort } from "react-icons/Bs"
import SocialCardBG from "../images/skillcard.png"
import SocialCardBG2 from "../images/skillcard2.png"
import DevImage from "../images/dev-image.png"
import DesignImage from "../images/design-image.png"
import BGSphere from "./3DObjects/Sphere"

function ChoiceSection() {
  return (
    <Container>
      <BGSphere top="0" left="5%" height="150%" />
      <BGSphere top="50%" left="60%" height="50px" />
      <BGSphere top="80%" left="25%" height="30px" />
      <TitleContainer>
        <h2>Embracing Art & Technology</h2>
        <p>
          Brining together both art and technology with web design and 3D
          illustration.
        </p>
      </TitleContainer>
      <CardWrapper>
        <SkillCard>
          <div>
            <DeveloperImage src={DevImage} />
          </div>
          <TextWrapper>
            <h3>Design & Development</h3>
            <p>Building beautiful website to promote your business </p>
            <a href="#">View Projects</a>
          </TextWrapper>
        </SkillCard>
        <SkillCard>
          <TextWrapper style={{ textAlign: "left" }}>
            <h3>3D illustration</h3>
            <p>Bringing your projects to life with amazing 3D illustrations</p>
            <a href="#">View Projects</a>
          </TextWrapper>
          <div>
            <DesignerImage src={DesignImage} />
          </div>
        </SkillCard>
      </CardWrapper>
    </Container>
  )
}

export default ChoiceSection

const Container = styled.section`
  position: relative;
  padding: 10% 0;
  max-width: 1440px;
  margin: auto auto;
`

const TitleContainer = styled.div`
  text-align: center;
  padding: 5% 20%;

  h2 {
    font-size: ${props => props.theme.fontSizes.large};
    font-weight: 700;
  }

  p {
    font-size: ${props => props.theme.fontSizes.bodyText};
  }
`

const CardWrapper = styled.div`
  margin: 1rem 0;
  padding: 5% 0;
  max-width: 1200px;
  margin: auto auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  height: 100%;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    flex-direction: column;
  }
`

/*-----------SKILL CARD STYLES HERE ALONG WITH ILLUSTRATION STYLES------------*/
/* ----------------------------------------------------------------------------------- */

const SkillCard = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  position: relative;
  display: flex;
  box-sizing: border-box;

  padding: 3rem;
  border-radius: 12px;

  background: #edf5ff;

  transition: 0.3s ease 0s;
  cursor: pointer;

  /*------------------CARD FONT STYLES-------------*/
  h3 {
    font-size: 1.2rem;
    line-height: 1.2;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  a {
    font-weight: 500;
    text-decoration: none;
    transition: 0.3s ease 0s;
    &:hover {
      color: ${props => props.theme.dark.secondaryColor};
    }
  }

  div {
    height: 100%;
    flex: 1;
    color: black;
    text-align: right;

    &:nth-of-type(2) {
    }
  }

  &:hover {
    transform: translateY(-5%);
  }
`

const TextWrapper = styled.div`
  * {
    color: ${props => props.theme.dark.primaryColor};
  }
`
const DeveloperImage = styled.img`
  position: absolute;
  bottom: 0;
  left: -5%;
  height: 150%;
`
const DesignerImage = styled.img`
  position: absolute;
  bottom: 0;
  right: -5%;
  height: 150%;
`
