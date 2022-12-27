import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Update = () => {
const [id,setId]=useState(0);
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [employee,setEmployee]=useState("");
const [batch,setBatch]=useState("");
const [fess,setFess]=useState("");
const [mob,setMob]=useState("");
const navigate =useNavigate();
useEffect(()=>{
setId(localStorage.getItem("id"));
setName(localStorage.getItem("name"));
setEmail(localStorage.getItem("email"));
setEmployee(localStorage.getItem("employee"));
setBatch(localStorage.getItem("batch"));
setFess(localStorage.getItem("fess"));
setMob(localStorage.getItem("mob"));
},[]);
const handleupdate=(e)=>{
    e.preventDefault();
    axios.put(`https://63a7f25df4962215b5784e6d.mockapi.io/tekisky-student/${id}`,{
    name: name,
    email: email,
    employee:employee,
    batch:batch,
    fess:fess,
    mob:mob,
    })
    .then(() => {
        navigate("/read");
      });
};

  return (
   <>
   
   <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
        <Modal.Title>Update</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <h3 className='text-center col-lg-6'>Student Details</h3>
            <Form>
              <Form.Group className="mb-3" >
              <input type="text" name='name' className="form-control" placeholder="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />
              </Form.Group>

            <Form.Group className="mb-3" >
            <input type="text" name='email' className="form-control" placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='employee' className="form-control" placeholder="employee No"
            value={employee}
            onChange={(e)=>setEmployee(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='batch' className="form-control" placeholder="Batch"
            value={batch}
            onChange={(e)=>setBatch(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='fess' className="form-control" placeholder="fees"
            value={fess}
            onChange={(e)=>setFess(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='mob' className="form-control" placeholder="contact NO"
            value={mob}
            onChange={(e)=>setMob(e.target.value)}
            />
            </Form.Group>
              
              {/* <Button variant="primary" type="submit" className='col-lg-10' style={{height:"3rem",fontSize:"2rem",background: "rgb(67, 185, 127)"}}
            //   onClick={handlesubmit}
              >
                Submit
              </Button> */}
              
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Link to="/read">
          <Button variant="secondary"
          style={{height:"5rem", fontSize:"2rem"}}
          >Close</Button>
          </Link>
          <Button variant="primary" onClick={handleupdate}
          style={{height:"5rem", fontSize:"2rem"}}
          >Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
   </>
  );
};

export default Update;
