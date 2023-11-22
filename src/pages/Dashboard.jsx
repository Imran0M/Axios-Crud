import React, { useEffect } from 'react'
import Base from './Base'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

function Dashboard({userRecord , setUserRecord}) {
   const navigate= useNavigate()
  useEffect(()=>{
     const fetchData= async()=>{
      try {
        const data =await fetch('https://6421c7e934d6cd4ebd7bbdbe.mockapi.io/user',{
          method:'GET',
          headers:{
            "Content-Type":"application/json"
          }
        })
        const response = await data.json()
          if(response){
            setUserRecord(response)
          }
      } catch (error) {
        console.log('Data Not fetch')
      }
     } 
     fetchData()
  },[])

  const deleteHandler=async(idx)=>{
  try {
    const data= await fetch(`https://6421c7e934d6cd4ebd7bbdbe.mockapi.io/user/${idx}`,{
      method:'DELETE',
      headers:{
        "Content-Type":"application/json"
      }
    })
    const deletedData = userRecord.filter((data) => data.id != idx)
    setUserRecord(deletedData)
  } catch (error) {
    console.log('Error in deleteing Item')
  }
  }

  return (
   <Base>
   {userRecord && <div className='card-container'>{ userRecord?.map((item)=>(
    <div className='card' key={item.id}>
      <p>{item.username}</p>
      <p>{item.email}</p>
      <p>{item.phone}</p>
      <p>{item.website}</p>
      <div className='button-container'>
      <Button onClick={()=>deleteHandler(item.id)} variant="secondary" >Drop</Button>
      <Button onClick={()=>navigate(`/editrecord/${item.id}`)} variant='dark'>Edit</Button>
      </div>
    </div>
   ))}</div>}
   
   </Base>
  )
}

export default Dashboard