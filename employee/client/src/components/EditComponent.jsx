import axios from "axios"
import React ,{useState}from "react";
import { useParams,Link } from "react-router-dom";

export default function EditComponent(){
  
const [data,setData] = useState([]);
let {id}=useParams();
// console.log("id from useParams : ", id);
    // api fetch for INDIVIDUAL
    
axios.get(`http://localhost:3000/api/get-employee/${id}`)
  .then((response)=>{
         setData(response.data);
         console.log(response.status,response.data);
    console.log("Single employee data : ", response.data);
     })
  .catch((error)=>{
        console.log("get eror:",error.message? error.message:error)
      
      })
   

      axios.put(`http://localhost:3000/api/update/${id}`)
      .then((response)=>{
             setData(response.data);
             console.log(response.status,response.data);      })
      .catch((error)=>{
            console.log("get eror:",error.message? error.message:error)
          
          })
    
    
           return (
            <>
            {/* <h3 style={{textAlign:'center',opacity:0.88,padding:20,color:"black"}}> Update {data.name}'s Profile</h3> */}
<div className="regfrm" style={{opacity:0.77}}>
 <div className="container mx-auto col-sm-12 col-md-12 col-lg-5 s ">
 
 <form>
   
     <div className="shadow-lg bg-body rounded" style={{ backgroundColor:"white",opacity:0.75}}>
     <div>
     <p style={{textAlign:"center",margin:10}}>PERSONAL INFORMATION</p>
   </div>
     <div className="mb-3 "  style={{padding:20}}>
     <label htmlFor="name" className="form-label">Name</label>
         <input type="text" className="form-control" id="name"   value={data.name}/>
       </div>
     <div className="mb-3 " style={{padding:20}}>
       <label htmlFor="email" className="form-label"> Personal Email </label>
       <input type="email" className="form-control" id="email"  value={data.email}/>
     </div>
     <div className="mb-3" style={{padding:20}}>
         <label htmlFor="phone" className="form-label">Phone</label>
         <input type="text" className="form-control" id="phone"  value={data.phone}/>
       </div>
     <div className="mb-3" style={{padding:20}}>
       <label htmlFor="place" className="form-label">Place</label>
       <input type="text" className="form-control" id="place"  value={data.place} />
     </div>
     <div className="mb-3" style={{padding:20}}>
         <label htmlFor="district" className="form-label">District</label>
         <input type="text" className="form-control" id="district" value={data.district}/>
       </div>
     <div className="mb-3" style={{padding:20}}>
         <label htmlFor="state" className="form-label">State</label>
         <input type="text" className="form-control" id="state" value={data.state}/>
       </div>
      
       <div className="mb-3" style={{padding:20}}>
         <label htmlFor="Dateofbirth" className="form-label">Date of birth</label>
         <input type="text" className="form-control" id="date" value={data.date}/>
       </div>
      
      

       <div>
     <p style={{textAlign:"center",margin:10}}>COMPANY DETAILS</p>
   </div>

   
       <div className="mb-3" style={{padding:20}}>
         <label htmlFor="role" className="form-label">Post</label>
         <input type="text" className="form-control" id="role" value={data.role}/>
       </div>
       <div className="mb-3" style={{padding:20}}>
         <label htmlFor="jdate" className="form-label">Join Date</label>
         <input type="text" className="form-control" id="jdate" value={data.jdate}/>
       </div>
     <div className="mb-3 " style={{padding:20}}>
       <label htmlFor="cemail" className="form-label">Email address</label>
       <input type="email" className="form-control" id="cemail"  value={data.cemail}/>
     </div>
     <div className="mb-3" style={{padding:20}}>
         <label htmlFor="exp" className="form-label">Experience</label>
         <input type="text" className="form-control" id="exp" value={data.exp}/>
       </div>
       <input  style={{margin:20}}  type="Submit" value="Save"/>
       
     
     </div>
   </form>  
   </div>
   </div>
   </>
           );
       
    
}