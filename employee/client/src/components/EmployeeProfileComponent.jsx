import React ,{useEffect,useState}from "react";

import axios from "axios"
export default function EmpData(){
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
return(
    <>
    <div className="listTable">

        <h2>EMPLOYEE LIST</h2>

        {Lists.map((list) => {
       return (
         <div className="design">
          <div className="refer" key={list.id}>
           <p className="name">Name : {list.name}</p>
             <p className="email">Email : {list.email}</p>
             <p className="phone"> Comment : {list.phone}</p>
            
           </div>
          </div>
       );
    })
    }

    </div>
    
    </>
);
};