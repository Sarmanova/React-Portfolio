import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home'
function Pages() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer/>
        </div>
    )
}

export default Pages;