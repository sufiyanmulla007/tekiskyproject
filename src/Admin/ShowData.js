import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from '../styles/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ShowData = () => {
  const [id,setId]=useState(0);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [employee,setEmployee]=useState("");
  const [batch,setBatch]=useState("");
  const [fess,setFess]=useState("");
  const [mob,setMob]=useState("");
  const [course,setCourse]= useState("");
  const [joining,setJoining]=useState("");
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
const navigate=useNavigate();
  useEffect(()=>{
setId(localStorage.getItem("id"));
setName(localStorage.getItem("name"));
setEmail(localStorage.getItem("email"));
setEmployee(localStorage.getItem("employee"));
setBatch(localStorage.getItem("batch"));
setFess(localStorage.getItem("fess"));
setMob(localStorage.getItem("mob"));
setCourse(localStorage.getItem("course"));
setJoining(localStorage.getItem("joining"));
setCard(localStorage.getItem("card"));
setTrainer(localStorage.getItem("trainer"));
setClang(localStorage.getItem("clang"));
setCl(localStorage.getItem("cl"));
setCla(localStorage.getItem("cla"));
setIns(localStorage.getItem("ins"));setInst(localStorage.getItem("inst"));
setRec(localStorage.getItem("rec"));setRecp(localStorage.getItem("recp"));
setAdd(localStorage.getItem("add"));setRep(localStorage.getItem("rep"));
setTfee(localStorage.getItem("tfee"));setBfee(localStorage.getItem("bfee"));
setRema(localStorage.getItem("rema"));setSta(localStorage.getItem("sta"));
  },[])
  const handlesubmit=(e)=>{
    e.preventDefault();
  //  console.log("click")
  axios.put(`https://63a7f25df4962215b5784e6d.mockapi.io/tekisky-student/${id}`,{
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
      navigate("/read");
    });
  }
  return (
    <>
    <div className='container mt-5'>
         <h2>Tekisky Student Details</h2>
          <Form>
              <Form.Group className="mb-3" >
              <Form.Label>Full Name</Form.Label>
              <input type="text" name='name' className="form-control" placeholder="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />
              </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <input type="text" name='email' className="form-control" placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Employee</Form.Label>
            <input type="text" name='employee' className="form-control" placeholder="employee No"
            value={employee}
            onChange={(e)=>setEmployee(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Batch</Form.Label>
            <input type="text" name='batch' className="form-control" placeholder="Batch"
            value={batch}
            onChange={(e)=>setBatch(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Fees</Form.Label>
            <input type="text" name='fess' className="form-control" placeholder="fees"
            value={fess}
            onChange={(e)=>setFess(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Contact</Form.Label>
            <input type="text" name='mob' className="form-control" placeholder="contact NO"
            value={mob}
            onChange={(e)=>setMob(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Course</Form.Label>
              <input type="text" name='course' className="form-control" placeholder="course"
              value={course}
              onChange={(e)=>setCourse(e.target.value)}
              />
              </Form.Group>
              <Form.Group className="mb-3" >
              <Form.Label>Joining</Form.Label>
              <input type="date" name='joining' className="form-control" placeholder="joining date"
              value={joining}
              onChange={(e)=>setJoining(e.target.value)}
              />
              </Form.Group>
              <Form.Group className="mb-3" >
              <Form.Label>Id Card Issue</Form.Label>
            <input type="text" name='card' className="form-control" placeholder="card"
            value={card}
            onChange={(e)=>setCard(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Trainer</Form.Label>
            <input type="text" name='trainer' className="form-control" placeholder="trainer"
            value={trainer}
            onChange={(e)=>setTrainer(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Frist Language</Form.Label>
            <input type="text" name='clang' className="form-control" placeholder="Frist Language"
            value={clang}
            onChange={(e)=>setClang(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Second Language</Form.Label>
            <input type="text" name='cl' className="form-control" placeholder="Second Language"
            value={cl}
            onChange={(e)=>setCl(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Third Language</Form.Label>
            <input type="text" name='cla' className="form-control" placeholder="Third Language"
            value={cla}
            onChange={(e)=>setCla(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Frist installment</Form.Label>
            <input type="text" name='ins' className="form-control" placeholder="instalment"
            value={ins}
            onChange={(e)=>setIns(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Second installment</Form.Label>
            <input type="text" name='inst' className="form-control" placeholder="instalment"
            value={inst}
            onChange={(e)=>setInst(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Third installment</Form.Label>
            <input type="text" name='rec' className="form-control" placeholder="instalment3"
            value={rec}
            onChange={(e)=>setRec(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Fourth installment</Form.Label>
            <input type="text" name='recp' className="form-control" placeholder="instalment4"
            value={recp}
            onChange={(e)=>setRecp(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Address</Form.Label> 
            <input type="text" name='add' className="form-control" placeholder="Address"
            value={add}
            onChange={(e)=>setAdd(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Repeat</Form.Label> 
            <input type="text" name='rep' className="form-control" placeholder="repeat"
            value={rep}
            onChange={(e)=>setRep(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Total Fees</Form.Label>
            <input type="text" name='tfee' className="form-control" placeholder="Total fees"
            value={tfee}
            onChange={(e)=>setTfee(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Balance Fees</Form.Label>
            <input type="text" name='bfee' className="form-control" placeholder="Balance fess"
            value={bfee}
            onChange={(e)=>setBfee(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Remark</Form.Label>
            <input type="text" name='rema' className="form-control" placeholder="remark"
            value={rema}
            onChange={(e)=>setRema(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Status</Form.Label>
            <input type="text" name='sta' className="form-control" placeholder="Status"
            value={sta}
            onChange={(e)=>setSta(e.target.value)}
            />
            </Form.Group>
              
              <Button variant="primary" type="submit" className='col-lg-1' 
              onClick={handlesubmit}
              >
                back
              </Button>
              
            </Form>
            </div>
    </>
  );
};

export default ShowData;
