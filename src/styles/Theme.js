import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  dark: {
    // primaryColor: "#0E0E16",
    primaryColor: "#000000",
    secondaryColor: "#F5F5F5",
    purple: "purple",
  },

  light: {
    primaryColor: "#F5F5F5",
    secondaryColor: "#0E0E16",
  },
  fonts: ["Open Sans, sans-serif"],
  fontSizes: {
    small: ".8rem",
    medium: "2rem",
    large: "3.8vw",
    bodyText: "1.2rem",
  },
  screenDimensions: {
    mobile: "720px",
    tablet: "1280px",
    desktop: "1440px",
  },
}

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
