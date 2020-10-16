import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import styles from './Updates.module.css';
import { Link } from 'react-router-dom';


const Updates = (props) => {

    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");
    const [update, setUpdate] = useState("");
    const [errorMessage, setError] = useState("");

    const auth = useSelector(state => state.auth);

    const updateHandler = (e) => {

        e.preventDefault();
        //console.log(title, update);
        setError("");
        fetch('http://localhost:5000/protest/addUpdate/' + props.protestId, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + auth.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: update
            })
        })
            .then(res => {
                if (res.status === 500) {
                    return setError("server error occured try again");
                }
                setShowForm(false);
                setTitle("");
                setUpdate("");

            })
            .catch(err => {
                setShowForm(false);
                setError("server Error occured try again");
            });


    };

    return (
        <Fragment>


            <div className="container" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                <h4>Updates</h4>
                {!showForm && (
                    <Link onClick={() => setShowForm(true)} style={{ alignItems: 'right' }}>+ Add Update</Link>

                )}
                {errorMessage && (
                    <h6 className="container center">{errorMessage}</h6>
                )}
                {showForm && (
                    <form onSubmit={updateHandler} className="col s12 m8 l6 offset-m3 offset-l3">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    name="title"
                                    type="text"
                                    className="validate"
                                    onChange={e => {
                                        setTitle(e.target.value);
                                    }}
                                    value={title}
                                />
                                <label>Title</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea
                                    name="Update"
                                    className="materialize-textarea"
                                    onChange={e => {
                                        setUpdate(e.target.value);
                                    }}
                                    value={update}
                                ></textarea>
                                <label>Add Update</label>
                            </div>
                        </div>
                        <button className={styles.btn} type="submit" >Update</button>
                        <button className={styles.btnc} onClick={e => setShowForm(false)} >Close</button>

                    </form>
                )}
            </div>
            {props.updates.map(upd => {
                return (
                    <div className="container" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                        <h5>{upd.title}</h5>
                        <p>{upd.description}</p>
                        <h6>{upd.username}</h6>
                        <hr />
                    </div>
                );
            })}

        </Fragment>
    );
};

export default Updates;
