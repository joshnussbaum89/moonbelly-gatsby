import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        ${'' /* Colors */}
        --darkPurple: #3b3863;
        --mint: #b6f3d1;
        --purple: #b4abf5;
        --purpleLight: #b4abf536;
        --purpleTransparent: #b4abf5fb;
        --pink: #FAEAF7;
        --pinkError: #ff00d0;
        --cream: #f8f7f4;
        --peach: #FEE4D3;
        ${'' /* Font sizes */}
        --small: 1rem;
        --medium: 1.25rem;
        --large: 2rem;
        --extraLarge: 6rem;
        --variablePostTitle: clamp(2rem, 6rem, 10vw);
        ${'' /* shadows */}
        --headerShadow: 1px 1px 0 black;
        ${'' /* TODO: add screen width variables */}
    }

    html {
        color: var(--darkPurple);
        background: var(--cream);
    }

    body {
        margin: 0 1rem;
        color: var(--darkPurple);
    }
    a {
        color: var(--darkPurple);
    }

    @media (min-width: 900px) {
        body {
            margin: 0;
        }
    }
`;

export default GlobalStyles;
