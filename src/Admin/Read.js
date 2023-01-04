import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import {BiShowAlt} from 'react-icons/bi';
import { Button } from '../styles/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Read = () => {
const [data,setData]=useState([]);
//table dark
const [tabledark, setTableDark] = useState("");
//search function
const [inputtext,setInputtext]=useState("");

const getData=()=>{
axios.get("https://63a7f25df4962215b5784e6d.mockapi.io/tekisky-student")
.then((res)=>{
    console.log(res.data);
    setData(res.data);
});
}
//delete function
const handleDelete=(id)=>{
axios.delete(`https://63a7f25df4962215b5784e6d.mockapi.io/tekisky-student/${id}`)
.then(()=>{
    getData();
});
}
//edit function
const setToLocalStorage=(id,name,email,employee,batch,fess,mob,course,
  joining,card,trainer,clang,cl,cla,ins,inst,rec,recp,add,rep,
  tfee,bfee,rema,sta,
  )=>{
localStorage.setItem("id",id);
localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("employee",employee);
localStorage.setItem("batch",batch);
localStorage.setItem("fess",fess);
localStorage.setItem("mob",mob);
localStorage.setItem("course",course);
localStorage.setItem("joining",joining);
localStorage.setItem("card",card);
localStorage.setItem("trainer",trainer);
localStorage.setItem("clang",clang);
localStorage.setItem("cl",cl);
localStorage.setItem("cla",cla);
localStorage.setItem("ins",ins);localStorage.setItem("inst",inst);
localStorage.setItem("rec",rec);localStorage.setItem("recp",recp);
localStorage.setItem("add",add);localStorage.setItem("rep",rep);
localStorage.setItem("tfee",tfee);localStorage.setItem("bfee",bfee);
localStorage.setItem("rema",rema);localStorage.setItem("sta",sta);
};

useEffect(()=>{
    getData();
},[]);

//search function
const inputhandel=(e)=>{
  setInputtext(e.target.value.toLowerCase());
}
  return (
    <>
    <Wrapper>
    <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
    <div className="d-flex justify-content-between m-5">
    <h2>Tekisky Student</h2>
    <div className='search' style={{height:"20%"}}>
    <input type="search" placeholder="Search" 
    onChange={inputhandel}
    />
    </div>
    <Link to="/Create">
    <Button>Create</Button>
    </Link>
    </div>
     <Table className={`table ${tabledark}`}>
     <thead>
          <tr>
            <th scope="col" style={{fontSize:"15px"}}>SR.No</th>
            <th scope="col"style={{fontSize:"15px"}}>Name</th>
            <th scope="col"style={{fontSize:"15px"}}>Email</th>
            <th scope="col"style={{fontSize:"15px"}}>Employee Id</th>
            <th scope="col"style={{fontSize:"15px"}}>Batch NO</th>
            <th scope="col"style={{fontSize:"15px"}}>Fees</th>
            <th scope="col"style={{fontSize:"15px"}}>Mobile</th>
            {/* <th scope="col"></th>
            <th scope="col"></th> */}
             </tr>
        </thead>
        {
         data.filter((el)=>{
         if(el === ""){
          return el
         }else{
          return(el.name.toLowerCase().includes(inputtext)||
          el.email.toLowerCase().includes(inputtext)
          );

         }
         }).map((eachData,item)=>{
         return (
            <>
            <tbody>
        <tr key={item}>
          <td style={{fontSize:"17px"}}>{item+1}</td>
          <td style={{fontSize:"17px"}}>{eachData.name}</td>
          <td style={{fontSize:"17px"}}>{eachData.email}</td>
          <td style={{fontSize:"17px"}}>{eachData.employee}</td>
          <td style={{fontSize:"17px"}}>{eachData.batch}</td>
          <td style={{fontSize:"17px"}}>{eachData.fess}</td>
          <td style={{fontSize:"17px"}}>{eachData.mob}</td>
          <td>
        <Link to="/update">
        <Tooltip title="Edit">
         <EditIcon className='icon'
         onClick={()=>setToLocalStorage(
            eachData.id,
            eachData.name,
            eachData.email,
            eachData.employee,
            eachData.batch,
            eachData.fess,
            eachData.mob,
            eachData.course,
            eachData.joining,
            eachData.card,
            eachData.trainer,
            eachData.clang,
            eachData.cl,
            eachData.cla,
            eachData.ins,eachData.inst,
            eachData.rec,eachData.recp,
            eachData.add,eachData.rep,
            eachData.tfee,eachData.bfee,
            eachData.rema,eachData.sta,
         )}
         />
         </Tooltip>
         </Link>
          </td>
          <td>
        <Tooltip title="Delete">
        <DeleteIcon className='icon'
        onClick={()=>handleDelete(eachData.id)}
        />
        </Tooltip>
            </td>
            <td>
            <Link to="/ShowData">
            
            <BiShowAlt className='icon'
            onClick={()=>setToLocalStorage(
              eachData.id,
              eachData.name,
              eachData.email,
              eachData.employee,
              eachData.batch,
              eachData.fess,
              eachData.mob,
              eachData.course,
              eachData.joining,
              eachData.card,
              eachData.trainer,
              eachData.clang,
              eachData.cl,
              eachData.cla,
              eachData.ins,eachData.inst,
              eachData.rec,eachData.recp,
              eachData.add,eachData.rep,
              eachData.tfee,eachData.bfee,
              eachData.rema,eachData.sta,
           )}
            />
            
            </Link>
            </td>
        </tr>
        
      </tbody>
            </>
         )
        })
      
      }
    </Table>
    </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
.icon{
  color:red;
  cursor:pointer;
  font-size: 2.5rem;
  // border: 1px solid black;
  // background-color: black;
}
`;
export default Read;
