import React, { useState } from "react";
// import axios from "axios"
export default function RegForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone:"",
    place:"",
    district:"",
    state:"",
    role:"",
    date:"",
    jdate:"",
    exp:"",
    password:""

  });
  function handleChange  (e){
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
        name: state.name,
        email: state.email,
        password:state.password,
        address:state.address
    }
   
  }
  return(
    <>
    <div className="container d-flex min-vh-100 justify-content-center align-items-center ">
    <form onsubmit={handleSubmit}>
        
        <div className="mb-3">
        <label htmlFor="name"className="form-label">Name</label>
            <input type="text" className="form-control" id="name"   value={state.name}
            onChange={handleChange}/>
          </div>
        <div class="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email"  value={state.email}
            onChange={handleChange}/>
        </div>
        <div class="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="phone"  value={state.phone}
            onChange={handleChange}/>
          </div>
        <div class="mb-3">
          <label htmlFor="place" className="form-label">Place</label>
          <input type="text" className="form-control" id="place"  value={state.place}
            onChange={handleChange} />
        </div>
        <div class="mb-3">
            <label htmlFor="district" class="form-label">District</label>
            <input type="text" class="form-control" id="district"/>
          </div>
        <div class="mb-3">
            <label htmlFor="state" className="form-label">State</label>
            <input type="text" className="form-control" id="state"  value={state.state}
            onChange={handleChange}/>
          </div>
          <div class="mb-3">
            <label for="role" class="form-label">Post</label>
            <input type="text" class="form-control" id="role" value={state.role}
            onChange={handleChange} />
          </div>
          <div class="mb-3">
            <label for="Dateofbirth" className="form-label">Date of birth</label>
            <input type="text" className="form-control" id="date" value={state.date}
            onChange={handleChange}/>
          </div>
          <div class="mb-3">
            <label htmlFor="jdate" className="form-label">Join Date</label>
            <input type="text" className="form-control" id="jdate" value={state.jdate}
            onChange={handleChange}/>
          </div>
          <div class="mb-3">
            <label htmlFor="exp" className="form-label">Experience</label>
            <input type="text" className="form-control" id="exp" value={state.exp}
            onChange={handleChange}/>
          </div>
          <div class="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={state.password}
            onChange={handleChange} />
          </div>
        <input type="Submit" value="Submit"/>
      </form>  
      </div>

      </>
  );
};
