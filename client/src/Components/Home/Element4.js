import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Binary from "../../Images/Binary.jpg";
import "./Element4.css";

const Element4 = () => {
    return (
        <div>
            <div className=" Element4 container-fluid row">
                <div className="col s12 l6">
                    <h2 className="Heading4"><span className="title">Coding is learned with practice.</span><br />And videos. And blogs.</h2>
                    <p className="text4">We focus on things that really work and bring them to you, clearing away all the internet clutter from you. Watch the best courses, learn from your mistakes while practicing, and read about technology a lot.
                </p>
                    <br />
                    <div className="position4">
                        <button className="waves-effect waves-light btn btn4">Explore</button>
                    </div>
                </div>
                <div className="col s12 l6 pull-l1 center">
                    <img className="fit" src={Binary} alt="Element4" />
                </div>
            </div>
        </div>

    );
};


export default Element4;