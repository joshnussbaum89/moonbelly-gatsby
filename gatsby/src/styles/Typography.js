import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Elsie:wght@400;900&family=Encode+Sans+Expanded:wght@100;200;300;400;500;600;700;800;900&display=swap');

    html {
        font-family: 'Encode Sans Expanded', sans-serif;
        font-weight: 100;
    }
    
    h1, h2, h3 {
        color: var(--darkPurple);
        font-weight: 200;
    }
    a {
        text-decoration: none;
    }
`;

export default Typography;
