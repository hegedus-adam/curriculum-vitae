import React from 'react';
import { SEO, Navigation, Contact } from '../components';
import '../styles/index.scss';

export const Home = () => (
    <React.Fragment>
        <SEO></SEO>
        <Navigation></Navigation>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>Adam Hegedus - Lead Software Engineer.</p>
                    <Contact></Contact>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default Home;
