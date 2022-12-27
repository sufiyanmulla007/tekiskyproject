import React from 'react'
import styled from 'styled-components';
import { Form } from "react-bootstrap";
const RegStudent = () => {
  return (
    <>
   <Wrapper>
   <div className="form-div">
      <form
      action="https://formspree.io/f/mrgvzyjv"
      method="POST"
      >
      <h1 className="formhead">Registration Form</h1>
        <div className="form-headings">
          
          <h3>Personal Details</h3>
        </div>
        <table>
          <tbody>
            <tr>
              <th>
                <label>Full Name</label>
              </th>
              <td className="input-div">
                <input type="text" name='name' className="input-field" />
              </td>
            </tr>
            <tr>
              <th>
                <label>Date Of Birth</label>
              </th>
              <td className="input-div">
                <input type="date" name='date' className="input-field" />
              </td>
            </tr>
            <tr>
              <th>
                <label>Gender</label>
              </th>
              <td className="input-div">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  
                />{" "}
                Female
              </td>
            </tr>
            <tr>
              <th>
                <label>Nationality</label>
              </th>
              <td className="input-div">
                <input type="text" name='text' className="input-field" />
              </td>
            </tr>

            <tr>
              <th>
                <label>Mobile Number</label>
              </th>
              <td className="input-div">
                <input type="tel" name='tel' className="input-field" />
              </td>
            </tr>

            <tr>
              <th>
                <label>Email Id</label>
              </th>
              <td className="input-div">
                <input type="email" name='email' className="input-field" />
              </td>
            </tr>

            <tr>
              <th>
                <label>Corresponding address</label>
              </th>
              <td className="input-div">
                <input type="text" name='text' className="input-field" />
              </td>
            </tr>
          </tbody>
          <div className="form-headings">
            <h3>Course Details</h3>
          </div>
          <tbody>
            <tr>
              <th>
                <label>Course Name</label>
              </th>
              <td className="input-div">
                <td className="input-div">
                  <input
                    type="radio"
                    name="course"
                    value="Front end developer"
                    
                  />{" "}
                  Front end developer
                  <input
                    type="radio"
                    name="course"
                    value="Back end developer"
                
                  />
                  Back end developer
                  <input
                    type="radio"
                    name="course"
                    value="full stack developer"
                    
                  />
                  Full stack developer
                </td>
              </td>
            </tr>
            <tr>
              <th>Session/Year</th>
              <td>
                <input type="tel" name='tel' className="input-field"/>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="form-headings">
          <h3 className="form-head">Educational Details</h3>
        </div>
        <table border="2px" >
          <thead >
            <tr className="table-div">
              <th>Exam Passed</th>
              <th>Name Of School / Board</th>
              <th>Year of Passing</th>
              <th>% of marks</th>
            </tr>
          </thead>
          <tbody >
            <tr className="table-div">
              <td>
                10 <sup>th</sup>
              </td>
              <td>
                <input type="text" name='text' className="input-field2"/>
              </td>
              <td>
                <input type="text" name='text' className="input-field2" />
              </td>
              <td>
                <input type="text" name='text' className="input-field2" />
              </td>
            </tr>
            <tr className="table-div">
              <td>
                12 <sup>th</sup>
              </td>
              <td>
                <input type="text" name='text' className="input-field2" />
              </td>
              <td>
                <input type="text" name='text' className="input-field2" />
              </td>
              <td>
                <input type="text" name='text' className="input-field2" />
              </td>
            </tr>
            <tr className="table-div">
              <td>Graduation</td>
              <td>
                <input type="text" name='text' className="input-field2" />
              </td>
              <td>
                <input type="text" name='text' className="input-field2" />
              </td>
              <td>
                <input type="text" name='text' className="input-field2" />
              </td>
            </tr>
            <tr className="table-div">
              <td>Other</td>
              <td>
                <input type="text" name='text' className="input-field2" />
              </td>
              <td>
                <input type="text" name='text' className="input-field2" />
              </td>
              <td>
                <input type="text" name='text' className="input-field2" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="form-headings">
          <h3 className="form-head">Declaration</h3>
        </div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name='checkbox'
            label="The information submitted in admission form is complete and accurate to best of my knowledge and will abide by company rules."
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Upload Photo</Form.Label>
          <Form.Control type="file" name='file' placeholder="upload file" />
        </Form.Group>
        <div className="submit-btn-div">
          <button type="submit" className="submit-btn" value="send" >
            Submit
          </button>
        </div>
      </form>
    </div>
   </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
.form-div{
  width: 1000px;
  padding: 50px;
  border: 2px solid gray;
  margin: 20px 250px;
  border-radius: 20px;
}
.form-headings{
  width: 300px;
  padding: 10px;
  margin: 20px;
  border-bottom: 2px solid black;
  box-shadow: 0px 4px 4px rgba(0.5, 0.5, 0.5, 0.5);
}
.table-div th{
  padding: 10px ;
  margin: 10px;
  border: 2px solid black;
  text-align: center;
}
.table-div td{
  padding: 05px ;
  border: 2px solid black;
}
.submit-btn{
  background-color: #3366FF;
  border-radius: 20px;
  width: 100px;
  padding: 10px 20px;
  font-weight: bolder;
  color: white;
  margin: 20px 300px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0.5, 0.5, 0.5, 0.5);
}
.formhead{
  margin: 10px 40px;
  text-align: center;
}
.input-field{
  width: 300px;
  padding: 5px;
  margin: 5px;
}

.input-field2{
  width: 250px;
  padding: 5px;
  margin: 5px;
}   
    
`;
export default RegStudent;


