import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { CHANGE_LOADING_DESC, CHANGE_LOADING_SP, CHANGE_LOADING_UPD } from '../Actions/Types';
import Description from '../Components/SingleProtest/Description';
import Updates from '../Components/SingleProtest/Updates';


const SingleProtest = () => {
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        //effect
        console.log(loading);

        if (!loading.descLoading && !loading.updateLoading) {
            dispatch({ type: CHANGE_LOADING_SP });
        }

    }, [loading.descLoading, loading.updateLoading]);


    return (
        <div>


            <Description />
            <Updates />


        </div>
    );
};

export default SingleProtest;
