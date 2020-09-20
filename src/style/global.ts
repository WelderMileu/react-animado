import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    *,
    html,
    #root {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        font-family: 'calibri', sans-serif;
        font-size: 1.2rem;
    }

    input,
    button {
        font-family: 'calibri', sans-serif;
        font-size: 1.2rem;
        display: inline-block;
    }
`;

export default Global;
