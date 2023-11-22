import React, { useState } from 'react'
import Base from './Base'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function AddRecord({ userRecord, setUserRecord}) {
  const navigate = useNavigate()
  const [username, setName]=useState('')
  const [email, setEmail]=useState('')
  const [phone, setPhone]=useState('')
  const [website, setWebsite]=useState('')

    const addHandler =async()=>{
      const payload=({
        id: parseInt("1"),
        username,
        email,
        phone, 
        website
      })
      try {
      const data= await fetch(`https://6421c7e934d6cd4ebd7bbdbe.mockapi.io/user`, {
        method:'POST',
        body: JSON.stringify(payload),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      const response= await data.json()
      if(response){
        console.log(response)
      }
      navigate('/')
    }
    
  catch (error) {
    console.log('Data Not add')
  }
  }
  return (
    <Base>
      <Form className='form'>
        <Form.Group className="mb-3 input" controlId="name">
          <Form.Control type="text" placeholder="Name" value={username} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 input" controlId="email">
          <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 input" controlId="phone">
          <Form.Control type="text" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 input" controlId="website">
          <Form.Control type="text" placeholder="Website" value={website} onChange={(e)=>setWebsite(e.target.value)}/>
        </Form.Group>
        <Button onClick={addHandler} variant='primary'>Add</Button>
      </Form>
      
    </Base>
  )
}

export default AddRecord