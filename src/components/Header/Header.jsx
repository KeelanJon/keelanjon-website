import React, { useState } from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"
import Menu from "../Menu/Menu"

export default function Header({ siteTitle }) {
  const [menuState, setMenuState] = useState(false)

  function toggleMenu() {
    setMenuState(!menuState)
  }

  return (
    <NavContainer>
      <Menu MenuState={menuState} togglefunction={setMenuState} />
      <Link to="/">
        <Title>
          <h1>KeelanJon</h1>
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
  padding: 3rem 5%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  & > * {
    text-decoration: none;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

const Title = styled.div`
  font-size: 1rem;
  background: none;
  animation: ${rotate} 2s ease-in infinite;

  & > * {
    background: none;
  }
`
const BurgerMenu = styled.div`
  font-weight: bold;
  cursor: pointer;
  background: none;
`
