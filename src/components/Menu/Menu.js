import React, { useState } from "react"
import styled, { ThemeProvider, keyframes } from "styled-components"
import { MdClear } from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io"
import VideoFeed from "../VideoFeed/VideoFeed"
import Footer from "../Footer"
import BackgroundCircle from "../BackgroundCircle"
import { Link } from "gatsby"

const MenuLinks = [
  { text: "Home", link: "/" },
  { text: "About", link: "#AboutMe" },
  { text: "Services", link: "#services" },
  { text: "Projects", link: "#projects" },
  { text: "Contact", link: "#contact" },
]

function Menu(props) {
  return (
    <MenuContainer open={props.MenuState}>
      <Navigation>
        <MenuIcon
          onClick={function () {
            props.togglefunction()
          }}
        />

        <StyledGrid>
          <StyledNav>
            <ul>
              {MenuLinks.map(function (item, index) {
                return (
                  <li>
                    <Link
                      to={item.link}
                      onClick={function () {
                        props.togglefunction()
                      }}
                    >
                      {item.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </StyledNav>
          <LinksColumn>
            <LinksContainer>
              <h4>Socials</h4>
              <ul>
                <li>
                  <a href="https://www.youtube.com/channel/UCsx6kQZt0y3Ie5ob_cwQ5cQ">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/keelanjon_/?hl=en">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/keelsdesign?lang=en">Twitter</a>
                </li>
              </ul>
            </LinksContainer>
            <LinksContainer>
              <h4>Contact</h4>
              <ul>
                <li>info@keelsdesign.co.uk</li>
                <li>07476210620</li>
              </ul>
            </LinksContainer>
          </LinksColumn>
        </StyledGrid>
      </Navigation>
      <Footer />
    </MenuContainer>
  )
}

export default Menu

const MenuContainer = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 
  transform: ${props => (props.open ? "translateY(0)" : "translateY(-100%)")};

  z-index: 9;
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.dark.primaryColor};
  transition: 0.6s ease-out 0s;
  overflow: hidden;
  padding: 5rem;
  padding-bottom: 2rem;

  @media screen and (max-width: ${props =>
    props.theme.screenDimensions.mobile}) {
    padding: 2rem;s
  }
`

const Navigation = styled.div`
  width: 100%;
`

const MenuIcon = styled(MdClear)`
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 2rem;
  background: none;
  cursor: pointer;
  transition: 0.3s ease 0s;

  &:hover {
    transform: rotate(45deg);
  }

  &:active {
    transform: scale(1.2);
  }
`

const StyledGrid = styled.div`
  display: grid;
`

//Navigation link container element
const StyledNav = styled.nav`
  transition: 0.3s ease 0s;
  * {
    text-decoration: none;
  }

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
      opacity: 0.1;
      transform: translateX(5%);
    }
  }
`

const NavIcon = styled(IoIosArrowForward)`
  font-size: 1.2rem;
  padding-left: 2rem;
`

const LinksColumn = styled.div`
  grid-column: 3/4;

  @media screen and (max-width: ${props =>
    props.theme.screenDimensions.mobile}) {
        display: none;
  }
  }
`

const LinksContainer = styled.div`
  padding-bottom: 5rem;

  li,
  ul {
    list-style: none;
    padding: 0.5rem 0;
    font-weight: 300;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    transition: 0.3s ease 0s;

    &:hover {
      padding-left: 1rem;
      opacity: 0.2;
    }
  }
`
