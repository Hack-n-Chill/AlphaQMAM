import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    //TODO Login Functionalities
    return (
        <div className="container-fluid center">
            <div className="row" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
                <h1>Login</h1>
                <form className="col s12 m8 l6 offset-m3 offset-l3">
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="password" type="password" className="validate" />
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <button className={styles.btn}>Login</button>

                </form>
            </div>
        </div>
    );
};

export default Login;
