import React from 'react';
import 'normalize.css';
import Hero from '../components/Hero';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Hero />
      {children}
      <Footer />
    </div>
  );
}
