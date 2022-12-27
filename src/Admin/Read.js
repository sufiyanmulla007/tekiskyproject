import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
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
const setToLocalStorage=(id,name,email,employee,batch,fess,mob)=>{
localStorage.setItem("id",id);
localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("employee",employee);
localStorage.setItem("batch",batch);
localStorage.setItem("fess",fess);
localStorage.setItem("mob",mob);
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
            <th scope="col" style={{fontSize:"15px"}}>#</th>
            <th scope="col"style={{fontSize:"15px"}}>Name</th>
            <th scope="col"style={{fontSize:"15px"}}>Email</th>
            <th scope="col"style={{fontSize:"15px"}}>employee</th>
            <th scope="col"style={{fontSize:"15px"}}>batch</th>
            <th scope="col"style={{fontSize:"15px"}}>fees</th>
            <th scope="col"style={{fontSize:"15px"}}>mobile</th>
            
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
         }).map((eachData)=>{
         return (
            <>
            <tbody>
        <tr>
          <td style={{fontSize:"17px"}}>{eachData.id}</td>
          <td style={{fontSize:"17px"}}>{eachData.name}</td>
          <td style={{fontSize:"17px"}}>{eachData.email}</td>
          <td style={{fontSize:"17px"}}>{eachData.employee}</td>
          <td style={{fontSize:"17px"}}>{eachData.batch}</td>
          <td style={{fontSize:"17px"}}>{eachData.fess}</td>
          <td style={{fontSize:"17px"}}>{eachData.mob}</td>
          <td>
        <Link to="/update">
        <Tooltip title="Edit">
         <EditIcon 
         onClick={()=>setToLocalStorage(
            eachData.id,
            eachData.name,
            eachData.email,
            eachData.employee,
            eachData.batch,
            eachData.fess,
            eachData.mob,
         )}
         style={{ color: "red", cursor: "pointer", fontSize:"2.5rem"}}/>
         </Tooltip>
         </Link>
          </td>
          <td>
        <Tooltip title="Delete">
        <DeleteIcon 
        onClick={()=>handleDelete(eachData.id)}
        style={{ color: "red", cursor: "pointer", fontSize:"2.5rem" }}/>
        </Tooltip>
            </td>
        </tr>
        
      </tbody>
            </>
         )
        })
      
      }
    </Table>
    </>
  );
};

export default Read;
