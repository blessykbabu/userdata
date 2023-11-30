import React ,{useEffect,useState}from "react";

import axios from "axios"
export default function EmployeeProfileComponent(){
    const [Lists,setLists]=useState([]);
    // api fetch for employee list
    useEffect(()=>{
     axios.get(`http://localhost:3000/api/emp-list`)
     .then((response)=>{
         setLists(response.data);
     })
     .catch((error)=>{
        console.log("get eror:",error.message? error.message:error)
      
      })
    },[]);

//  UI
return (
    <>
    <div className="listTable">

        <h2>EMPLOYEE LIST</h2>

     
     
        <table className="table table-success table-striped  ">
        <thead>
          <tr>
          <th scope="col">SL No</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Department</th>
          <th scope="col">Phone</th>
          <th scope="col"></th>
          
          </tr>
        </thead>
        <tbody>
        {Lists.map((list,index) => {
       return (
        <tr key={index}>
          <td>{index+1}</td>
         <td>{list.name}</td>
         <td>{list.email}</td>
         <td>{list.role}</td>
         <td>{list.phone}</td>
         <td><button onClick="view" className="btn btn-success">view</button></td>
         </tr>
         )
        })}
      
        </tbody>
      </table>
     
 

    </div>
    
    </>
);
};