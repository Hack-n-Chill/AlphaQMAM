import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

const Navbar = () => {
    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

    }, []);
    logoutHandler = () => {
        localStorage.removeItem('present');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('token');
        localStorage.removeItem('protestId');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
      };
    return (
        <div>
            <nav>
                <div className="nav-wrapper white">
                    <a href="/" className="brand-logo"><span style={{ color: 'black', marginLeft: '5px' }}>Codemon</span></a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger "><i className="material-icons"><span style={{ color: 'black' }}>menu</span></i></a>
                    <ul className="right hide-on-med-and-down">


                        {/* All protests */}
                        <li><Link to="/all-protests"><span style={{ color: 'black' }}>All Protests</span></Link></li>

                        {/* Signed-up protests */}
                        <li><Link to="/protests/:userId"><span style={{ color: 'black' }}>My Protests</span></Link></li>

                        {/* Login users */}
                        <li><Link to="/login"><span style={{ color: 'black' }}>Login</span></Link></li>

                        {/* Sign-up new users */}
                        <li><Link to="/signup"><span style={{ color: 'black' }}>Signup</span></Link></li>

                        {/* Register protests */}
                        <li><Link to="/createprotest"><span style={{ color: 'black' }}>Create</span></Link></li>

                        {/* Logout users */}
                        <li><Link to="/logout"><span style={{ color: 'black' }}>Logout</span></Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/all-protests">All Protests</Link></li>
                <li><Link to="/protest/:userId">All Protests</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/dashboard"><span style={{ color: 'black' }}>Dashboard</span></Link></li>
                <li><Link to="/logout" onClick={logoutHandler}><span style={{ color: 'black' }}>Logout</span></Link></li>

            </ul>
        </div>
    );
};

export default Navbar;