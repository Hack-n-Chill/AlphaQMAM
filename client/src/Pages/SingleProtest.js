import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


// import { CHANGE_LOADING_DESC, CHANGE_LOADING_SP, CHANGE_LOADING_UPD } from '../Actions/Types';
import Description from '../Components/SingleProtest/Description';
import Updates from '../Components/SingleProtest/Updates';


const SingleProtest = () => {
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     //effect
    //     console.log(loading);

    //     if (!loading.descLoading && !loading.updateLoading) {
    //         dispatch({ type: CHANGE_LOADING_SP });
    //     }

    // }, [loading.descLoading, loading.updateLoading]);


    return (
        <div>

            {(loading.descLoading || loading.updateLoading) ? (

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
            ) :

                <Fragment>
                    <Description />
                    <Updates />

                </Fragment>
            }



        </div>
    );
};

export default SingleProtest;
