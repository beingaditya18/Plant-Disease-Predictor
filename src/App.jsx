import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import './i18n';

export const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
};
