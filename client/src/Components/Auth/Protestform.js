import React, { useState } from "react";
import styles from "./Protestform.module.css";

import moment from "moment";
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';
 
const Protestform = () => {
  const [organisation, setOrganisationName] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [location, setLocation] = useState();
  const [sTime,setStartTime]=useState('');
  const [eTime,setEndTime]=useState();
  
  
  const handleSubmit = (e)=> {
    var startTime=startDate+" "+sTime;
    var endTime=endDate+" "+eTime;
    const protestDetails = { organisation,  title, location, description ,startTime,endTime};
      e.preventDefault();
      console.log(protestDetails);
      fetch('http://localhost:5000/createprotest', {
        method: "POST",
        body: JSON.stringify(protestDetails),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
      (response) => (response.json())
        ).then((response)=> {
      if (response.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  return (
    <div className="container-fluid center">
      <div className="row" style={{ paddingLeft: "20%", paddingRight: "20%" }}>
        <h1>Register</h1>
        <form
          onSubmit={handleSubmit}
          className="col s12 m8 l6 offset-m3 offset-l3"
        >
          <div className="row">
            <div className="input-field col s12">
              {/* taking organisation name  input  */}
              <input
                name="organisationName"
                value={organisation ||''}
                onChange={(e) => setOrganisationName(e.target.value)}
                type="text"
                className="validate"
                required
              />
              <label htmlFor="organisation">Organisation Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              {/* taking title input  */}
              <input
                name="title"
                type="text"
                value={title ||''}
                onChange={(e) => setTitle(e.target.value)}
                className="validate"
                required
              />
              <label htmlFor="title">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              {/* taking description input  */}
              <input
                name="description"
                type="text"
                value={description ||''}
                onChange={(e) => setDescription(e.target.value)}
                className="validate"
                required
              />
              <label htmlFor="desciption">Description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              {/* taking date input  */}
              <Datetime   timeFormat={false} className="validate"
              onChange={(selectedDate)=>setStartDate(moment(selectedDate).format("YYYY-MM-DD"))} />
              { (!startDate) &&
              <label className="labl" htmlFor="startDate"> Start Date</label>
              }                
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              {/* taking start time input  */}
              <Datetime  dateFormat={false} 
              onChange={(selectedTime)=>setStartTime(moment(selectedTime).format("H:mm:ss "))} />
              { (!sTime) &&
              <label htmlFor="startTime">Start Time</label>
              }
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              {/* taking date input  */}
              <Datetime  dateFormat={false} 
              onChange={(selectedTime)=>setEndTime(moment(selectedTime).format("H:mm:ss "))} />
              { (!eTime) &&
              <label htmlFor="endTime">End Time</label>
              } 
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              {/* taking date input  */}
              <Datetime  timeFormat={false} 
              onChange={(selectedDate)=>setEndDate(moment(selectedDate).format("YYYY-MM-DD"))} />
              {(!endDate) &&

                 <label htmlFor="endDate">End Date</label>
              }
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              {/* taking location input  */}
              <input
                type="text"
                name="location"
                value={location ||''}
                onChange={(e) => setLocation(e.target.value)}
                className="validate"
                required
              />
              <label htmlFor="Location">Location</label>
            </div>
          </div>

          <button type="submit" className={styles.btn}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Protestform;
