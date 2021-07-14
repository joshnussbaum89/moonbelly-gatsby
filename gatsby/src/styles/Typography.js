import { createGlobalStyle } from 'styled-components';
import berkshireFont from '../assets/fonts/Berkshire_Swash/BerkshireSwash-Regular.ttf';
import libreFont from '../assets/fonts/Libre_Franklin/LibreFranklin-VariableFont_wght.ttf';

const Typography = createGlobalStyle`
    ${'' /* Berkshire */}
    @font-face {
        font-family: Berkshire;
        src: url(${berkshireFont});
    }
    ${'' /* Libre Franklin */}
    @font-face {
        font-family: LibreFranklin;
        src: url(${libreFont});
    } 
    
    body {
        font-family: LibreFranklin, Arial, Helvetica, sans-serif;
        font-weight: 300;
    }

    h1, h2, h3 {
        color: var(--darkPurple);
        font-family: BerkShire, Arial, Helvetica, sans-serif;
    }

    h2 {
        font-size: var(--large);
    }
    
    a {
        transition: .2s;
        text-decoration: none;
    }
`;

export default Typography;
