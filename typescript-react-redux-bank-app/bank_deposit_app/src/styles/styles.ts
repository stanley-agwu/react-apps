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

export const Wrapper = styled.div`
    border: 1px solid #4a4643;
    border-radius: 0.5rem;
    background: #f7ccbd;
    margin: 2rem;
    padding: 1rem 2rem;
    height: auto;

    h1 {
        margin: 0;
    }
    h2 {
        margin: 1rem 0 1rem 8rem;
    }
`;

export const Container = styled.div`
    display: flex;
    width: 20rem;
    justify-content: flex-end;
    margin: 0.5rem;

    input {
        width: 12rem;
        height: 1.5rem;
    }

    button {
        width: 8rem;
        min-height: 1.5rem;
    }
`;