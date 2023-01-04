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
const [course,setCourse]= useState("");
const [joining,setJoining]= useState("");
const [card,setCard]=useState("");
const [trainer,setTrainer]=useState("");
const [clang,setClang]=useState("");
const [cl,setCl]=useState("");
const [cla,setCla]=useState("");
const [ins,setIns]=useState("");
const [inst,setInst]=useState("");
const [rec,setRec]=useState("");
const [recp,setRecp]=useState("");
const [add,setAdd]=useState("");
const [rep,setRep]=useState("");
const [tfee,setTfee]=useState("");
const [bfee,setBfee]=useState("");
const [rema,setRema]=useState("");
const [sta,setSta]=useState("");
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
    course:course,
    joining:joining,
    card:card,
    trainer:trainer,
   clang:clang,
   cl:cl,
   cla:cla,
   ins:ins,inst:inst,rec:rec,recp:recp,
   add:add,rep:rep,
   tfee:tfee,bfee:bfee,
   rema:rema,sta:sta,
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
              <input type="text" name='name' className="form-control" placeholder="Full Name"
              onChange={(e)=>setName(e.target.value)}
              />
              </Form.Group>

            <Form.Group className="mb-3" >
            <input type="text" name='email' className="form-control" placeholder="Email Id"
            onChange={(e)=>setEmail(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='employee' className="form-control" placeholder="Employee No"
            onChange={(e)=>setEmployee(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='batch' className="form-control" placeholder="Batch"
            onChange={(e)=>setBatch(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='fess' className="form-control" placeholder="Fees"
            onChange={(e)=>setFess(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='mob' className="form-control" placeholder="contact NO"
            onChange={(e)=>setMob(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
              <input type="text" name='course' className="form-control" placeholder="Course/Designation"
              value={course}
              onChange={(e)=>setCourse(e.target.value)}
              />
              </Form.Group>
              <Form.Group className="mb-3" >
              <input type="date" name='joining' className="form-control" placeholder="joining date"
              value={joining}
              onChange={(e)=>setJoining(e.target.value)}
              />
              </Form.Group>
              <Form.Group className="mb-3" >
              <input type="text" name='card' className="form-control" placeholder="Id Card Issue"
              value={card}
              onChange={(e)=>setCard(e.target.value)}
              />
              </Form.Group>
              <Form.Group className="mb-3" >
            <input type="text" name='trainer' className="form-control" placeholder="Trainer"
            value={trainer}
            onChange={(e)=>setTrainer(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='clang' className="form-control" placeholder="Frist Language"
            value={clang}
            onChange={(e)=>setClang(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='cl' className="form-control" placeholder="Second Language"
            value={cl}
            onChange={(e)=>setCl(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='cla' className="form-control" placeholder="Third Language"
            value={cla}
            onChange={(e)=>setCla(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='ins' className="form-control" placeholder="Frist installment"
            value={ins}
            onChange={(e)=>setIns(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='inst' className="form-control" placeholder="Second installment"
            value={inst}
            onChange={(e)=>setInst(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='rec' className="form-control" placeholder="Third installment"
            value={rec}
            onChange={(e)=>setRec(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='recp' className="form-control" placeholder="Fourth installment"
            value={recp}
            onChange={(e)=>setRecp(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='add' className="form-control" placeholder="Address"
            value={add}
            onChange={(e)=>setAdd(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='rep' className="form-control" placeholder="Repeat"
            value={rep}
            onChange={(e)=>setRep(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='tfee' className="form-control" placeholder="Total Fees"
            value={tfee}
            onChange={(e)=>setTfee(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='bfee' className="form-control" placeholder="Balance Fees"
            value={bfee}
            onChange={(e)=>setBfee(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='rema' className="form-control" placeholder="Remark"
            value={rema}
            onChange={(e)=>setRema(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <input type="text" name='sta' className="form-control" placeholder="Status"
            value={sta}
            onChange={(e)=>setSta(e.target.value)}
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
