import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import PageHeader from "../components/PageHeader"
import Layout from "../components/Layout"

function store(props) {
  // const products = props.data.products

  return (
    <Layout>
      <PageHeader
        header="Store"
        subheader="Premium"
        buttonURL="#products"
        description=""
      />
      {/* <ProductGallery id="products">
        {products.edges.map(function (product) {
          let { productName, productCategory, id, productLink } = product.node
          let productImage = getImage(product.node.productImage)
          let productDesc =
            product.node.productDescription.childMarkdownRemark.excerpt

          return (
            <ProductCard>
              <a href={productLink}>
                <GatsbyImage image={productImage} className="product-image" />
              </a>
              <a href={productLink}>
                <h3 className="product-title">{productName}</h3>
                <p>{productDesc}</p>
              </a>
              <CategoryLabel>{productCategory}</CategoryLabel>
            </ProductCard>
          )
        })}
      </ProductGallery> */}
    </Layout>
  )
}

export default store

// export const query = graphql`
//   query {
//     products: allContentfulStoreProducts {
//       edges {
//         node {
//           id
//           productCategory
//           productName
//           productLink
//           productImage {
//             gatsbyImageData(
//               placeholder: BLURRED
//               formats: [AUTO, WEBP]
//               quality: 100
//             )
//           }
//           productDescription {
//             id
//             childMarkdownRemark {
//               rawMarkdownBody
//               excerpt
//             }
//           }
//         }
//       }
//     }
//   }
// `

const ProductGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;

  @media screen and (max-width: ${props =>
      props.theme.screenDimensions.mobile}) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  transition: 0.3s ease 0s;

  a,
  h3,
  p {
    text-decoration: none;
  }
  .product-image {
    display: inline-block;
    width: 100%;
    height: 25vw;
    object-fit: cover;

    @media screen and (max-width: ${props =>
        props.theme.screenDimensions.mobile}) {
      height: 30vh;
    }
  }

  .product-title {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1.5rem 0 0 0;
    text-decoration: none;
  }

  p {
    width: 100%;
    padding: 0;
    font-weight: 300;
    text-decoration: none;
    padding: 1rem 0;
  }

  &:hover {
    transform: translateY(-10px);

    ${CategoryLabel} {
    }
  }
`

const CategoryLabel = styled.div`
  display: inline-block;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 300;
  letter-spacing: 0.2rem;

  background: #000000;
  border: 1px solid #3e3e3e;
  padding: 0.5rem 0.8rem;
  margin: 1rem 0;

  transition: 0.6s ease 0s;

  &:hover {
    background: #fff;
    color: #000;
  }
`
