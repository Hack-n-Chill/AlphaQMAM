import React,{useEffect} from "react"; 
import styles from "./Protestform.module.css";
import M from 'materialize-css';
const Protestform=() => {
    useEffect(() => {
        //effect
        var elems = document.querySelectorAll('.datepicker');
         M.Datepicker.init(elems);
    }, []);
    return(
        <div className="container-fluid center">
        <div className="row" style={{ paddingLeft: '20%', paddingRight: '20%' }}>
            <h1>Register</h1>
            <form className="col s12 m8 l6 offset-m3 offset-l3">
                <div className="row">
                    <div className="input-field col s12">
                        {/* taking organisation name  input  */}
                        <input name="organisationName" type="text" className="validate" />
                        <label htmlFor="organisationName">Organisation Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        {/* taking title input  */}
                        <input name="title" type="text" className="validate" />
                        <label htmlFor="title">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        {/* taking description input  */}
                        <input name="desciption" type="text" className="validate" />
                        <label htmlFor="desciption">Desciption</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        {/* taking date input  */}
                    <input type="text" name="date" className="datepicker"/>
                    <label htmlFor="Date">Date</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                     {/* taking location input  */}
                    <input type="text" name="location" className="validate"/>
                    <label htmlFor="Location">Location</label>
                    </div>
                </div>
                 
                <button className={styles.btn}>Register</button>

            </form>
        </div>
    </div>
    ); 
}; 

export default Protestform;