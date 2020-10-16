import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';


const Navbar = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const userId = useSelector(state => state.auth.userId);
    const present = localStorage.getItem('present') || false;
    const protestId = localStorage.getItem('protestId') || null;
    const history = useHistory();
    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

    }, []);
    const logoutHandler = () => {
        localStorage.removeItem('present');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('token');
        localStorage.removeItem('protestId');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        history.replace('/');
    };
    return (
        <div>
            <nav>
                <div className="nav-wrapper white">
                    <a href="/" className="brand-logo"><span style={{ color: 'black', marginLeft: '5px' }}>Safe Protests</span></a>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger "><i className="material-icons"><span style={{ color: 'black' }}>menu</span></i></a>
                    <ul className="right hide-on-med-and-down">
                        {/* Help Button  */}
                        <li> <button ></button> </li>

                        {/* All protests */}
                        <li><Link to="/all-protests"><span style={{ color: 'black' }}>All Protests</span></Link></li>

                        {/* Signed-up protests */}
                        {isAuth && (

                            <li><Link to={`/protest/${userId}`}><span style={{ color: 'black' }}>My Protests</span></Link></li>

                        )}

                        {/* Login users */}
                        {!isAuth && (

                            <li><Link to="/login"><span style={{ color: 'black' }}>Login</span></Link></li>
                        )}

                        {/* Sign-up new users */}
                        {!isAuth && (

                            <li><Link to="/signup"><span style={{ color: 'black' }}>Signup</span></Link></li>
                        )}

                        {/* Register protests */}

                        {isAuth && (

                            <li><Link to="/createprotest"><span style={{ color: 'black' }}>Create</span></Link></li>
                        )}

                        {/* Logout users */}
                        {isAuth && (

                            <li><Link onClick={logoutHandler}><span style={{ color: 'black' }}>Logout</span></Link></li>
                        )}
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/all-protests">All Protests</Link></li>
                {isAuth && (

                    <li><Link to={`/protest/${userId}`}>My Protests</Link></li>
                )}
                {!isAuth && (

                    <li><Link to="/login">Login</Link></li>
                )}
                {!isAuth && (

                    <li><Link to="/signup">Signup</Link></li>
                )}
                {isAuth && (

                    <li><Link to="/createprotest">Create</Link></li>
                )}
                {isAuth && (

                    <li><Link onClick={logoutHandler} ><span style={{ color: 'black' }}>Logout</span></Link></li>
                )}

            </ul>
        </div>
    );
};

export default Navbar;