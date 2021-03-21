import React from 'react'
import styled from "styled-components"

export default function Footer() {
    return (
        <StyledFooter style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()} Website by Keelan Jonathan
        </StyledFooter>
    )
}

const StyledFooter = styled.footer `
const FooterContainer = styled.footer
  text-align: left;
  padding: 5% 10%;

`