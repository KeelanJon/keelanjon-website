import React from "react"
import styled from "styled-components"
import LinksPageHeader from "../components/LinksPageHeader"

import Layout from "../components/Layout"
import SEO from "../components/seo"

//To add more buttons to this page, just go ahead and add another object
//to the links Array and provide a text variable for the name, and a url variable
//for the button link.
const linksArray = [
  {
    text: "Youtube",
    url: "https://www.youtube.com/KeelanJonathan",
    target: "_blank",
  },
  {
    text: "UI/UX Character Pack 2020",
    url:
      "https://ui8.net/keelan-jon/products/3d-web-illustration---character-pack?status=6",
    target: "_blank",
  },
  {
    text: "Patreon",
    url: "https://www.patreon.com/keelanjon",
    target: "_blank",
  },
  {
    text: "NFT Gallery",
    url: "/oddfolk",
    target: "_self",
  },
  {
    text: "Store",
    url: "https://app.gumroad.com/keelanjon",
    target: "_blank",
  },
]

function links(props) {
  return (
    <Layout>
      <SEO
        title="KeelanJon Featured Links"
        description="Hi I'm Keelan, a Designer and Front End Developer. 
        I also like creating 3D illustrations, art and drinking lots of coffee."
      />
      <LinksPageHeader />

      {linksArray.map(function (item, index) {
        return (
          <a
            href={item.url}
            ariaLabel="This is a button link"
            target={item.target}
          >
            <LinkButton>{item.text}</LinkButton>
          </a>
        )
      })}
    </Layout>
  )
}

export default links

const LinkButton = styled.button`
  display: inline-block;
  padding: 1rem 1rem;
  margin: 0.5rem 0;
  width: 100%;
  border: 2px solid #fafafa;
  background: none;
  cursor: pointer;

  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: 4px;
  text-transform: uppercase;
  text-decoration: none;

  transition: 0.3s ease 0s;

  &:hover {
    background: #fafafa;
    color: #000;
  }
`
