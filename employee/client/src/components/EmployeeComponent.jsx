import axios from "axios"
import React ,{useState}from "react";
import { useParams,Link } from "react-router-dom";

export default function EmployeeComponent(){
  


let {id}=useParams();
const [data,setData] = useState([]);
// console.log("id from useParams : ", id);
    // api fetch for INDIVIDUAL
    
axios.get(`http://localhost:3000/api/get-employee/${id}`)
  .then((response)=>{
         setData(response.data);
         console.log(response.status,response.data);
    // console.log("Single employee data : ", response.data);
     })
  .catch((error)=>{
        console.log("get eror:",error.message? error.message:error)
      
      })
   
const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value});
}


    
           return (
            <>
            <h3 style={{textAlign:'center',opacity:0.88,padding:20,color:"black"}}>Details Of {data.name}</h3>
<div className="regfrm" style={{opacity:0.77}}>
 <div className="container mx-auto col-sm-12 col-md-12 col-lg-5 s ">
 
 <form >
   
     <div className="shadow-lg bg-body rounded" style={{ backgroundColor:"white",opacity:0.75}}>
     <div>
     <p style={{textAlign:"center",margin:10}}>PERSONAL INFORMATION</p>
   </div>
     <div className="mb-3 "  style={{padding:20}}>
     <label htmlFor="name" className="form-label">Name</label>
         <input type="text" className="form-control" id="name"  name='name' value={data.name} onChange={handleChange}/>
       </div>
     <div className="mb-3 " style={{padding:20}}>
       <label htmlFor="email" className="form-label"> Personal Email </label>
       <input type="email" className="form-control" id="email" name='email' value={data.email} onChange={handleChange}/>
     </div>
     <div className="mb-3" style={{padding:20}}>
         <label htmlFor="phone" className="form-label">Phone</label>
         <input type="text" className="form-control" id="phone" name='phone' value={data.phone} onChange={handleChange}/>
       </div>
     <div className="mb-3" style={{padding:20}}>
       <label htmlFor="place" className="form-label">Place</label>
       <input type="text" className="form-control" id="place" name='place' value={data.place} onChange={handleChange}/>
     </div>
     <div className="mb-3" style={{padding:20}}>
         <label htmlFor="district" className="form-label">District</label>
         <input type="text" className="form-control" id="district" name='district' value={data.district}/>
       </div>
     <div className="mb-3" style={{padding:20}}>
         <label htmlFor="state" className="form-label">State</label>
         <input type="text" className="form-control" id="state"  name='state' value={data.state} onChange={handleChange}/>
       </div>
      
       <div className="mb-3" style={{padding:20}}>
         <label htmlFor="Dateofbirth" className="form-label">Date of birth</label>
         <input type="text" className="form-control" id="date" name='date' value={data.date} onChange={handleChange}/>
       </div>
      
      

       <div>
     <p style={{textAlign:"center",margin:10}}>COMPANY DETAILS</p>
   </div>

   
       <div className="mb-3" style={{padding:20}}>
         <label htmlFor="role" className="form-label">Post</label>
         <input type="text" className="form-control" id="role" name='role' value={data.role} onChange={handleChange}/>
       </div>
       <div className="mb-3" style={{padding:20}}>
         <label htmlFor="jdate" className="form-label">Join Date</label>
         <input type="text" className="form-control" id="jdate" name='jdate' value={data.jdate} onChange={handleChange}/>
       </div>
     <div className="mb-3 " style={{padding:20}}>
       <label htmlFor="cemail" className="form-label">Email address</label>
       <input type="email" className="form-control" id="cemail" name='cemail' value={data.cemail} onChange={handleChange}/>
     </div>
     <div className="mb-3" style={{padding:20}}>
         <label htmlFor="exp" className="form-label">Experience</label>
         <input type="text" className="form-control" id="exp" value={data.exp} name='exp' onChange={handleChange}/>
       </div>
    
       <button className="btn btn-success"><Link to={`/edit/${data._id}`}  style={{textDecoration:"none",color:"white"}}>Update</Link></button>
     
     </div>
   </form>  
   </div>
   </div>
   </>
           );
       
    
}