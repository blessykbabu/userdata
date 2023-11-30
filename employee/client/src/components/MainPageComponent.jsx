import  React from 'react'
// import {BrowserRouter as Router, Link, Routes , Route} from 'react-router-dom';
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
import RegForm from './RegFormComponent';
import EmpData from './EmployeeProfileComponent';
export default function  MainPage(){
return(
    <>

    <Router>
        {/* <nav>
            <ul>
                <li><Link to="/Registration">Registration</Link></li>
                <li><Link to="/view">View Employee List</Link></li>
            </ul>
        </nav> */}

        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className='m-5'><Link to="/Registration">Registration</Link></li>
    
      <li className='m-5'><Link to="/view">View Employee List</Link></li>
      
      </ul>
    </div>
  </div>
</nav> */}
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav bg-dark">
      <li className='m-5'><Link to="/Registration">Registration</Link></li>
    
    <li className='m-5'><Link to="/view">Employee List</Link></li>
      </ul>
    </div>
  </div>
</nav>

        
        <Routes>
            <Route path='/Registration' element={<RegForm/>}/>
            <Route path='/view' element={<EmpData/>}/>
        </Routes>
    </Router>
    </>
)
}
