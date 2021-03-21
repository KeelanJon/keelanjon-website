import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap');
    html,*{  
        margin: 0;
        padding: 0; 
        
        color: #fff;
        font-family: 'Inter', sans-serif;
    }
    body{
        background: #131419;
    }
`

export default GlobalStyle
