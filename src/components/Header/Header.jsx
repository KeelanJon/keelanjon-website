import React, { useState } from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"
import Menu from "../Menu/Menu"

//images imports
import SiteLogo from "../../images/keelanjon-logo.png"

export default function Header({ siteTitle }) {
  const [menuState, setMenuState] = useState(false)

  function toggleMenu() {
    setMenuState(!menuState)
  }

  return (
    <NavContainer
      data-sal="slide-down"
      data-sal-delay="900"
      data-sal-easing="ease"
    >
      <Menu MenuState={menuState} togglefunction={setMenuState} />
      <Link to="/">
        <Title>
          <img src={SiteLogo} />
        </Title>
      </Link>

      <BurgerMenu
        onClick={function () {
          toggleMenu()
        }}
      >
        Menu
      </BurgerMenu>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: none;
  padding: 2% 2%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  & > * {
    text-decoration: none;
  }

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.tablet}) {
    padding: 5% 5%;
  }
`

const Title = styled.div`
  font-size: 1rem;
  background: none;

  transition: 0.3s ease-in 0s;

  & > * {
    background: none;
  }

  &:hover {
    transform: rotate(180deg);
  }
`
const BurgerMenu = styled.div`
  font-weight: bold;
  cursor: pointer;
  background: none;
`
