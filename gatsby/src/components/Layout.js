import React from 'react';
import 'normalize.css';
import Nav from '../components/Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
