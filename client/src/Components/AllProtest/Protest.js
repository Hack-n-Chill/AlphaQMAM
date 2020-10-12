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
                <div style={{ marginLeft: '43%', marginTop: '17%' }} class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            )}
            {!loading && (
                <div>
                    {protests.map(protest => {
                        return (

                            <div class="row">
                                <div class="col s12 offset-m3 m6">
                                    <div class="card blue-grey darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title">{protest.Title}</span>
                                            <p>{protest.description}</p>
                                        </div>
                                        <div class="card-action">
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
