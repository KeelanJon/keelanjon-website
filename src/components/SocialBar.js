import React from "react"
import styled from "styled-components"

let socialLinks = [
  { name: "Twitter.", link: "https://twitter.com/keelsdesign?lang=en" },
  {
    name: "YouTube.",
    link: "https://www.youtube.com/channel/UCsx6kQZt0y3Ie5ob_cwQ5cQ",
  },
  { name: "Instagram.", link: "https://www.instagram.com/keelanjon_/?hl=en" },
]

function SocialBar() {
  return (
    <LinksContainer>
      {socialLinks.map(function (item, index) {
        return (
          <a
            key={index}
            href={item.link}
            data-sal="slide-down"
            data-sal-delay="600"
            data-sal-easing="ease"
            once="false"
          >
            {item.name}
          </a>
        )
      })}
    </LinksContainer>
  )
}

export default SocialBar

const LinksContainer = styled.div`
  position: absolute;
  bottom: 10%;
  right: 0%;
  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    bottom: 12%;
  }

  a {
    text-decoration: none;
    padding: 1rem 1.5rem;
    font-weight: 300;
    transition: 0.3s ease 0s;

    &:hover {
      opacity: 0.2;
    }

    @media screen and (max-width: ${props =>
        props.theme.screenDimensions.mobile}) {
      padding: 1rem 0.8rem;
    }
  }
`
