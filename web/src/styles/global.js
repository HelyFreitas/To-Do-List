import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html{
        width: 100%;
        height: 100vh;
        font-family: Arial, Helvetica, sans-serif;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    #root{
        width: 100%;
    }
`;

export default GlobalStyle;
