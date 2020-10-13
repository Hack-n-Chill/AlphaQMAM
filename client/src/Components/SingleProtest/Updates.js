import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CHANGE_LOADING_UPD } from '../../Actions/Types';

const Updates = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        // effect
        setTimeout(() => {
            dispatch({ type: CHANGE_LOADING_UPD, payload: { up: false, sp: false } });
        }, 1000);

    }, []);
    return (
        <Fragment>

            <div>world</div>

        </Fragment>
    );
};

export default Updates;
