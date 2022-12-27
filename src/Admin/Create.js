import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Create = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [employee,setEmployee]=useState("");
const [batch,setBatch]=useState("");
const [fess,setFess]=useState("");
const [mob,setMob]=useState("");

const history=useNavigate();

const handlesubmit =(e)=>{
  e.preventDefault();
  console.log("clciekd");
  axios.post("https://63a7f25df4962215b5784e6d.mockapi.io/tekisky-student",{
    name: name,
    email: email,
    employee:employee,
    batch:batch,
    fess:fess,
    mob:mob,
  })
  .then(() => {
    history("/read");
  });
};
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3" style={{ width: "100%" }}>
            <div className="d-flex justify-content-between m-2">
            <h3 className='text-center col-lg-6'>Student Details</h3>
            <Link to="/read">
            <button className="btn btn-primary">Show Data</button>
            </Link>
            </div>
            <Form>
              <Form.Group className="mb-3" >
              <input type="text" name='name' className="form-control" placeholder="name"
              onChange={(e)=>setName(e.target.value)}
              />
              </Form.Group>

            <Form.Group className="mb-3" >
            <input type="text" name='email' className="form-control" placeholder="email"
            onChange={(e)=>setEmail(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='employee' className="form-control" placeholder="employee No"
            onChange={(e)=>setEmployee(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='batch' className="form-control" placeholder="Batch"
            onChange={(e)=>setBatch(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='fess' className="form-control" placeholder="fees"
            onChange={(e)=>setFess(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='mob' className="form-control" placeholder="contact NO"
            onChange={(e)=>setMob(e.target.value)}
            />
            </Form.Group>
              
              <Button variant="primary" type="submit" className='col-lg-10' style={{height:"3rem",fontSize:"2rem",background: "rgb(67, 185, 127)"}}
              onClick={handlesubmit}
              >
                Submit
              </Button>
              
            </Form>
          </div>
          <div className="rigth_data mt-3" style={{ width: "100%" }}>
            <div className="sign_img mt-3">
             <img src="images/crud.svg" style={{ maxWidth: 400 }} alt="pic"/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Create;
