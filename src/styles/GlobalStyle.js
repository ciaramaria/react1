import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        user-select: none;
        background-color: #1c1c1c;
        font-family: Georgia, 'Times New Roman', Times, serif;
        color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #11173d;
        height: 100vh;
    }
    img {
        max-width: 100%;
        height: auto;
    }    
`;


export default GlobalStyle;