import React, { useEffect, useState } from 'react'
import Base from './Base'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

function EditRecord({ userRecord, setUserRecord }) {
  const navigate = useNavigate()
  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const { id } = useParams()

  
  useEffect(()=>{
    const datas = userRecord.find((item) => item.id == id)
    setName(datas.username)
    setEmail(datas.email)
    setPhone(datas.phone)
    setWebsite(datas.website)
  },[id, userRecord])
  
  const editHandler = async () => {
    const load=({
      username,
      email,
      phone,
      website,
    })
    try {
      const data = await fetch(`https://6421c7e934d6cd4ebd7bbdbe.mockapi.io/user/${id}`,{
        method:'PUT',
        body: JSON.stringify(load),
        headers:{
          'Content-Type':'application/json'
        }
      })
      const response = await data.json()
      console.log(response)
      if (response) {
        const editableUser = userRecord?.findIndex((item) => item.id === id)
        userRecord[editableUser] = response
       await setUserRecord([...userRecord])
       
      }
    } catch (error) {
      console.log('Error in editing')
    }
    navigate('/')
  }

  return (
    <Base>
      <Form className='form'>
        <Form.Group className="mb-3 input" controlId="name">
          <Form.Control type="text" placeholder="Name" value={username} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 input" controlId="email">
          <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 input" controlId="phone">
          <Form.Control type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3 input" controlId="website">
          <Form.Control type="text" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </Form.Group>
        <Button onClick={editHandler} variant='primary'>Update</Button>
      </Form>
    </Base>
  )
}
export default EditRecord
