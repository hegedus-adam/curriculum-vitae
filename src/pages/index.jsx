import React from 'react';
import { Navigation } from '../components/navigation/navigation';
import { Contact } from '../components/contact/contact';
import '../styles/index.scss';

export default function Home() {
    return (
        <>
            <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>Lorem ipsum dolor set sit amet.</p>
                        <Contact></Contact>
                    </div>
                </div>
            </div>
        </>
    );
}
