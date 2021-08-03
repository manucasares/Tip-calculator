import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Space Mono', monospace;
    }
    
    body {
        overflow-x: hidden;
        background: hsl(185, 41%, 84%);
        padding: 1.3rem 0;
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }
`