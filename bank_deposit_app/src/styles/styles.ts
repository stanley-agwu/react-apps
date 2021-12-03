import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0 1.25rem;
        display: flex;
        justify-content: center;
        font-family: 'Montserrat', 'Raleway', sans-serif;
    }
`;