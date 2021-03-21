import React, { useState } from "react"
import styled, { ThemeProvider, keyframes } from "styled-components"
import { MdClear } from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io"
import Theme from "../../styles/Theme"
import VideoFeed from "../VideoFeed/VideoFeed"
import Footer from "../Footer"
import BackgroundCircle from "../BackgroundCircle"

function Menu(props) {
  return (
    <ThemeProvider theme={Theme}>
      <MenuContainer open={props.MenuState}>
      <BackgroundCircle top="80vh" left="-20vw" />
      <BackgroundCircle top="-10vh" right="-20vw" />
        <Navigation>
          <MenuIcon
            onClick={function () {
              props.togglefunction()
            }}
          />

          <StyledGrid>
            <StyledNav>
              <ul>
                <li>Home<NavIcon /></li>
                <li>About<NavIcon /></li>
                <li>Projects<NavIcon /></li>
                <li>Contact<NavIcon /></li>
              </ul>
              
            </StyledNav>
            <LinksColumn>
              <LinksContainer>
              <h4>
                Socials
              </h4>
              <ul>
                <li>Dribble</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </LinksContainer>
              <LinksContainer>
                <h4>Contact Us</h4>
                <ul>
                  <li>info@keelsdesign.co.uk</li>
                  <li>07476210620</li>
                </ul>
              </LinksContainer>
            </LinksColumn>
            <Footer />
          </StyledGrid>
        </Navigation>
      </MenuContainer>
    </ThemeProvider>
  )
}

export default Menu

function slideInUp() {
  return keyframes`
  
    0%{
      transform: translateY(100%);
      opacity: 0;
    }
    100%{
      transform: translateY(0%);
      opacity: 
    }
  `
}

function menuAnimation() {
  return keyframes`
    0%{
      height: 0%;
      overflow: hidden;
    }
    100%{
      height: 100%;
 
    }

  `
}

const MenuContainer = styled.div`
  position: fixed;
  display: ${props => (props.open ? "inline" : "none")};
  top: 0;
  left: 0;
  z-index: 9;
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.primaryColor};

`

const Navigation = styled.div`
  position: relative;
  height: 100%;
  padding: 1rem;
`

const MenuIcon = styled(MdClear)`
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 2rem;
  background: none;
  cursor: pointer;
`

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
 

  max-width: 1440px;
  height: 100%;
  margin: auto auto;

  & > * {

    padding: 10vh 5vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;  
    width: 100%;

    @media screen and (max-width: ${(props) =>
      props.theme.screenDimensions.mobile}) {
      padding: 0vh 5vw;
    }
  }

  @media screen and (max-width: ${(props) =>
      props.theme.screenDimensions.mobile}) {
    grid-template-columns: 1fr;
  }


`

//Navigation link container element
const StyledNav = styled.nav`
  transition: 0.3s ease 0s;

  li {

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    list-style: none;
    font-size: 5vw;
    font-weight: 500;
    padding: 0.5rem 0;

    cursor: pointer;
    transition: 0.3s ease 0s;
    &:hover {
      color: #4d13ef;
    }
  }
`

const NavIcon = styled(IoIosArrowForward) `
  font-size: 1.2rem;
  padding-left: 2rem;
`

const LinksColumn = styled.div `
  grid-column: 3/4;

  @media screen and (max-width: ${(props) =>
      props.theme.screenDimensions.mobile}) {
    grid-column: 1/2;
    grid-row: 2/3;
  }

`

const LinksContainer = styled.div `
  padding-bottom: 5rem;

  li,ul{
    list-style: none;
    padding: .5rem 0 ;
    font-weight: 300;
    font-size: 1rem;
  }
`
