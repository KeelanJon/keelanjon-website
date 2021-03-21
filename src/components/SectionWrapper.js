import React from "react"
import styled from "styled-components"

//This component is used to wrap two sections together
//ensuring the background circles don't get clipped
function SectionWrapper({ children }) {
  return (
    <Container>
      <InnerContainer>{children}</InnerContainer>

      <BackgroundCircle />
      <BackgroundCircleTwo />
    </Container>
  )
}

export default SectionWrapper

const Container = styled.div`
  overflow-x: hidden;
`

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 99;
  background: none;
`

const BackgroundCircle = styled.div`
  position: absolute;
  top: -20vh;
  right: -30vw;
  overflow: hidden;
  background: #131419;

  border-radius: 50%;
  width: 90vw;
  height: 90vw;

  filter: drop-shadow(0 0 2.5rem rgba(0, 0, 0, 0.3));
  transition: 2s ease 0s;

  z-index: 0;

  @media screen and (min-width: 1920px) {
    top: -80vh;
  }

  @media screen and (max-width: 764px) {
    width: 120vw;
    height: 120vw;
    top: -10vh;
    right: -50vw;
  }

  &:hover {
    background: #4d13ef;
  }
`

const BackgroundCircleTwo = styled.div`
  position: absolute;
  top: -10vh;
  left: -10vw;
  overflow: hidden;

  border-radius: 50%;
  width: 30vw;
  height: 30vw;
  background: #131419;
  filter: drop-shadow(0 0 2.5rem rgba(0, 0, 0, 0.3));
  transition: 2s ease 0s;

  &:hover {
    background: #4d13ef;
  }

  @media screen and (min-width: 1920px) {
  }

  @media screen and (max-width: 764px) {
    width: 60vw;
    height: 60vw;
    top: -25vh;
    left: -30vw;
  }
`
