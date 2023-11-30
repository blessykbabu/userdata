import  React from 'react'
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
import RegForm from './RegFormComponent';
import EmpData from './EmployeeProfileComponent';
import Links from './LinkComponent';
export default function  MainPageComponent(){
return(
   <>

 <Routes>
             <Route path='/' element={<Links/>}/>
            <Route exact path='/registration' element={<RegForm/>}/>
            <Route path='/view' element={<EmpData/>}/>
        </Routes>
      
   </>
)
}
