import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegForm from './components/RegFormComponent'
import EmpData from './components/EmployeeProfileComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <RegForm/> */}
    <EmpData/>
    </>
  )
}

export default App
