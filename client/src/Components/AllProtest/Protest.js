import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';


const Protest = () => {


    //Protest info
    const [protests, setProtests] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // Getting info about all protests
        fetch('URL')
            .then(res => {
                return res.json();
            })
            .then(resData => {
                setProtests({ protests: resData.protests });
                setLoading(false);
            })
            .catch(err => {
                //error in retrieving data

            });


    }, []);



    //TODO add pagination
    return (
        <Fragment>

            {loading && (
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
            {!loading && (
                <div>
                    {protests.map(protest => {
                        return (

                            <div className="row">
                                <h1 style={{ marginLeft: '45%', marginBottom: '5%' }}>Raise Your Voice and Awareness</h1>
                                <div className="col s12 offset-m3 m6">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                            <span className="card-title">{protest.Title}</span>
                                            <p>{protest.description}</p>
                                        </div>
                                        <div className="card-action">
                                            <Link to={`/lists/${protest._id}`} >Know More</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </Fragment>


    );
};

export default Protest;
