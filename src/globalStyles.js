import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
    html,*{  
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
        
        color: #fff;
        font-family: 'Inter', sans-serif;
        scroll-behavior: smooth;

    }
    body{
        background: ${props => props.theme.dark.primaryColor};
    }
    p{
        font-weight: 300;
        padding: 1.5rem 0;
        line-height: 2.2rem;
    }
    h4{
        text-transform: uppercase;
        font-weight: 300;
        font-size: ${props => props.theme.fontSizes.small};
        letter-spacing: 1px;
        padding: 1.5rem 0;
    }
`

export default GlobalStyle
