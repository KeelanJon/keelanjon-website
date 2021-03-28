import React from "react"
import styled from "styled-components"

let socialLinks = [
  { name: "Twitter.", link: "#twitter" },
  { name: "YouTube.", link: "#youtube" },
  { name: "Instagram.", link: "#instagram" },
]

function SocialBar() {
  return (
    <LinksContainer>
      {socialLinks.map(function (item, index) {
        return <a href={item.link}>{item.name}</a>
      })}
    </LinksContainer>
  )
}

export default SocialBar

const LinksContainer = styled.div`
  position: absolute;
  bottom: 10%;
  right: 5%;

  a {
    text-decoration: none;
    padding: 1rem 1.5rem;
    font-weight: 300;
  }
`
