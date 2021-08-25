import React from 'react'

const styles = {
    heading: {
        justifyContent: "flex-end",
        marginBottom: '35px'
    },
 
    navtabs: {
        justifyContent: 'flex-end',
        marginBottom: '35px',
        float: 'right'
    }
};

function Navbar({ currentPage, handlePageChange }) {
    return (
        <div className="navbar_toolbar" >
            <h1 className="logoName" style={{ display: 'inline-block' }} > Zhansaya Sarmanova </h1>
                 <ul className="nav nav-tabs navbar " style={styles.navtabs} >
             <li className="nav-item" >
            < a href="#about"
      onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
            About Me </a> </li>
            <li className="nav-item" >
          <a href="#projects" onClick={() => handlePageChange('Projects')}
             className={currentPage === 'Projects' ?'nav-link active' :'nav-link'} >
                    Projects </a> </li>
            <li className="nav-item" >
                < a href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ?'nav-link active' :'nav-link'} >
                    Contact Me </a> </li>
            <li className="nav-item" >
                < a href="#resume" onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ?'nav-link active' :'nav-link'} >
                    Resume </a>
            </li>
        </ul>
    </div>
    );
}
export default Navbar;