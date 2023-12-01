import React ,{useEffect,useState}from "react";

import axios from "axios"
export default function EmployeeComponent(){
    const [Lists,setLists]=useState([]);
    // api fetch for INDIVIDUAL
    useEffect(()=>{
     axios.get(`http://localhost:3000/api/get-employee`)
     .then((response)=>{
         setLists(response.data);
     })
     .catch((error)=>{
        console.log("get eror:",error.message? error.message:error)
      
      })
    },[]);
    return (
        <div className="app">
       
        {Lists.map((list,index) => {
           return (
             <div className="design">
              <div className="details" key={list.id}>
               <p className="details">Name : {list.name}</p>
                 <p className="details">Email: {list.email}</p>
                 <p className="details">phone : {list.phone}</p>
        
               </div>
              </div>
           );
        })}
      </div>
    );
}