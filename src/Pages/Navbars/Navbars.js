import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'

const Navbars = () => {
    return (
        <div className='sticky'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                    <Link to='/'>
                        <img
                            src={logo}
                            className="mr-3 h-6 sm:h-9 rounded-2xl hover:shadow-lg "
                            alt=""
                        />
                        
                    </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    
                    <Link to='/' active='true'>
                        Home
                    </Link>
                   
                    <Link to='/Blog'>
                    Blog
                    </Link>
                    <Link to='/Login'>
                        Login
                    </Link>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navbars;