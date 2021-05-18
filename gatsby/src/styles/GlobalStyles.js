import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        ${'' /* Colors */}
        --darkPurple: #3b3863;
        --mint: #b6f3d1;
        --purple: #b4abf5;
        --pink: #FAEAF7;
        --cream: #f8f7f4;
        --peach: #FEE4D3;
        ${'' /* Font sizes */}
        --small: 1rem;
        --medium: 1.25rem;
        --large: 2rem;
        --extraLarge: 6rem;
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
    h1, h2, h3, h4, ul {
        margin: 0;
        padding: 0;
    }

    @media (min-width: 768px) {
        body {
            margin: 0;
        }
    }
`;

export default GlobalStyles;
