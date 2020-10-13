import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { CHANGE_LOADING_DESC } from '../../Actions/Types';


const Description = (props) => {
    //Single Protest
    const [protest, setProtest] = useState(null);

    const [error, setError] = useState(false);

    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        //get single Protest
        // const protestId = props.match.params.protestId;
        // fetch('http://localhost:5000/' + protestId)
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(resData => {
        //         if (resData.status === 500) {
        //             return setError(true);
        //         }
        //         setProtest({ protest: resData.protest });
        //         dispatch({ type: CHANGE_LOADING_DESC, payload: { desc: false, sp: false } });
        //     })
        //     .catch(err => {
        //         setError(true);
        //         dispatch({ type: CHANGE_LOADING_DESC, payload: { desc: false, sp: false } });

        //     });
        setTimeout(() => {
            dispatch({ type: CHANGE_LOADING_DESC, payload: { desc: false, sp: false } });
        }, 2000);
    }, []);
    return (
        <Fragment>
            {loading.descLoading && (
                <div style={{ marginLeft: '43%', marginTop: '17%' }} className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            )}
            {!loading.descLoading && (
                <div className="row" style={{ paddingTop: '5%' }}>
                    <div className="col s12 offset-m2 m8">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title"><h1>Protest Title</h1></span>
                                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                                <br />
                                <p>Organization Name   |   SignupCount-10</p>

                                MAp
                            </div>

                            <div className="card-action">
                                <Link>SignUP</Link>
                                <Link> Get Updates</Link>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </Fragment>
    );
};

export default Description;
