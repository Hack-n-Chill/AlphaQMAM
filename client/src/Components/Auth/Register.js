import React, { useEffect } from 'react';
import M from 'materialize-css';
import styles from './Register.module.css';

const Register = () => {
    useEffect(() => {
        //effect
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);

    }, []);
    return (
        <div className="container-fluid center">
            <div className="row" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
                <h1>Register</h1>
                <form className="col s12 m8 l6 offset-m3 offset-l3">
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="username" type="text" className="validate" />
                            <label for="username">Username</label>
                        </div>
                    </div>
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
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="number" type="text" className="validate" />
                            <label for="number">Phone number</label>
                        </div>
                    </div>
                    <div className="input-field col s12">
                        <select>
                            <option value="" disabled selected>None</option>
                            <option value="1">Student</option>
                            <option value="2">Teacher</option>

                        </select>
                        <label>Choose Category</label>
                    </div>
                    <button className={styles.btn}>Register</button>

                </form>
            </div>
        </div>
    );
};

export default Register;
