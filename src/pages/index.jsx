import React from 'react';
import { SEO, Navigation, Contact } from '../components';
import '../styles/index.scss';

export const Home = () => (
  <>
    <SEO />
    <Navigation />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>Adam Hegedus - Lead Software Engineer.</p>
          <Contact />
        </div>
      </div>
    </div>
  </>
);

export default Home;
