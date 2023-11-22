import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import AddRecord from './pages/AddRecord';
import EditRecord from './pages/EditRecord';

function App() {
    const [userRecord , setUserRecord]= useState([])
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Dashboard userRecord={userRecord} setUserRecord={setUserRecord}/>}></Route>
      <Route path='/addrecord' element={<AddRecord userRecord={userRecord} setUserRecord={setUserRecord}/>}></Route>
      <Route path='/editrecord/:id' element={<EditRecord userRecord={userRecord} setUserRecord={setUserRecord}/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
