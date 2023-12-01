import { useState } from 'react'
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MainPage from './components/MainPageComponent'
import Links from './components/LinkComponent'
import EmployeeProfileComponent from './components/EmployeeProfileComponent'
import RegFormComponent from './components/RegFormComponent'
import LinkComponent from './components/LinkComponent'
import EmployeeComponent from './components/EmployeeComponent';
import MainPageComponent from './components/MainPageComponent'
import Employee2 from './components/Employee2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <RegFormComponent/> */}
    {/* <EmployeeProfileComponent/> */}
   {/* <EmployeeComponent/> */}
    
   {/* <LinkComponent/> */}
   <MainPageComponent/>
   {/* <Employee2/> */}

    </>
  )
}

export default App
