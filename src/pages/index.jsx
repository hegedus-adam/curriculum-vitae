import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation } from '../components/navigation/navigation';
import { Contact } from '../components/contact/contact';
import '../styles/index.scss';

export const Home = () => (
    <>
        <Helmet>
            <title>Adam Hegedus - Lead Software Engineer</title>
            <meta charSet="utf-8" />
            <meta name="description" content="Adam Hegedus, Senior Software Engineer"></meta>
            <link rel="canonical" href="https://hegedus-adam.github.io/"></link>
        </Helmet>
        <Navigation></Navigation>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>Adam Hegedus - Lead Software Engineer.</p>
                    <Contact></Contact>
                </div>
            </div>
        </div>
    </>
);

export default Home;
