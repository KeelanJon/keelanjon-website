import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { keyframes } from "styled-components"
import Image from "gatsby"
import Img from "gatsby-image"

//icon imports
import { AiFillCloseCircle } from "react-icons/ai"

//image imports
import ObiWan from "../images/obi-wan.gif"

export default function Hero() {
  let [theme, toggleTheme] = useState(true)
  let [beacons, toggleBeacons] = useState(false)
  let [obi, toggleObi] = useState(false)

  //Function handles the themeing toggling
  function handleChange() {
    toggleTheme(!theme)
    console.log(theme)
  }

  //Function handles the toggle beacon option.
  function handleBeacons() {
    toggleBeacons(!beacons)
    console.log(beacons)
  }

  function changeObi() {
    toggleObi(!obi)
  }

  return (
    <Container primary={theme}>
      <BackgroundCircle primary={theme}></BackgroundCircle>
      <BackgroundCircleTwo primary={theme}></BackgroundCircleTwo>
      <TitleWrapper>
        <SubHeader
          onClick={function () {
            changeObi()
          }}
        >
          Hello There
        </SubHeader>

        <ObiContainer display={obi}>
          <CloseIcon
            onClick={function () {
              changeObi()
            }}
          />

          <img src={ObiWan}></img>
        </ObiContainer>

        <Title>
          Keelan Jonathan <br></br> Design & Developer
        </Title>
        <Description>
          Every idea begins with a spark, then you just have to catch it
        </Description>
      </TitleWrapper>
      <BottomBar>
        <ScrollText>Catch it</ScrollText>
        <LightModeButton
          onClick={function () {
            handleChange()
          }}
        >
          Light the beacons
        </LightModeButton>
      </BottomBar>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  background: none;
  filter: invert(${props => (props.primary ? "0" : "1")});
  transition: 0.6s ease 0s;
  overflow: hidden;
`
const TitleWrapper = styled.div`
  position: relative;
  z-index: 998;
  width: 800px;
  background: none;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`
const SubHeader = styled.h4`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 300;
  padding-left: 5rem;
  font-family: "Roboto", sans-serif;
  background: none;

  cursor: pointer;

  animation: pulse 6s infinite;

  @keyframes pulse {
    0% {
      letter-spacing: 5px;
    }
    50% {
      letter-spacing: 8px;
    }
    100% {
      letter-spacing: 5px;
    }
  }
`
const Title = styled.h2`
  font-size: 5rem;
  padding: 3rem 0;
  background: none;

  @media screen and (max-width: 800px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 580px) {
    font-size: 1.8rem;
  }
`

const Description = styled.p`
  font-weight: 300;
  letter-spacing: 1px;
  width: 40%;
  line-height: 1.8;
  padding-left: 5rem;
  font-family: "Roboto", sans-serif;
  background: none;

  @media screen and (max-width: 800px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    padding-left: 1rem;
    width: 80%;
  }
`

const BottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  background: none;
`
const ScrollText = styled.p``
const LightModeButton = styled.p``

const Button = styled.button``

const BackgroundCircle = styled.div`
  position: absolute;
  top: -20vh;
  right: -30vw;
  overflow-hidden;

  border-radius: 50%;
  width: 90vw;
  height: 90vw;

  background: #131419;
  filter: invert(${props => (props.primary ? "0" : "1")});
  filter: drop-shadow(0 0 2.5rem rgba(0,0,0,0.3));
  transition: 2s ease 0s;

  @media screen and (min-width: 1920px){
    top: -80vh;
  }

  @media screen and (max-width: 764px){
    width: 120vw;
    height: 120vw;
    top: -10vh;
    right: -50vw;
  }


  &:hover{
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
  background: ${props => (props.primary ? "#131419" : "green")};
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

//********************************************* */
// Here is the Obi-Wan Kenobi interaction styles
//*********************************************** */
const ObiContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;

  display: ${props => (props.display ? "grid" : "none")};
  place-items: center;

  transition: 0.6s ease 0s;
  animation: fade 2s;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`
const CloseIcon = styled(AiFillCloseCircle)`
  position: absolute;
  top: 5px;
  right: 5px;

  background: none;
  color: red;
  cursor: pointer;

  width: 2rem;
  height: 2rem;

  @media screen and (max-width: 764px) {
    top: 70px;
    right: -10px;
  }
`
