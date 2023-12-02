import React ,{useState}from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
export default function EmployeeComponent(){
  const {id}=useParams();
const [data,setData] = useState([]);
    // api fetch for INDIVIDUAL
    
     axios.get(`http://localhost:3000/api/get-employee/${id}`)
     .then((response)=>{
         setData(response.data);
     })
     .catch((error)=>{
        console.log("get eror:",error.message? error.message:error)
      
      })
   


    
    
           return (
             <div className="design">
              <div className="details" >
               <p className="details">Name : {data.name}</p>
                 <p className="details">Email: {data.email}</p>
                 <p className="details">phone : {data.phone}</p>
        
               </div>
              </div>
           );
       
    
}