import React, { useState, useEffect, Fragment } from 'react';

const Description = (props) => {
    //Single Protest
    const [protest, setProtest] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        //get single Protest
        const protestId = props.match.params.protestId;
        fetch('http://localhost:5000/' + protestId)
            .then(res => {
                return res.json();
            })
            .then(resData => {
                if (resData.status === 500) {
                    return setError(true);
                }
                setProtest({ protest: resData.protest });
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
            });
    }, []);
    return (
        <Fragment>

        </Fragment>
    );
};

export default Description;
