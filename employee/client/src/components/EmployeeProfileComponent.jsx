import React ,{useEffect,useState}from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { useParams } from "react-router-dom";

import axios from "axios"
export default function EmployeeProfileComponent(){
  
    const [Lists,setLists]=useState([]);
    // api fetch for employee list
    const {id}=useParams();

    
     axios.get(`http://localhost:3000/api/emp-list`)
     .then((response)=>{
         setLists(response.data);
         console.log(response)
     })
     .catch((error)=>{
        console.log("get eror:",error.message? error.message:error)
      
      })
   

 

  

//  UI
return (
    <>
    <div className="listTable">

        <h2>EMPLOYEE LIST</h2>

     
     
        <table className="table table-success table-striped  ">
        <thead>
          <tr>
          <th scope="col">SL No</th>
          <th scope="col">Emp_ID</th>
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
        <tr key={list._id}>
          <td>{index+1}</td>
          <td>{list.id}</td>
         <td>{list.name}</td>
         <td>{list.email}</td>
         <td>{list.role}</td>
         <td>{list.phone}</td>
         <td><button className="btn btn-success"><Link to={`/profile/${list._id}`}>view</Link></button></td>
         </tr>
         )
        })}
      
        </tbody>
      </table>
     
 

    </div>
    
    </>
);
};