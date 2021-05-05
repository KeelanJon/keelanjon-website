/**
 *  The Layout component is used to wrap each page
 *  providing the usual header, footer, default global styles
 *  and access to the styled components theme options.
 *  Please see the theme.js file inside the styled folder for theme
 *  details.
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import GlobalStyle from "../globalStyles"
import Theme from "../styles/Theme"

import Header from "./Header/Header"
import CustomCursor from "./CustomCursor"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Theme>
        <GlobalStyle />
        {/* <CustomCursor /> */}
        <Header />

        <StyledMain>{children}</StyledMain>

        <Footer />
      </Theme>
    </LayoutContainer>
  )
}

export default Layout

const FooterContainer = styled.footer`
  text-align: left;
  padding: 5% 10%;
`

const LayoutContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0% 10%;
  max-width: 1920px;
  margin: auto auto;
`
const StyledMain = styled.main`
  overflow: hidden;
`
