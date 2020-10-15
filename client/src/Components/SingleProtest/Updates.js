import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';


const Updates = (props) => {

    return (
        <Fragment>


            <div className="container" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                <h4>Updates</h4>
                <Link to="/" style={{ alignItems: 'right' }}>+ Add Update</Link>
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
