/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import GlobalStyle from "../globalStyles"

import Header from "./Header/Header"
import CustomCursor from "./CustomCursor"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <CustomCursor />
      <Header />

      <StyledMain>{children}</StyledMain>

      <Footer/>
    </LayoutContainer>
  )
}

export default Layout

const FooterContainer = styled.footer`
  text-align: left;
  padding: 5% 10%;
`

const LayoutContainer = styled.div`
  overflow: hidden;
`
const StyledMain = styled.main`
  overflow: hidden;
`
