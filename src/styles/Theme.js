import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  dark: {
    primaryColor: "#0E0E16",
    secondaryColor: "#F5F5F5",
    purple: "purple",
  },

  light: {
    primaryColor: "#F5F5F5",
    secondaryColor: "#0E0E16",
  },
  fonts: ["Open Sans, sans-serif"],
  fontSizes: {
    small: ".865rem",
    medium: "2rem",
    large: "3.8vw",
  },
  screenDimensions: {
    mobile: "640px",
    tablet: "962px",
    desktop: "1024px",
  },
}

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
