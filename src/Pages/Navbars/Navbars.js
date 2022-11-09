import { Navbar } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { AuthContext } from '../../context/UseContext';

const Navbars = () => {
    const { logout, users } = useContext(AuthContext);


    const handlelogut = () => {
        logout()
            .then(() => {

            }).catch((error) => console.log('error', error.message))
    }

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
                    {users?.email && <Link to='/AddReview'>Add Review</Link>}
                    {users?.email && <Link>My services</Link>}
                    {users?.email ? (



                        <Link onClick={handlelogut}>
                            Logout
                        </Link>

                    ) :
                        (

                            <Link to='/Login'>
                                Login
                            </Link>
                        )}



                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default Navbars;