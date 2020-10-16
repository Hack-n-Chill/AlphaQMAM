import React, { Fragment } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//import { CHANGE_LOADING_DESC } from '../../Actions/Types';


const Description = (props) => {
    //Single Protest



    return (
        <Fragment>
            {
                props.protest !== null ?
                    <div className="row" style={{ paddingTop: '5%' }}>
                        <div className="col s12 offset-m2 m8">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title"><h1>{props.protest.title}</h1></span>
                                    <p>{props.protest.description}</p>
                                    <br />
                                    <p>{props.protest.organisation}   |   SignupCount-{props.sCount}  |  PresentCount-{props.pCount}</p><br />
                                    <p>Start-Time:{props.protest.startTime}</p><br />
                                    <p>End-Time:{props.protest.endTime}</p>
                                </div>

                                <div className="card-action">
                                    {(props.signup || props.status === 'Closed') ?
                                        <Link onClick={(e) => e.preventDefault()} style={{ cursor: 'default', color: 'grey' }}>Thanks for Signing Up!</Link> :

                                        <Link onClick={() => { props.changeSignup(true); }}>Signup</Link>
                                    }

                                    {!props.present && (
                                        <Fragment>

                                            {
                                                props.status === 'Active' ?
                                                    <Link onClick={() => { props.changePresent(true); }}>Mark yourself Present</Link> :
                                                    <Link onClick={(e) => e.preventDefault()} style={{ cursor: 'default', color: 'grey' }}>
                                                        {props.status}
                                                    </Link>
                                            }

                                        </Fragment>

                                    )


                                    }




                                </div>
                            </div>
                        </div>
                    </div>

                    : <div></div>
            }
        </Fragment>

    );
};

export default Description;
