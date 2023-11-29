// import React, { useState} from "react";
// import axios from "axios"
// export default function RegForm() {
//   const [state, setState] = useState({
//     name: "",
//     email: "",
//     phone:"",
//     place:"",
//     district:"",
//     state:"",
//     role:"",
//     date:"",
//     jdate:"",
//     exp:"",
//     password:""

//   });
//   const handleChange = (e) => {

//     const value = e.target.value;
//     setState({
//       ...state,
//       [e.target.name]: value
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//         name: state.name,
//         email: state.email,
//         phone:state.place,
//     place:state.place,
//     district:state.district,
//     state:state.state,
//     role:state.role,
//     date:state.date,
//     jdate:state.jdate,
//     exp:state.exp,
//         password:state.password,
        
//     }
//     axios.post(`http://localhost:3000/api/register`, userData).then((response) => {
      
//     console.log(response.status, response.data);
//     });
//   };
   
  
//   return(
//     <>
//     <div className="container d-flex min-vh-100 justify-content-center align-items-center ">
//     <form onSubmit={handleSubmit}>
        
//         <div className="mb-3">
//         <label htmlFor="name" className="form-label">Name</label>
//             <input type="text" className="form-control" id="name"   value={state.name}
// />
//           </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="email"  value={state.email}
//             onChange={handleChange}/>
//         </div>
//         <div className="mb-3">
//             <label htmlFor="phone" className="form-label">Phone</label>
//             <input type="text" className="form-control" id="phone"  value={state.phone}
//             onChange={handleChange}/>
//           </div>
//         <div className="mb-3">
//           <label htmlFor="place" className="form-label">Place</label>
//           <input type="text" className="form-control" id="place"  value={state.place}
//             onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//             <label htmlFor="district" className="form-label">District</label>
//             <input type="text" className="form-control" id="district"/>
//           </div>
//         <div className="mb-3">
//             <label htmlFor="state" className="form-label">State</label>
//             <input type="text" className="form-control" id="state"  value={state.state}
//             onChange={handleChange}/>
//           </div>
//           <div className="mb-3">
//             <label for="role" className="form-label">Post</label>
//             <input type="text" className="form-control" id="role" value={state.role}
//             onChange={handleChange} />
//           </div>
//           <div className="mb-3">
//             <label for="Dateofbirth" className="form-label">Date of birth</label>
//             <input type="text" className="form-control" id="date" value={state.date}
//             onChange={handleChange}/>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="jdate" className="form-label">Join Date</label>
//             <input type="text" className="form-control" id="jdate" value={state.jdate}
//             onChange={handleChange}/>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exp" className="form-label">Experience</label>
//             <input type="text" className="form-control" id="exp" value={state.exp}
//             onChange={handleChange}/>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input type="password" className="form-control" id="password" value={state.password}
//             onChange={handleChange} />
//           </div>
//         <input type="Submit" value="Submit"/>
//       </form>  
//       </div>

//       </>
//   );
// };














import React, { useRef} from "react";
import axios from "axios"
export default function RegForm() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  
  const phoneInputRef =useRef(null);
  const placeInputRef =useRef(null);
  const districtInputRef=useRef(null);
  const stateInputRef=useRef(null);
  const roleInputRef=useRef(null);
  const  dateInputRef=useRef(null);
  const  jdateInputRef=useRef(null);
  const expInputRef=useRef(null);

  const passwordInputRef = useRef(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const phone=phoneInputRef.current.value;
    const place=placeInputRef.current.value;
    const district=districtInputRef.current.value;
    const  state=stateInputRef.current.value;
    const role=roleInputRef.current.value;
    const date=dateInputRef.current.value;
    const jdate=jdateInputRef.current.value;
    const exp=expInputRef.current.value;
    const password = passwordInputRef.current.value;
    
    // nameInputRef.current.value = '';
    // emailInputRef.current.value = '';
    // phoneInputRef.current.value='';
    // passwordInputRef.current.value = '';
    const userData={name,email,phone,place,district,state,role,date,jdate,exp,password}
    console.log(userData)
axios.post(`http://localhost:3000/api/register`,userData)
.then ((response)=>{
   console.log(response.data)
})
.catch((error)=>{
  console.log("get eror:",error.message? error.message:error)

})
    
  };
  
  return(
    <>
    <div className="container d-flex min-vh-100 justify-content-center align-items-center ">
    <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name"   ref={nameInputRef}/>
          </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email"  ref={emailInputRef}/>
        </div>
        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="phone"  ref={phoneInputRef}/>
          </div>
        <div className="mb-3">
          <label htmlFor="place" className="form-label">Place</label>
          <input type="text" className="form-control" id="place"  ref={placeInputRef} />
        </div>
        <div className="mb-3">
            <label htmlFor="district" className="form-label">District</label>
            <input type="text" className="form-control" id="district" ref={districtInputRef}/>
          </div>
        <div className="mb-3">
            <label htmlFor="state" className="form-label">State</label>
            <input type="text" className="form-control" id="state" ref={stateInputRef}/>
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Post</label>
            <input type="text" className="form-control" id="role" ref={roleInputRef}/>
          </div>
          <div className="mb-3">
            <label htmlFor="Dateofbirth" className="form-label">Date of birth</label>
            <input type="text" className="form-control" id="date" ref={dateInputRef}/>
          </div>
          <div className="mb-3">
            <label htmlFor="jdate" className="form-label">Join Date</label>
            <input type="text" className="form-control" id="jdate" ref={jdateInputRef}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exp" className="form-label">Experience</label>
            <input type="text" className="form-control" id="exp" ref={expInputRef}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" ref={passwordInputRef}  />
          </div>
        <input type="Submit" value="Submit"/>
      </form>  
      </div>

      </>
  );
};

