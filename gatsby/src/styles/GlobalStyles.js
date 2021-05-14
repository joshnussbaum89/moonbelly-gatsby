import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        ${'' /* Colors */}
        --darkPurple: #3b3863;
        --mint: #b6f3d1;
        --purple: #b4abf5;
        --pink: #faf4f7;
        ${'' /* Font sizes */}
        --small: 1rem;
        --medium: 1.25rem;
        --large: 2rem;
        --extraLarge: 6rem;
    }

    html {
        color: var(--darkPurple);
        background: var(--pink);
    }

    body {
        margin: 0 2rem;
        color: var(--darkPurple);

    }

    h1, h2, h3, h4, ul {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
