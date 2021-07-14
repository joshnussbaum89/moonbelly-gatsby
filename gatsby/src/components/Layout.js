import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Layout({ children, data }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Nav data={data} />
      {children}
      <Footer />
    </div>
  );
}
