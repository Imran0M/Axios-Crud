import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Base({children}) {
    const navigate= useNavigate()
  return (
    <>
     <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >Axios Crud</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end gap-3 mouse">
          <Navbar.Text onClick={()=>navigate('/')}>
           Dashboard
          </Navbar.Text>
          <Navbar.Text onClick={()=>navigate('/addrecord')}>
            Add Record
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <main>{children}</main>
    </>
  )
}

export default Base