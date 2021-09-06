import React from "react"
import styled from "styled-components"
import FlexBox from "./FlexBox/FlexBox"
import SocialBar from "./SocialBar"
import Sphere from "./3DObjects/Sphere"

//image imports
import Line from "../images/line.png"
import KeelanImage from "../images/keelanjon-image.png"

function HeroNew() {
  return (
    <Container>
      <FlexBox direction="column" align="center" justify="center">
        <BlurCircle />
        <Sphere height="10vw" width="10vw" top="10vh" right="80vw" />
        <Sphere height="20vw" width="20vw" top="90vh" left="10vw" />
        <StyledImage
          src={KeelanImage}
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="900"
        ></StyledImage>
        <SubHeader
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="900"
        >
          Did someone say coffee?
        </SubHeader>
        <StyledHeader
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="900"
        >
          Hi there, I'm Keelan. A Design & Developer from Wales
        </StyledHeader>
      </FlexBox>
    </Container>
  )
}

export default HeroNew

//Note to self. Do not make this container Realtive, as the
//floating blur spheres are absoultely positioned realtive to
//the layout component.
const Container = styled.section`
  padding: 20% 0 0 0;
  width: 100%;

  text-align: center;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    padding: 20% 0 0 0;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    padding: 20% 0 0 0;
  }
`

const StyledHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 4rem;

  max-width: 50%;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    max-width: 70vw;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    font-size: 1.5rem;
    max-width: 100%;
  }
`

const SubHeader = styled.h4`
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 4px;
  font-weight: 300;
  line-height: 2;
`

const StyledImage = styled.img`
  width: 100px;
  border-radius: 50%;
  margin: 2rem;
`

const StyledButton = styled.button`
  background: none;
  text-transform: uppercase;
  border: none;
  letter-spacing: 4px;
  font-weight: 300;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    letter-spacing: 5px;
    opacity: 0.5;
  }
`

const BlurCircle = styled.div`
  position: absolute;
  top: 20vh;
  right: -20vw;
  height: 40vw;
  width: 40vw;
  filter: blur(100px);
  background: linear-gradient(
    134.29deg,
    rgba(60, 150, 200, 0.5) -10.9%,
    rgba(88, 22, 230, 0.5) 65.48%
  );

  border-radius: 50%;
  opacity: 0.7;
`
